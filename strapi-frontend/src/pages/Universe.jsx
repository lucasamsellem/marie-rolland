import { getPathEndpoint } from '../utils/getPathEndpoint';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import PicturesLayout from '../layout/PicturesLayout';

export default function Universe() {
  const endpoint = getPathEndpoint();
  const { data, loading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <PicturesLayout fetchedData={data} isLoading={loading} error={error} endpoint={endpoint} />
  );
}
