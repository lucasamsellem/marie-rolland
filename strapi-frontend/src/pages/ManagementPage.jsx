import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../api/api';
import { formatTitle } from '../utils/formatTitle';
import WithLoaderAndError from '../components/WithLoaderAndError';

function Management() {
  const { data, isLoading, error } = useFetchStrapi(`managements/?populate=*`);

  return (
    <WithLoaderAndError isLoading={isLoading} error={error}>
      <ul className='flex gap-x-10 justify-center'>
        {data?.data.map((artist) => {
          const artistPicture = artist?.pictures[0];

          return (
            <NavLink
              to={`/management/${artist?.slug}`}
              key={artist?.id}
              className='flex flex-col gap-5 bg-gray-100 p-5 rounded-xl text-center max-w-[20rem]'
            >
              <h2 className='font-bold text-2xl '>{artist?.name}</h2>
              <img
                src={`${API_URL}${artistPicture?.url}`}
                alt={artistPicture?.alternativeText}
                className='rounded-xl w-full'
              />
              <h4 className='font-semibold text-xl'>{formatTitle(artist?.instrument)}</h4>
            </NavLink>
          );
        })}
      </ul>
    </WithLoaderAndError>
  );
}

export default Management;
