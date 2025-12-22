import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        if (isMounted) {
          setImagesPreloaded(true);
        }
      })
      .catch((err) => {
        console.error("Failed to preload images", err);
        // Even if some fail, we probably want to show the content
        if (isMounted) {
          setImagesPreloaded(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return imagesPreloaded;
};
