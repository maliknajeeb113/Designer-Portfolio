import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="w-screen text-[rgb(85,85,85)] font-poppins ">
      <div className="container flex px-16 md:px-10 md:mx-auto py-4 items-center justify-between">
        <div className="font-semibold text-3xl" id="Logo">
          <Link to={"/"}>Avni.</Link>
        </div>
        <div className="neu rounded-full p-3" id="Hamburger">
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
        <ul className="flex flex-col gap-10 items-center h-screen">
          <Link to={"/"} onClick={toggleNav}>
            <li className="neu px-20 py-10 rounded-xl text-xl cursor-pointer">Home</li>
          </Link>
          <Link to={"/about"} onClick={toggleNav}>
            <li className="neu px-20 py-10 rounded-xl text-xl cursor-pointer">About</li>
          </Link>
          <Link to={"/contact"} onClick={toggleNav}>
            <li className="neu px-20 py-10 rounded-xl text-xl cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
