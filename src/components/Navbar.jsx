import { Cross as Hamburger } from "hamburger-react";
import { FaBehance,FaLinkedinIn,FaXTwitter,FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`${isNavOpen ? "h-screen" : ""} w-screen text-[rgb(85,85,85)] px-6 md:px-[10rem] font-poppins fixed top-0 bg-[rgb(241,241,241)] z-10`}>
      <div className="container flex py-4 items-center justify-between">
        <div className="font-medium text-3xl" id="Logo">
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
      <div
        className={`${isNavOpen ? "flex" : "hidden"} justify-center flex-col`}
        id="nav-items"
        aria-expanded={isNavOpen}
      >
        <div className="flex flex-col gap-10 items-center p-10">
          <Link to={"/"} onClick={toggleNav} >
            <button className="shadow-neu px-16 py-8 rounded-xl text-xl cursor-pointer active:shadow-neu-i hover:scale-105 duration-500">Home</button>
          </Link>
          <Link to={"/about"} onClick={toggleNav}>
            <button className="shadow-neu px-16 py-8 rounded-xl text-xl cursor-pointer active:shadow-neu-i hover:scale-105 duration-500">About</button>
          </Link>
          <Link to={"/playground"} onClick={toggleNav}>
            <button className="shadow-neu px-16 py-8 rounded-xl text-xl cursor-pointer active:shadow-neu-i hover:scale-105 duration-500">Playground</button>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-5">
            <Link to={"https://www.behance.net/avniigarg"} target="_blank"><button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                <FaBehance className="w-5 h-5 font-semibold"/>
            </button></Link>
            <Link to={"https://www.linkedin.com/in/garg-avni/"} target="_blank"><button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                <FaLinkedinIn className="w-5 h-5"/>
            </button></Link>
            <Link to={"https://twitter.com/avniigarg"} target="_blank"> <button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                <FaXTwitter className="w-5 h-5"/>
            </button></Link>
            <Link to={"https://www.instagram.com/avnigarg.ux/"} target="_blank"><button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                <FaInstagram className="w-5 h-5"/>
            </button></Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
