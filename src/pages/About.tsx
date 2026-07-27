import { useEffect } from "react";
import { motion } from "framer-motion";
import Experience from "../components/Experience";

// About page — hosts the "Where I've been." blurb + experience list
// (moved here from the home page). Navbar + Footer come from the App layout.
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      className="bg-white pt-32 font-sans sm:pt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Experience />
    </motion.main>
  );
};

export default About;
