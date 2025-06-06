import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

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
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading='lazy'
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ opacity: isImgLoaded ? 1 : 0, transition: 'opacity 0.2s ease-in' }}
      onLoad={() => setIsImgLoaded(true)}
    />
  );
}

export default LazyLoadImage;
