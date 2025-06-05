import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../api/api';

function ManagedArtist() {
  const { pathname } = useLocation();
  const endpoint = pathname.split('/').at(-1);
  const { data, loading, error } = useFetchStrapi(`managements/?populate=*`);

  const foundArtist = data?.data?.find((artist) => artist?.slug === endpoint);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <h1 className='font-bold text-4xl'>{foundArtist?.name}</h1>
      <div>
        <img
          src={`${API_URL}${foundArtist?.pictures[0]?.url}`}
          alt={foundArtist?.pictures[0]?.alternativeText}
        />
      </div>
      <article>
        {foundArtist?.bio?.map((text) => text?.children?.map((child) => <p>{child?.text}</p>))}
      </article>
    </div>
  );
}

export default ManagedArtist;
