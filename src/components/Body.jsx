import hero from "../assets/hero.jpeg";
import {
  FaArrowRight,
  FaBehance,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <main
      className="bg-primary w-screen top-[120px] absolute flex flex-col justify-center font-poppins items-center px-6 md:px-10 mx-auto"
      id="body"
    >
      <div
        className="container flex flex-col md:flex-row-reverse gap-10 items-center"
        id="hero"
      >
        <div id="hero-img" className="flex items-center justify-center">
          <img
            src={hero}
            alt=""
            className=" border-white border-8 md:border-[12px] rounded-full shadow-neu lg:max-w-xl"
          />
        </div>
        <div className="flex flex-col gap-6" id="hero-left">
          <div className=" flex flex-col gap-6">
            <h1
              className="!leading-[1.2] text-3xl md:text-6xl font-medium "
              font-medium
            >
              Hi, I'm Avni Garg. <br /> UX/UI Designer based in Bangalore.
            </h1>
            <span className="text-[rgb(156,156,156)]  md:text-lg font-thin">
              I focus on minimalism and easy-to-understand information.
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-6">
            <div
              className="flex justify-center rounded-xl hover:shadow-neu-i items-center shadow-neu w-48 h-16 gap-3 cursor-pointer"
              id="get-in-touch"
            >
              <FaArrowRight />
              <span>Get it touch</span>
            </div>
            <div id="hero-icons" className="flex flex-row gap-4 items-center">
              <Link to={"https://www.behance.net/avniigarg"} target="_blank">
                <div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                  <FaBehance className="w-5 h-5 font-semibold" />
                </div>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/garg-avni/"}
                target="_blank"
              >
                <div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                  <FaLinkedinIn className="w-5 h-5" />
                </div>
              </Link>
              <Link to={"https://twitter.com/avniigarg"} target="_blank">
                {" "}
                <div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                  <FaXTwitter className="w-5 h-5" />
                </div>
              </Link>
              <Link
                to={"https://www.instagram.com/avnigarg.ux/"}
                target="_blank"
              >
                <div className="shadow-neu p-3 hover:scale-105 duration-300 rounded-full hover:shadow-neu-i">
                  <FaInstagram className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
