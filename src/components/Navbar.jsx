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
    <nav className="w-screen text-[rgb(85,85,85)] font-poppins sticky top-0 bg-[rgb(241,241,241)]">
      <div className="container flex px-16 md:px-10 md:mx-auto py-4 items-center justify-between">
        <div className="font-semibold text-3xl" id="Logo">
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
        <ul className="flex flex-col gap-10 items-center p-10">
          <Link to={"/"} onClick={toggleNav} >
            <li className="shadow-neu px-20 py-10 rounded-xl text-xl cursor-pointer hover:shadow-neu-i hover:scale-105 duration-300">Home</li>
          </Link>
          <Link to={"/about"} onClick={toggleNav}>
            <li className="shadow-neu px-20 py-10 rounded-xl text-xl cursor-pointer hover:shadow-neu-i hover:scale-105 duration-300">About</li>
          </Link>
          <Link to={"/contact"} onClick={toggleNav}>
            <li className="shadow-neu px-20 py-10 rounded-xl text-xl cursor-pointer hover:shadow-neu-i hover:scale-105 duration-300">Contact</li>
          </Link>
        </ul>
        <div className="flex flex-row items-center justify-center gap-x-5">
            <Link to={"https://www.behance.net/avniigarg"} target="_blank"><div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                <FaBehance className="w-5 h-5 font-semibold"/>
            </div></Link>
            <Link to={"https://www.linkedin.com/in/garg-avni/"} target="_blank"><div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                <FaLinkedinIn className="w-5 h-5"/>
            </div></Link>
            <Link to={"https://twitter.com/avniigarg"} target="_blank"> <div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                <FaXTwitter className="w-5 h-5"/>
            </div></Link>
            <Link to={"https://www.instagram.com/avnigarg.ux/"} target="_blank"><div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                <FaInstagram className="w-5 h-5"/>
            </div></Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
