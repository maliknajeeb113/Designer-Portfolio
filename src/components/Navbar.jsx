import { Cross as Hamburger } from "hamburger-react";
import { FaBehance,FaLinkedinIn,FaXTwitter,FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from './Button';
import Socials from "./Socials";

const variants = {
  open: { opacity: 1},
  closed: { opacity: 0 },
}


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <motion.nav className={`bg-primary flex flex-col w-screen text-[rgb(85,85,85)] px-6 md:px-[10rem] font-poppins fixed top-0  z-10 items-center ${isNavOpen ? "min-h-screen" : ""}`} 
    >
      <div className={`container flex py-4 items-center justify-between`}>
        <div className="font-medium text-3xl text-[rgb(182,154,137)]" id="Logo">
          <Link to={"/"}>Avni.</Link>
        </div>
        <div className={`${isNavOpen?"shadow-neu-i":"shadow-neu"} rounded-full p-3 z-10`} id="Hamburger">
          <Hamburger
            rounded
            toggled={isNavOpen}
            toggle={setIsNavOpen}
          ></Hamburger>
        </div>
      </div>
      <motion.div
        animate={isNavOpen ? "open" : "closed"}
        transition={{duration:1}}
        exit={{ opacity: 0 }}
        variants={variants}
        id="nav-items"
        aria-expanded={isNavOpen}
      > 
      <motion.div className={`${isNavOpen ? "":"hidden"}`}
      animate={isNavOpen ? "open" : "closed"}
        transition={{duration:1}}
        exit={{ opacity: 0 }}
        variants={variants}>
        <div className="flex flex-col gap-10 items-center p-10">
          

            <Button to="/" onClick={toggleNav} nav={true}>Home</Button>

         

          <Button to="/about" onClick={toggleNav} nav={true}>About</Button>

          
          <Button to="/playground" onClick={toggleNav} nav={true}>Playground</Button>

          <Socials/>

        </div>
        
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
