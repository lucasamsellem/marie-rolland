import { API_URL } from '../api/api';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import { getPathEndpoint } from '../utils/getPathEndpoint';

function PhotographyCategoryPage() {
  const { pathname } = useLocation();
  const endpoint = getPathEndpoint(pathname.split('/')[1]);

  const { data, isLoading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  if (isLoading) return <Loader />;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <ul className='flex flex-col gap-2 px-2'>
      {data?.data.map((picture) => {
        const multiPictures = picture?.multiPictures;
        const singlePicture = picture?.singlePicture;

        if (multiPictures !== null && multiPictures?.length > 0) {
          return (
            <ul
              style={{ gridTemplateColumns: `repeat(${multiPictures?.length}, 1fr)` }}
              className='grid gap-2 w-full'
            >
              {multiPictures.map((pic) => (
                <li key={pic?.id} className='overflow-hidden rounded'>
                  <img
                    src={`${API_URL}${pic?.url}`}
                    alt={pic?.alternativeText}
                    className='w-full h-full object-cover'
                  />
                </li>
              ))}
            </ul>
          );
        } else if (singlePicture) {
          return (
            <li key={singlePicture?.id}>
              <img
                src={`${API_URL}${singlePicture?.url}`}
                alt={singlePicture?.alternativeText}
                className='picture'
              />
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}

export default PhotographyCategoryPage;
