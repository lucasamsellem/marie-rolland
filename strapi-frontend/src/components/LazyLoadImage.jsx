// LazyLoadImage.js
import { useState, useEffect, useRef } from 'react';
import ImageLoaded from './ImageLoaded';

function LazyLoadImage({ src, alt, className }) {
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
      { threshold: 0.1 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ImageLoaded
      ref={imgRef}
      src={src}
      alt={alt}
      isLazy={true}
      className={className}
      isVisible={isVisible}
    />
  );
}

export default LazyLoadImage;
