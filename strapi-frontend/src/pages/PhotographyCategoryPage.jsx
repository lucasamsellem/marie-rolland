import { API_URL } from '../api/api';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import { useLocation } from 'react-router-dom';
import { getPathEndpoint } from '../utils/getPathEndpoint';
import WithLoaderAndError from '../components/WithLoaderAndError';
import LazyLoadImage from '../components/LazyLoadImage';

function PhotographyCategoryPage() {
  const { pathname } = useLocation();
  const endpoint = getPathEndpoint(pathname.split('/')[1]);
  const { data, isLoading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <WithLoaderAndError isLoading={isLoading} error={error}>
      {endpoint === 'equestrians' ? (
        <article className='grid grid-cols-2 gap-10 px-10'>
          <p>
            <strong>Particulier</strong> : vous souhaitez révéler les liens spéciaux qui vous
            unissent à votre cheval ? Vous souhaitez immortaliser ce qui le rend unique, le mettre
            en valeur dans toute son authenticité et son naturel ? Je suis à votre disposition pour
            discuter de vos désirs et vous proposer différentes formules adaptées !
          </p>
          <p>
            <strong>Professionnel</strong> : Eleveur, gérant de centre équestre, association,
            marque… vous souhaitez de belles images pour mettre en avant le caractère de vos
            chevaux, promouvoir votre structure, faire vivre votre activité au plus proche de
            l’image que vous souhaitez transmettre, le tout avec une touche d’élégance et de
            dynamisme. Je vous propose une prestation sur mesure, adaptée à vos besoins, en une
            session ou sur une base régulière.
          </p>
          <div className='col-span-2 text-center mt-2'>
            <p>
              <strong>Contactez-moi</strong> : photographe@marie-rolland.com
            </p>
          </div>
        </article>
      ) : null}

      <ul className='flex flex-col gap-1 px-2'>
        {data?.data.map((picture) => {
          const multiPictures = picture?.multiPictures;
          const singlePicture = picture?.singlePicture;

          if (multiPictures !== null && multiPictures?.length > 0) {
            return (
              <ul className='flex gap-1'>
                {multiPictures.map((pic) => (
                  <li key={pic?.id} className='overflow-hidden rounded'>
                    <LazyLoadImage
                      src={`${API_URL}${pic?.url}`}
                      alt={pic?.alternativeText}
                      className='w-auto h-full object-cover'
                    />
                  </li>
                ))}
              </ul>
            );
          } else if (singlePicture) {
            return (
              <li key={singlePicture?.id}>
                <LazyLoadImage
                  src={`${API_URL}${singlePicture?.url}`}
                  alt={singlePicture?.alternativeText}
                  className='picture'
                />
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </WithLoaderAndError>
  );
}

export default PhotographyCategoryPage;
