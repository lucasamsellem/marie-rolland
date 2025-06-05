import { NavLink } from 'react-router-dom';
import { useFetchStrapi } from '../hooks/useFetchStrapi';

function Photography() {
  const { data, loading, error } = useFetchStrapi('photographies?populate=*');

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <ul>
      {data?.data.map((category) => (
        <li key={category.id}>
          <NavLink to={`/photography/${category?.slug}`}>{category?.category}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Photography;
