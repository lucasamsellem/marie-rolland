import { useState } from 'react';

function ImageLoaded({ src, alt, className }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        opacity: isImgLoaded ? 1 : 0,
        scale: isImgLoaded ? 1 : 0.95,
        transition: 'all 0.3s ease-in-out',
      }}
      onLoad={() => setIsImgLoaded(true)}
    />
  );
}

export default ImageLoaded;
