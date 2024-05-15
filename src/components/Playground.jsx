import car_gif from "../assets/gifs/car.gif";
import porsche from "../assets/gifs/Porsche.gif";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary w-screen top-[120px] flex flex-col items-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px] h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-[rgb(182,154,137)] text-5xl font-medium">
        Playground
      </div>
      {/* Contact me */}
      {/* <Marquee autoFill pauseOnHover speed={100}> */}
        <div id="mega-grid" className="grid grid-cols-12 mt-16 gap-4 mx-2">
          <div
            id="contact"
            className="shadow-neu rounded-3xl col-span-6"
          >
            <img src={porsche} alt="porsche" className="rounded-3xl object-contain w-full max-h-full" />
          </div>

          <div
            id="contact"
            className="shadow-neu rounded-3xl col-span-6 flex"
          >
            <img src={car_gif} alt="car" className="rounded-3xl object-cover" />
          </div>
          
        </div>
      {/* </Marquee> */}

      {/* contact me */}
    </motion.div>
  );
};

export default Playground;
