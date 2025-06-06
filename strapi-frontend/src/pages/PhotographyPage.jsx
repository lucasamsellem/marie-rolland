import { useEffect, useCallback } from 'react';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { API_URL } from '../api/api';
import { NavLink } from 'react-router-dom';

const photoCategories = [
  { to: '/photography/musicians', label: 'Musiciens', className: 'bg-musicians' },
  { to: '/photography/equestrian', label: 'Équestre', className: 'bg-equestrian' },
  { to: '/photography/my-universe', label: 'Mon Univers', className: 'bg-my-universe' },
];

function Photography() {
  const { data, isLoading, error } = useFetchStrapi('photography?populate=*');

  const bgImage = data?.data?.bgPic?.url;
  const musiciansBgImg = data?.data?.musiciansBgPic?.url;
  const equestrianBgImg = data?.data?.equestrianBgPic?.url;
  const myUniverseBgPic = data?.data?.myUniverseBgPic?.url;

  const changeBackground = useCallback((imgUrl, className) => {
    const fullUrl =
      API_URL.endsWith('/') || imgUrl.startsWith('/') ? API_URL + imgUrl : `${API_URL}/${imgUrl}`;

    document.body.classList.remove('bg-musicians', 'bg-equestrian', 'bg-my-universe');

    if (className) document.body.classList.add(className);

    document.body.style.backgroundImage = `url(${fullUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  // Précharge et applique le bgImage principal
  useEffect(() => {
    if (!bgImage) return;

    const fullUrl =
      API_URL.endsWith('/') || bgImage.startsWith('/')
        ? API_URL + bgImage
        : `${API_URL}/${bgImage}`;

    const img = new Image();
    img.src = fullUrl;

    img.onload = () => {
      changeBackground(bgImage);
    };

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
      document.body.classList.remove('bg-musicians', 'bg-equestrian', 'bg-my-universe');
    };
  }, [bgImage, changeBackground]);

  // Précharge aussi les images au survol pour éviter délai à l’hover
  useEffect(() => {
    [musiciansBgImg, equestrianBgImg, myUniverseBgPic].forEach((imgUrl) => {
      if (!imgUrl) return;
      const fullUrl =
        API_URL.endsWith('/') || imgUrl.startsWith('/') ? API_URL + imgUrl : `${API_URL}/${imgUrl}`;

      const img = new Image();
      img.src = fullUrl;
    });
  }, [musiciansBgImg, equestrianBgImg, myUniverseBgPic]);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div className='flex flex-col text-4xl ml-10 font-semibold absolute z-1 top-1/2'>
      {photoCategories.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          onMouseEnter={() => {
            if (to === photoCategories[0].to && musiciansBgImg) {
              changeBackground(musiciansBgImg, 'bg-musicians');
            } else if (to === photoCategories[1].to && equestrianBgImg) {
              changeBackground(equestrianBgImg, 'bg-equestrian');
            } else if (to === photoCategories[2].to && myUniverseBgPic) {
              changeBackground(myUniverseBgPic, 'bg-my-universe');
            }
          }}
          onMouseLeave={() => changeBackground(bgImage)}
          className='text-white hover:text-marie-gold transition-all duration-200 py-6 tracking-wide text-shadow-lg'
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

export default Photography;
