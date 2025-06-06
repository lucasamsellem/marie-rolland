import { useState, forwardRef } from 'react';

const ImageLoaded = forwardRef(({ src, alt, className, isLazy, isVisible = true }, ref) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading={isLazy ? 'lazy' : 'eager'}
      style={{
        opacity: isImgLoaded && isVisible ? 1 : 0,
        scale: isImgLoaded && isVisible ? 1 : 0.95,
        transition: 'all 0.3s ease-in-out',
      }}
      onLoad={() => setIsImgLoaded(true)}
    />
  );
});

export default ImageLoaded;
