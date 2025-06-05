import { API_URL } from '../api/api';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { useLocation } from 'react-router-dom';
import { getPathEndpoint } from '../utils/getPathEndpoint';
import WithLoaderAndError from '../components/WithLoaderAndError';

function PhotographyCategoryPage() {
  const { pathname } = useLocation();
  const endpoint = getPathEndpoint(pathname.split('/')[1]);

  const { data, isLoading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <WithLoaderAndError isLoading={isLoading} error={error}>
      <ul className='flex flex-col gap-1 px-2'>
        {data?.data.map((picture) => {
          const multiPictures = picture?.multiPictures;
          const singlePicture = picture?.singlePicture;

          if (multiPictures !== null && multiPictures?.length > 0) {
            return (
              <ul className='flex gap-1'>
                {multiPictures.map((pic) => (
                  <li key={pic?.id} className='overflow-hidden rounded'>
                    <img
                      src={`${API_URL}${pic?.url}`}
                      alt={pic?.alternativeText}
                      className='w-auto h-full object-cover'
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
    </WithLoaderAndError>
  );
}

export default PhotographyCategoryPage;
