import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { useParams } from 'react-router-dom';
import { API_URL } from '../api/api';
import Loader from '../components/Loader';
import { formatTitle } from '../utils/formatTitle';

function ManagedArtist() {
  const { artistName } = useParams();
  const { data, isLoading, error } = useFetchStrapi(
    `managements?filters[slug][$eq]=${artistName}&populate=*`
  );

  const fetchedData = data?.data[0];
  const formattedName = formatTitle(artistName);
  const mainPicture = fetchedData?.pictures[0];
  const bio = fetchedData?.bio;

  if (isLoading) return <Loader />;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <h1 className='font-bold text-4xl'>{formattedName}</h1>
      <div>
        <img src={`${API_URL}${mainPicture?.url}`} alt={mainPicture?.alternativeText} />
      </div>
      <article>
        {bio?.map((text) => text?.children?.map((child) => <p key={child?.id}>{child?.text}</p>))}
      </article>
    </div>
  );
}

export default ManagedArtist;
