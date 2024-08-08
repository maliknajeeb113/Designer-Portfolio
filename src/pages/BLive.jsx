import bliveCover from "../assets/blive/bliveCover.png";
import blivePrototype from "../assets/blive/blivePrototype.png";
import bliveCompare from "../assets/blive/bliveCompare.png";
import blivePresentation from "../assets/blive/blivePresentation.jpeg";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const BLive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary w-screen flex flex-col items-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen"
      id="BLive"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <div
        id="head"
        className="container flex flex-col items-start gap-6 mt-[150px]"
      >
        <div className="text-3xl lg:text-6xl font-medium">
          BLive EZY Application Redesign
        </div>
        <div className="md:text-xl text-[rgb(156,156,156)] font-thin lg:w-4/5">
          Conducted market analysis, documented trends, and designed wireframes
          for Blive's Ezy App, enhancing user experience for a
          subscription-based EV rental service.
        </div>

        <div className="container flex flex-col md:flex-row md:justify-between gap-10">
          <div
            id="left"
            className="flex flex-col md:flex-row gap-4 md:gap-24 md:justify-between text-[rgb(156,156,156)]"
          >
            <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Project</h1>
              <p className="text-sm md:text-lg font-thin">
                Application Redesign
              </p>
            </div>

            <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Role</h1>
              <p className="text-sm md:text-lg font-thin">UX/UI Designer</p>
            </div>

            <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Team</h1>
              <p className="text-sm md:text-lg font-thin">
                Product Design Team
              </p>
            </div>
          </div>

          <div id="right" className="flex">
            <Link
              to={
                "https://www.behance.net/gallery/195991509/EZY-Application-Redesign-Rental-Bike-UIUX-Design"
              }
              target="_blank"
            >
              {" "}
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
        <img src={bliveCover} className="rounded-3xl object-cover w-full" />
      </div>

      <div className="container flex flex-col shadow-neu rounded-3xl p-12 gap-6">
        <div className="text-2xl md:text-4xl">About the Project</div>
        <div className=" text-[rgb(156,156,156)] font-thin text-lg">
          Embark on a journey with me as I redesign Blive's Ezy App - a
          subscription-based bike rental service for delivery executives.
          Immersed in a dynamic startup culture, I fused sustainability with
          intuitive design to enhance user experience. Before diving in, I
          conducted in-depth market research and competitive analysis. Armed
          with insights, I breathed new life into the existing Ezy App, infusing
          it with fresh energy and functionality while staying true to its
          innovative roots. This project is more than a redesign; it's a
          reinvention that sets a new standard for convenience and
          sustainability in the delivery industry.
        </div>

      </div>

      <div
        className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center"
        id="project-image"
      >
        <img src={blivePrototype} className="rounded-3xl object-cover w-full" />
      </div>

      <div className="container flex flex-col md:flex-row gap-10">
        <div className="flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2">
          <div className="text-2xl md:text-4xl">UX Challenges</div>
          <div className=" text-[rgb(156,156,156)] font-thin text-lg">
            The mission is clear: give the EZY app a total makeover. The goal? A
            user interface that's as easy as pie for riders to navigate. We're
            talking about a user experience that's straightforward and far from
            baffling, especially since there've been times when users found
            themselves in a bit of a pickle.
          </div>
        </div>
        <div className="flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2">
          <div className="text-2xl md:text-4xl">UX Solution</div>
          <div className=" text-[rgb(156,156,156)] font-thin text-lg">
            We're on a mission to revamp the app's vibe, making it a breeze for
            delivery executives like Raj. First up on the agenda? A shiny "Check
            Availability" feature front and centre. This tweak is all about
            streamlining the process of snagging an EV, based on when they're
            ready to roll. The result? A smoother app experience, happier users,
            and a day-to-day that feels like a walk in the park for our delivery
            heroes.
          </div>
        </div>
      </div>

      <div
        className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center"
        id="project-image"
      >
        <img src={bliveCompare} className="rounded-3xl object-cover w-full" />
      </div>

      <h1 className="text-4xl font-medium">Final Presentation!!</h1>

      <div
        className="container flex shadow-neu rounded-3xl my-10 justify-center"
        id="project-image"
      >
        <img src={blivePresentation} className="rounded-3xl object-cover w-full" />
      </div>


    </motion.div>
  );
};

export default BLive;
