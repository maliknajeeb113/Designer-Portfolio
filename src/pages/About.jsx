import hero from "../assets/about.jpg";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MdSportsTennis } from "react-icons/md";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className=" w-screen top-[120px] flex flex-col font-poppins items-center px-6 md:px-[10rem] mx-auto mt-[150px]"
      // className=" w-screen top-[120px] flex flex-col justify-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
      id="About"
    >
      {/* hero section */}
      <div
        className="container flex flex-col lg:flex-row gap-10 items-center justify-between"
        id="hero"
      >
        <div id="hero-img" className="flex items-center justify-center">
          <img
            src={hero}
            alt=""
            className=" border-white border-8 md:border-[12px] rounded-full shadow-neu sm:max-w-xs lg:max-w-sm xl:max-w-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-6" id="hero-left">
          <div className="flex flex-col gap-6">
            <h1 className="!leading-[1.2] text-3xl md:text-3xl font-medium">
              Hey there!
            </h1>
            <span className="text-[rgb(156,156,156)] md:text-lg">
              I'm a dedicated{" "}
              <span className="bg-[rgb(210,170,146)] text-white">
                Product Designer
              </span>{" "}
              with experience working on diverse projects that focus on creating
              seamless user experiences. <br />
              Currently, I’m at{" "}
              <span className="bg-[rgb(210,170,146)] text-white">B:Live</span>
              , where I’m designing the UI for a sustainable E-Bike Rental
              Platform aimed for Delivery Executives. My approach to design is
              centered around minimalism and ensuring intuitive, user-friendly
              interfaces. <br />
              When I'm not working on design projects, I enjoy reading{" "}
              <span className="bg-[rgb(210,170,146)] text-white">
                (recently developed hobby!)
              </span>{" "}
              or hitting the squash court{" "}
              <MdSportsTennis className="inline-block text-[rgb(162,98,39)]" />.
            </span>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* My experience */}
      <div className="container flex flex-col mt-16">
        <h1 className="text-4xl font-medium pb-10">Work Experience</h1>
        <div className="flex flex-col gap-10" id="cards">

            {/* Blive */}
           <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                BLive - Jan 2025 - Present
              </div>
              <div className="text-2xl">Product Designer</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              Working on a sustainable EV rental platform for delivery professionals, prioritizing user experience.
            </div>
          </div>
            
            {/* Salesken */}
          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                Salesken - Aug 2024 - Jan 2025
              </div>
              <div className="text-2xl">UX/UI Desginer</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              Crafting the UI for an AI platform designed to streamline customer
              interactions and boost support efficiency.
            </div>
          </div>

            {/* Blive Internship */}
          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                B:Live - Dec 2023 - Mar 2024
              </div>
              <div className="text-2xl">UX Desgin Intern</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              Redesigned EZY app, an EV rental platform for delivery
              professionals, prioritizing user experience.
            </div>
          </div>

            {/* Freelance */}
          {/* <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                Freelance - Oct 2023 - Dec 2023
              </div>
              <div className="text-2xl">UX Designer</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              Crafted a stunning portfolio design tailored for a web developer,
              emphasizing UX and visual appeal.
            </div>
          </div>

          {/* <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                Oasis InfoByte - Sep 2023 - Oct 2023
              </div>
              <div className="text-2xl">Web Developer</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              Crafted visually appealing and user-friendly web interfaces, and
              developed responsive websites.
            </div>
          </div> */}
        </div>
      </div>

      {/* Contact me */}

      <div
        id="contact"
        className="container text-2xl md:text-5xl flex flex-col mb-10 my-16 shadow-neu rounded-3xl items-center justify-center text-center py-10 md:py-20 px-8 gap-8 font-medium"
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
    </motion.div>
  );
};

export default About;
