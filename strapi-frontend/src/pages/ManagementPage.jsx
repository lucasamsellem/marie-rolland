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
              className='flex flex-col gap-5 max-w-[35rem] max-h-[30rem] overflow-hidden shadow relative rounded-lg'
            >
              <img
                src={`${API_URL}${artistPicture?.url}`}
                alt={artistPicture?.alternativeText}
                className='rounded-lg w-full object-cover h-full hover:scale-105 transition duration-300 ease-in-out'
              />
              <div className='flex flex-col gap-1 absolute bg-white bottom-5 right-5 p-3 rounded-lg'>
                <h2 className='font-bold text-xl'>{artist?.name}</h2>
                <h4 className='font-medium rounded-md text-md'>
                  {formatTitle(artist?.instrument)}
                </h4>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </WithLoaderAndError>
  );
}

export default Management;
