import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../api/api';
import { formatTitle } from '../utils/formatTitle';
import Loader from '../components/Loader';

function Management() {
  const { data, isLoading, error } = useFetchStrapi(`managements/?populate=*`);

  if (isLoading) return <Loader />;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
      <ul className='flex gap-x-10 justify-center'>
        {data?.data.map((artist) => (
          <NavLink
            to={`/management/${artist?.slug}`}
            key={artist?.id}
            className='flex flex-col gap-5 bg-gray-100 p-5 rounded-xl text-center max-w-[25rem]'
          >
            <h2 className='font-bold text-2xl '>{artist?.name}</h2>
            <img
              src={`${API_URL}${artist?.pictures[0]?.url}`}
              alt={artist?.pictures[0]?.alternativeText}
              className='rounded-xl w-full'
            />
            <h4 className='font-semibold text-xl'>{formatTitle(artist?.instrument)}</h4>
          </NavLink>
        ))}
      </ul>
    </>
  );
}

export default Management;
