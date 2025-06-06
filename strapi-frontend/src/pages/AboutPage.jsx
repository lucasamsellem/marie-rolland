import { useFetchStrapi } from '../hooks/useFetchStrapi';
import ContactForm from '../components/ContactForm';
import { API_URL } from '../api/api';
import WithLoaderAndError from '../components/WithLoaderAndError';
import { NavLink } from 'react-router-dom';
import ImageLoaded from '../components/ImageLoaded';

export default function About() {
  const { data, isLoading, error } = useFetchStrapi('about?populate=*');
  const bio = data?.data?.bio;
  const picture = data?.data?.picture;

  return (
    <WithLoaderAndError isLoading={isLoading} error={error}>
      <div className='side-padding'>
        <div className='grid grid-cols-2 gap-x-5'>
          <ImageLoaded
            src={API_URL + picture?.url}
            alt={picture?.alternativeText}
            className='picture'
          />
          <article>
            {bio?.map((text) => text?.children?.map((child) => <p>{child?.text}</p>))}
          </article>
        </div>

        <div className='flex flex-col gap-5'>
          <ContactForm />
          <NavLink to={'/legal-terms'} className='font-semibold underline text-center'>
            Mentions légales
          </NavLink>
        </div>
      </div>
    </WithLoaderAndError>
  );
}
