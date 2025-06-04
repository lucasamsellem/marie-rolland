import { useFetchStrapi } from '../hooks/useFetchStrapi';

function PicturesLayout({ endpoint }) {
  const { data, loading, error, LOCALHOST_URL } = useFetchStrapi(`${endpoint}?populate=*`);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className='w-full mx-auto px-2'>
      <ul className='w-full'>
        {data?.data.map((pictures) =>
          pictures?.pictures?.map((picture) => (
            <li key={picture?.id} className='mb-2'>
              <img
                src={`${LOCALHOST_URL}${picture?.url}`}
                alt={picture?.alternativeText}
                className='w-full rounded-md'
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default PicturesLayout;

// {data?.data.map((picture) => (
//           <li className='mb-2' key={picture?.id}>
//             <img
//               src={`${LOCALHOST_URL}${picture?.picture?.url}`}
//               alt={picture?.alternativeText}
//               className='w-full rounded-md'
//             />
//           </li>
//         ))}
