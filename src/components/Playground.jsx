import car_gif from "../assets/gifs/car.gif";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary w-screen flex flex-col font-poppins items-center px-6 md:px-[10rem] mx-auto mt-[150px] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-[rgb(182,154,137)] text-5xl font-medium">
        Playground
      </div>
      {/* Contact me */}
      <Marquee autoFill>
        <div>
          <div
            id="contact"
            className="text-2xl md:text-5xl flex flex-col mb-10 my-16 shadow-neu rounded-3xl items-center justify-center text-center mx-2 font-medium"
          >
            <img src={car_gif} alt="loading..." className="rounded-3xl" />
          </div>
        </div>
      </Marquee>

      {/* contact me */}
    </motion.div>
  );
};

export default Playground;
