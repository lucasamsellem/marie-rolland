import { getPathEndpoint } from '../utils/getPathEndpoint';
import PicturesLayout from '../layout/PicturesLayout';
import { useFetchStrapi } from '../hooks/useFetchStrapi';
import React from 'react';

export default function Equestrian() {
  const endpoint = getPathEndpoint();
  const { data, loading, error } = useFetchStrapi(`${endpoint}?populate=*`);

  return (
    <>
      {data?.data[0]?.cta.map((paragraph, i) => (
        <p key={i}>
          {paragraph.children.map((child, j) => {
            const parts = child.text.split('\n');

            return parts.map((part, k) => {
              const content = child.bold ? (
                <strong key={`${i}-${j}-${k}`}>{part}</strong>
              ) : (
                <span key={`${i}-${j}-${k}`}>{part}</span>
              );

              // Ajoute <br /> après chaque ligne sauf la dernière
              return k < parts.length - 1 ? (
                <React.Fragment key={`${i}-${j}-${k}`}>
                  {content}
                  <br />
                </React.Fragment>
              ) : (
                content
              );
            });
          })}
        </p>
      ))}

      <PicturesLayout fetchedData={data} isLoading={loading} error={error} endpoint={endpoint} />
    </>
  );
}
