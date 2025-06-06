import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from '../api/api';
import { formatTitle } from '../utils/formatTitle';
import WithLoaderAndError from '../components/WithLoaderAndError';
import ImageLoaded from '../components/ImageLoaded';

function ManagedArtist() {
  const { artistName } = useParams();
  const { data, isLoading, error } = useFetchStrapi(
    `managements?filters[slug][$eq]=${artistName}&populate=*`
  );

  const fetchedData = data?.data[0];
  const formattedName = formatTitle(artistName);
  const mainPicture = fetchedData?.pictures[0];
  const bio = fetchedData?.bio;

  return (
    <WithLoaderAndError isLoading={isLoading} error={error}>
      <div className='side-padding'>
        <NavLink to='/management' className='nav-link mb-5'>
          &lt; Retour
        </NavLink>
        <h1 className='font-bold text-4xl text-center mb-10'>{formattedName}</h1>
        <div className='grid grid-cols-2 gap-5'>
          <ImageLoaded
            src={`${API_URL}${mainPicture?.url}`}
            alt={mainPicture?.alternativeText}
            className='picture transition-all duration-300 ease-in-out'
          />
          <article>
            {bio?.map((text) =>
              text?.children?.map((child) => (
                <p key={child?.id} className='mb-2'>
                  {child?.text}
                </p>
              ))
            )}
          </article>
        </div>
      </div>
    </WithLoaderAndError>
  );
}

export default ManagedArtist;
