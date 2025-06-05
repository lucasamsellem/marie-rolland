import { getPathEndpoint } from '../utils/getPathEndpoint';
import PicturesLayout from '../layout/PicturesLayout';
import { useFetchStrapi } from '../hooks/useFetchStrapi';

export default function Musicians() {
  const endpoint = getPathEndpoint();
  const { data, isLoading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <PicturesLayout fetchedData={data} isLoading={isLoading} error={error} endpoint={endpoint} />
  );
}
