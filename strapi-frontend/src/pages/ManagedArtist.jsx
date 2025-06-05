import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../api/api';
import Loader from '../components/Loader';

function ManagedArtist() {
  const { pathname } = useLocation();
  const endpoint = pathname.split('/').at(-1);
  const { data, isLoading, error } = useFetchStrapi(`managements/?populate=*`);

  const foundArtist = data?.data?.find((artist) => artist?.slug === endpoint);
  const picture = foundArtist?.pictures[0];

  if (isLoading) return <Loader />;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <h1 className='font-bold text-4xl'>{foundArtist?.name}</h1>
      <div>
        <img src={`${API_URL}${picture?.url}`} alt={picture?.alternativeText} />
      </div>
      <article>
        {foundArtist?.bio?.map((text) =>
          text?.children?.map((child) => <p key={child?.id}>{child?.text}</p>)
        )}
      </article>
    </div>
  );
}

export default ManagedArtist;
