import { useState } from 'react';

function ImageLoaded({ src, alt, className }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ opacity: isImgLoaded ? 1 : 0, transition: 'all 0.2s ease-in' }}
      onLoad={() => setIsImgLoaded(true)}
    />
  );
}

export default ImageLoaded;
