import hero from "../assets/about.jpg";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MdSportsTennis } from "react-icons/md";
import { GiCampCookingPot } from "react-icons/gi";



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary w-screen top-[120px] flex flex-col font-poppins items-center px-6 md:px-[10rem] mx-auto mt-[150px]"
      // className="bg-primary w-screen top-[120px] flex flex-col justify-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px]"
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
            className=" border-white border-8 md:border-[12px] rounded-full shadow-neu lg:max-w-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6" id="hero-left">
          <div className=" flex flex-col gap-6">
            <h1
              className="!leading-[1.2] text-3xl md:text-3xl font-medium "
              font-medium
            >
              Hey there !
            </h1>
            <span className="text-[rgb(156,156,156)] md:text-lg">
              I'm a passionate <span className="bg-[rgb(210,170,146)] text-white">UX Designer</span> with a recent internship at <span className="bg-[rgb(210,170,146)] text-white">BLive </span>
               under my belt. I thrive on creating beautiful and functional user
              experiences, with a minimalist aesthetic that prioritizes user
              needs. During my internship, I had the opportunity to spearhead a
              project from market research to prototyping, utilizing Figma to
              craft a seamless user journey. When I'm not meticulously
              designing, you might find me in the kitchen, whipping up a
              delicious meal <GiCampCookingPot className="inline-block text-[rgb(162,98,39)]" /> and experimenting with new flavors (much like I do
              with design!), or on the squash court <MdSportsTennis className="inline-block text-[rgb(162,98,39)]"/> , always striving to improve
              my game (and maybe yours, if you're up for a challenge!).
            </span>

          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* My experience */}
      <div className="container flex flex-col mt-16">
        <h1 className="text-4xl font-medium pb-10">Work Experience</h1>
        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                BLive - Dec 2023 - Mar 2024
              </div>
              <div className="text-2xl">UX Desgin Intern</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              At Blive, I redesigned EZY app, an EV rental platform for delivery
              professionals, prioritizing user experience.
            </div>
          </div>

          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
            <div id="left" className="flex flex-col lg:w-1/2 gap-2">
              <div className="text-[rgb(156,156,156)]">
                Freelance - Oct 2023 - Dec 2023
              </div>
              <div className="text-2xl">UX Designer</div>
            </div>

            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
              I crafted a stunning portfolio design tailored for a web
              developer, emphasizing UX and visual appeal.
            </div>
          </div>

          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between lg:items-center">
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
          </div>
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
