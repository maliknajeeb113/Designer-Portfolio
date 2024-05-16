import car_gif from "../assets/playground/car.gif";
import porsche from "../assets/playground/Porsche.gif";
import zara from "../assets/playground/zara.png";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary w-screen top-[120px] flex flex-col items-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px] mb-10"
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
        className="grid grid-cols-12 mt-16 gap-4 justify-center "
      >
        <div
          id="contact"
          className="shadow-neu rounded-3xl md:col-span-7 row-span-2 col-span-12"
        >
          <img
            src={porsche}
            alt="porsche"
            className="rounded-3xl object-contain w-full max-h-full"
          />
        </div>

        <div id="contact" className="shadow-neu rounded-3xl col-span-3 row-span-2 flex ">
          <img src={car_gif} alt="car" className="rounded-3xl object-cover" />
        </div>
        <div
          id="contact"
          className="shadow-neu rounded-3xl col-start-7 col-span-5 col-end-12 flex"
        >
          <img src={zara} alt="zara" className="rounded-3xl object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default Playground;
