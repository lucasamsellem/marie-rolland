import { useFetchStrapi } from '../hooks/useFetchStrapi';
import ContactForm from '../components/ContactForm';
import { API_URL } from '../api/api';
import Loader from '../components/Loader';

export default function About() {
  const { data, isLoading, error } = useFetchStrapi('about?populate=*');

  const bio = data?.data?.bio;
  const picture = data?.data?.picture;

  if (isLoading) return <Loader />;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className='grid grid-cols-2'>
      <img src={API_URL + picture?.url} alt={picture?.alternativeText} className='picture' />

      <article>{bio?.map((text) => text?.children?.map((child) => <p>{child?.text}</p>))}</article>

      <ContactForm />
    </div>
  );
}
