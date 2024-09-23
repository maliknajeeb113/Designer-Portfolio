import hero from "../assets/heroImage.jpg";
import brandsharkCover from "../assets/brandshark/brandsharkCover.png";
import tanishqCover from "../assets/portfolio-project/tanishqCover.png";
import bliveCover from "../assets/blive/bliveCover.png";

import { TbMailFilled } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

import {
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import Button from "../components/Button";

const Body = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      className=" w-screen top-[120px] flex flex-col items-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px]"
      id="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      {/* className=" w-screen flex flex-col justify-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen" */}
      {/* hero section */}
      <div
        className="container flex flex-col md:flex-row-reverse gap-10 items-center justify-between"
        id="hero"
      >
        <div id="hero-img" className="flex items-center justify-center">
          <img
            src={hero}
            alt=""
            className=" border-white border-8 md:border-[12px] rounded-full shadow-neu lg:max-w-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6" id="hero-left">
          <div className=" flex flex-col gap-6">
            <h1
              className="!leading-[1.2] text-3xl md:text-5xl font-medium "
            >
              Hey, I'm{" "}
              <span className="text-[rgb(182,154,137)]">Avni Garg.</span> <br />{" "}
              UX/UI Designer <br /> based in Bangalore.
            </h1>
            <span className="text-[rgb(156,156,156)]  md:text-lg ">
              Curently working at Salesken.ai
            </span>
            <span className="text-[rgb(156,156,156)]  md:text-lg ">
              I focus on minimalism and easy-to-understand information.
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-6 text-[rgb(126,126,126)]">

             <Link to="/Avni_Garg_Resume.pdf" target="_blank">
             <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                Download Resume
              </button></Link>

              

            <Socials/>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* projects start*/}
      <div className="container flex flex-col my-16 gap-10">
        <h1 className="text-4xl font-medium">My Work</h1>

        {/* project 1 */}

        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between">
            <div className="md:w-1/2 " id="project-image">
              <img
                src={bliveCover}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div
              id="project-description"
              className="flex flex-col gap-6 md:w-1/2 justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="text-[rgb(156,156,156)] font-thin">
                  UX Intern - Application Redesign
                </div>
                <div className="text-2xl">BLive EZY Application Redesign</div>
                <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
                  Conducted market analysis, documented trends, and designed
                  wireframes for Blive's Ezy App, enhancing user experience for
                  a subscription-based EV rental service.
                </div>
              </div>
              <Button to="/blive"><FaArrowRight />
              <span>View Project</span></Button>
            </div>
          </div>
        </div>

        {/* project 2 */}

        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between">
            <div className="md:w-1/2 " id="project-image">
              <img
                src={tanishqCover}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div
              id="project-description"
              className="flex flex-col gap-6 md:w-1/2 justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="text-[rgb(156,156,156)] font-thin">
                  Freelance - Portfolio Design
                </div>
                <div className="text-2xl">Portfolio Design</div>
                <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
                  Created a user-friendly website tailored to clients needs,
                  providing a centralized platform to showcase their work,
                  skills, and accomplishments efficiently, facilitating
                  effective presentation of their portfolio.
                </div>
              </div>
              <Button to="/portfolio-project"><FaArrowRight />
              <span>View Project</span></Button>
            </div>
          </div>
        </div>

        {/* Project 3 */}

        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between">
            <div className="md:w-1/2 " id="project-image">
              <img
                src={brandsharkCover}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div
              id="project-description"
              className="flex flex-col gap-6 md:w-1/2 justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="text-[rgb(156,156,156)] font-thin">
                  UX Case Study - Application Redesign
                </div>
                <div className="text-2xl">Marketing Website Redesign</div>
                <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
                  Crafted a sleek website showcasing Brand Shark's portfolio and
                  expertise in video production, capturing attention and
                  engaging potential clients effectively.
                </div>
              </div>
              <Button to="/brandshark"><FaArrowRight />
              <span>View Project</span></Button>
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}

      {/* Contact me */}

      <div
        id="contact"
        className="container text-2xl md:text-5xl flex flex-col mb-10 md:my-16 shadow-neu rounded-3xl items-center justify-center text-center py-10 md:py-20 px-8 gap-8 font-medium"
      >
        <h1>Want to create something awesome? </h1>
        <h1>Drop me an email.</h1>
        
        <Link to={"mailto:avni.garg.in@gmail.com"}>
          <button
            className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu font-medium text-sm md:text-lg gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)] py-4 px-6"
            id="get-in-touch"
          >
            <TbMailFilled />
            <span>avni.garg.in@gmail.com</span>
          </button>
        </Link>
      </div>
  

      {/* contact me */}
    </motion.main>
  );
};

export default Body;
