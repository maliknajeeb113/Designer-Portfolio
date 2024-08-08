import tanishqBanner from "../assets/tanishqBanner.png";
import tanishqWireframe from "../assets/tanishqWireframe.png";
import tanishqMockup from "../assets/tanishqMockup.png";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const TanishqPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary w-screen flex flex-col justify-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen"
      id="TanishqPortfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <div
        id="head"
        className="container flex flex-col items-start gap-6 mt-[150px]"
      >
        <div className="text-3xl lg:text-6xl font-medium">Portfolio Design</div>
        <div className="md:text-xl text-[rgb(156,156,156)] font-thin lg:w-4/5">
          Designed a website that helps Tanishq showcase all their work and
          skills easily in one place for job interviews.
        </div>

        <div className="container flex flex-col md:flex-row md:justify-between gap-10">
          <div
            id="left"
            className="flex flex-col md:flex-row gap-4 md:gap-24 md:justify-between text-[rgb(156,156,156)]"
          >
            <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Project</h1>
              <p className="text-sm md:text-lg font-thin">Freelance Project</p>
            </div>

            <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Role</h1>
              <p className="text-sm md:text-lg font-thin">UX/UI Designer</p>
            </div>

            {/* <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Team</h1>
              <p className="text-sm md:text-lg font-thin">
                Product Design Team
              </p>
            </div> */}
          </div>

          <div id="right" className="flex">
            <Link
              to={
                "https://www.behance.net/gallery/186924897/Portfolio-Design-Developer-UXUI-Design"
              }
              target="_blank"
            >
              <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowRight />
                <span>View Case Study</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center"
        id="project-image"
      >
        <img src={tanishqBanner} className="rounded-3xl object-cover w-full" />
      </div>

      <div className="container flex flex-col shadow-neu rounded-3xl p-12 gap-6">
        <div className="text-2xl md:text-4xl">About the Project</div>
        <div className=" text-[rgb(156,156,156)] font-thin text-lg">
          Embark on a journey with me as I delve into the intricacies of user
          experience, meticulously optimizing the portfolio's layout,
          navigation, and content flow to create an engaging journey for
          visitors. Along this path, we'll explore the art of crafting a
          visually distinctive design language, where tailored color schemes,
          typography, and graphics converge to breathe life into the brand and
          forge a memorable visual narrative. Join me as we transform concepts
          into captivating experiences, one pixel at a time.
        </div>

      </div>

      <div
        className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center"
        id="project-image"
      >
        <img
          src={tanishqWireframe
          
          }
          className="rounded-3xl object-cover w-full"
        />
      </div>

      <div className="container flex flex-col md:flex-row gap-10">
        <div className="flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2">
          <div className="text-2xl md:text-4xl">UX Challenges</div>
          <div className=" text-[rgb(156,156,156)] font-thin text-lg">
            Creating a website that gathers all of someone's projects and skills
            in one place would help during job interviews. The goal is to design
            a user-friendly platform for showcasing a comprehensive portfolio
            effortlessly.
          </div>
        </div>
        <div className="flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2">
          <div className="text-2xl md:text-4xl">UX Solution</div>
          <div className=" text-[rgb(156,156,156)] font-thin text-lg">
            Make the website simple to use, with clear sections for different
            projects and abilities. Ensure the website looks nice and organized,
            so it makes a good impression on potential employers. Enable users
            to personalize their portfolio to stand out and tell their unique
            story effectively. heroes.
          </div>
        </div>
      </div>

      <div
        className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center"
        id="project-image"
      >
        <img src={tanishqMockup} className="rounded-3xl object-cover w-full" />
      </div>

      {/* <h1 className="text-4xl font-medium">Final Presentation!!</h1>

      <div
        className="container flex shadow-neu rounded-3xl my-10 justify-center"
        id="project-image"
      >
        <img
          src={blive_presentaion}
          className="rounded-3xl object-cover w-full"
        />
      </div> */}
    </motion.div>
  );
};

export default TanishqPortfolio;
