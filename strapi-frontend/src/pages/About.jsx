import { useFetchStrapi } from '../hooks/useFetchStrapi';
import ContactForm from '../components/ContactForm';
import { API_URL } from '../api/api';

export default function About() {
  const { data, loading, error } = useFetchStrapi('abouts?populate=*');

  const bio = data?.data?.[0]?.bio;
  const picture = data?.data?.[0]?.picture;

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className='grid grid-cols-2'>
      <img src={API_URL + picture?.url} alt={picture?.alternativeText} className='picture' />

      <article>{bio?.map((text) => text?.children?.map((child) => <p>{child?.text}</p>))}</article>

      <ContactForm />
    </div>
  );
}
