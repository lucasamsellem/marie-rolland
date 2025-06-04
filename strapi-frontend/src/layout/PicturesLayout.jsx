import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { formatPathEndpoint } from '../utils/formatPathEndpoint';

const LOCALHOST_URL = 'http://localhost:1337';

function PicturesLayout({ endpoint }) {
  const { data, loading, error } = useFetchStrapi(`${endpoint}?populate=*`);
  const formattedEndpoint = formatPathEndpoint(endpoint);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className='max-w-[1200px] mx-auto p-[2rem]'>
      <h1 className='text-5xl font-bold'>{formattedEndpoint}</h1>
      <p>Bienvenue dans ma galerie photo de {formattedEndpoint}</p>

      <ul className='w-full'>
        {data?.data.map((picture) => (
          <li>
            <img
              src={`${LOCALHOST_URL}${picture?.picture?.url}`}
              key={picture?.id}
              alt={picture?.alternativeText}
              className='w-full rounded-md'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PicturesLayout;
