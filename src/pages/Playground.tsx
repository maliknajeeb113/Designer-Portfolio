import { useEffect } from "react";
import { motion } from "framer-motion";
import LazyImage from "../components/LazyImage";
import { playgroundImages } from "../constants";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="w-screen top-[120px] flex flex-col items-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px] mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-[rgb(182,154,137)] text-5xl font-medium">
        Playground
      </div>

      <div
        id="mega-grid"
        className="container flex flex-col mt-16 gap-4 justify-center"
      >
        {Array.from(new Set(playgroundImages.map((img) => img.row)))
          .sort((a, b) => a - b)
          .map((rowNumber) => {
            const rowImages = playgroundImages.filter((img) => img.row === rowNumber);
            
            return (
              <div key={rowNumber} className={rowImages.length > 1 ? "flex flex-row gap-4" : ""}>
                {rowImages.map((image) => (
                  <div key={image.id} className={image.containerClassName}>
                    <LazyImage
                      imageSrc={image.actualImgPath}
                      placeholderSrc={image.placeholderImgPath}
                      altText={image.altText}
                    />
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </motion.div>
  );
};

export default Playground;
