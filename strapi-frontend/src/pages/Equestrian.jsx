import { getPathEndpoint } from '../utils/getPathEndpoint';
import PicturesLayout from '../layout/PicturesLayout';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import React from 'react';

export default function Equestrian() {
  const endpoint = getPathEndpoint();
  const { data, isLoading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <>
      <article>
        <p>
          <strong>Particulier</strong> : vous souhaitez révéler les liens spéciaux qui vous unissent
          à votre cheval ? Vous souhaitez immortaliser ce qui le rend unique, le mettre en valeur
          dans toute son authenticité et son naturel ? Je suis à votre disposition pour discuter de
          vos désirs et vous proposer différentes formules adaptées !
        </p>
        <p>
          <strong>Professionnel</strong> : Eleveur, gérant de centre équestre, association, marque…
          vous souhaitez de belles images pour mettre en avant le caractère de vos chevaux,
          promouvoir votre structure, faire vivre votre activité au plus proche de l’image que vous
          souhaitez transmettre, le tout avec une touche d’élégance et de dynamisme. Je vous propose
          une prestation sur mesure, adaptée à vos besoins, en une session ou sur une base
          régulière.
        </p>
        <p>
          <strong>Contactez-moi</strong> : photographe@marie-rolland.com
        </p>
      </article>

      <PicturesLayout fetchedData={data} isLoading={isLoading} error={error} endpoint={endpoint} />
    </>
  );
}
