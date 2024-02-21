import { Cross as Hamburger } from "hamburger-react";
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
        className={`${isNavOpen ? "flex" : "hidden"} justify-center`}
        id="nav-items"
        aria-expanded={isNavOpen}
      >
        <ul className="flex flex-col gap-10 items-center p-10">
          <Link to={"/"} onClick={toggleNav} >
            <li className="shadow-neu px-20 py-10 rounded-xl text-xl cursor-pointer hover:shadow-neu-i">Home</li>
          </Link>
          <Link to={"/about"} onClick={toggleNav}>
            <li className="shadow-neu px-20 py-10 rounded-xl text-xl cursor-pointer hover:shadow-neu-i">About</li>
          </Link>
          <Link to={"/contact"} onClick={toggleNav}>
            <li className="shadow-neu px-20 py-10 rounded-xl text-xl cursor-pointer hover:shadow-neu-i">Contact</li>
          </Link>
        </ul>
        <div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
