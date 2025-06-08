import { useEffect, useCallback, useMemo } from 'react';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { API_URL } from '../api/api';
import { NavLink } from 'react-router-dom';

const photoCategories = [
  {
    to: '/photography/musicians',
    label: 'Musiciens',
    className: 'bg-musicians',
    key: 'musiciansBgPic',
  },
  {
    to: '/photography/equestrian',
    label: 'Équestre',
    className: 'bg-equestrian',
    key: 'equestrianBgPic',
  },
  {
    to: '/photography/my-universe',
    label: 'Mon Univers',
    className: 'bg-my-universe',
    key: 'myUniverseBgPic',
  },
];

function Photography() {
  const { data, error } = useFetchStrapi('photography?populate=*');

  const images = useMemo(
    () => ({
      bgPic: data?.data?.bgPic?.url,
      musiciansBgPic: data?.data?.musiciansBgPic?.url,
      equestrianBgPic: data?.data?.equestrianBgPic?.url,
      myUniverseBgPic: data?.data?.myUniverseBgPic?.url,
    }),
    [data]
  );

  const preloadImage = (url) => {
    if (!url) return;
    const fullUrl =
      API_URL.endsWith('/') || url.startsWith('/') ? API_URL + url : `${API_URL}/${url}`;
    const img = new Image();
    img.src = fullUrl;
  };

  const setBackground = useCallback((url, className = '') => {
    if (!url) return;

    const fullUrl =
      API_URL.endsWith('/') || url.startsWith('/') ? API_URL + url : `${API_URL}/${url}`;

    document.body.classList.remove('bg-musicians', 'bg-equestrian', 'bg-my-universe');
    if (className) document.body.classList.add(className);

    document.body.style.backgroundImage = `url(${fullUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  useEffect(() => {
    if (!images.bgPic) return;

    preloadImage(images.bgPic);
    photoCategories.forEach((cat) => preloadImage(images[cat.key]));
    setBackground(images.bgPic);

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
      document.body.classList.remove('bg-musicians', 'bg-equestrian', 'bg-my-universe');
    };
  }, [images, setBackground]);

  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div className='flex flex-col text-[2.5rem] font-semibold fixed bottom-30 left-30 z-10 lowercase'>
      {photoCategories.map(({ to, label, className, key }) => (
        <NavLink
          key={to}
          to={to}
          onMouseEnter={() => setBackground(images[key], className)}
          onMouseLeave={() => setBackground(images.bgPic)}
          className='text-white hover:text-marie-gold transition-all duration-200 py-2 tracking-wide text-shadow-lg'
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

export default Photography;
