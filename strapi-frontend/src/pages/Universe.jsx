import { getPathEndpoint } from '../utils/getPathEndpoint';
import PicturesLayout from '../layout/PicturesLayout';

export default function Universe() {
  const endpoint = getPathEndpoint();

  return <PicturesLayout endpoint={endpoint} />;
}
