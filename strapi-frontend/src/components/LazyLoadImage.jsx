import { useState, useEffect, useRef } from 'react';

function LazyLoadImage({ src, alt, className }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading='lazy'
      style={{
        opacity: isImgLoaded && isVisible ? 1 : 0,
        scale: isImgLoaded && isVisible ? 1 : 0.95,
        transition: 'all 0.3s ease-in-out',
      }}
      onLoad={() => setIsImgLoaded(true)}
    />
  );
}

export default LazyLoadImage;
