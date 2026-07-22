import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Experience from "../components/Experience";

// Home / landing page. Navbar + Footer are provided by the App layout.
const Body = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      className="bg-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Work />
      <Experience />
    </motion.main>
  );
};

export default Body;
