import { getPathEndpoint } from '../utils/getPathEndpoint';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import PicturesLayout from '../layout/PicturesLayout';

export default function Universe() {
  const endpoint = getPathEndpoint();
  const { data, isLoading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <PicturesLayout fetchedData={data} isLoading={isLoading} error={error} endpoint={endpoint} />
  );
}
