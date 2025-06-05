import Loader from './Loader';

function WithLoaderAndError({ isLoading, error, children }) {
  if (isLoading) return <Loader />;
  if (error) return <p>Erreur: {error}</p>;

  return children;
}

export default WithLoaderAndError;
