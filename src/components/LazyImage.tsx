import { useEffect, useState } from "react";

interface LazyImageProps {
  imageSrc: string;
  altText?: string;
  placeholderSrc?: string;
}

const LazyImage = ({ imageSrc, altText, placeholderSrc }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (placeholderSrc) {
      const img = new Image();
      img.src = imageSrc;
      
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [imageSrc, placeholderSrc]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Placeholder - blurred tiny image */}
      {!isLoaded && placeholderSrc && (
        <>
          <img
            src={placeholderSrc}
            alt=""
            className="w-full h-auto blur-xl rounded-2xl md:rounded-3xl p-1 md:p-2"
          />
          {/* Pulse animation overlay */}
          <div className="absolute inset-0 animate-pulse bg-white/10 pointer-events-none" />
        </>
      )}
      
      {/* Full image - natural size */}
      <img
        src={imageSrc}
        alt={altText}
        loading="lazy"
        className={`w-full h-auto rounded-2xl md:rounded-3xl object-contain max-h-full p-1 md:p-2 transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
      />
    </div>
  );
};

export default LazyImage;