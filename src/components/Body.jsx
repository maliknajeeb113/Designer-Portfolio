import hero from "../assets/hero.jpeg";
import brandshark_hero from "../assets/Brandshark_title.png";
import blive_hero from "../assets/Blive.png";
import { TbMailFilled } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";



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
      className="bg-primary w-screen top-[120px] flex flex-col justify-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px]"
      id="body"
    >
      {/* className="bg-primary w-screen flex flex-col justify-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen" */}
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
              font-medium
            >
              Hey, I'm <span className="text-[rgb(182,154,137)]">Avni Garg.</span> <br /> UX/UI Designer <br /> based in Bangalore. 
            </h1>
            <span className="text-[rgb(156,156,156)]  md:text-lg ">Previously at BLive.</span>
            <span className="text-[rgb(156,156,156)]  md:text-lg ">
              I focus on minimalism and easy-to-understand information.
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-6 text-[rgb(126,126,126)]">
            <HashLink smooth to={'/#contact'}>
            <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
            >
              <FaArrowRight />
              <span>Get in touch</span>
            </button></HashLink>
            <div id="hero-icons" className="flex flex-row gap-4 items-center ">
              <Link to={"https://www.behance.net/avniigarg"} target="_blank">
                <button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                  <FaBehance className="w-5 h-5 font-semibold " />
                </button>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/garg-avni/"}
                target="_blank"
              >
                <button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                  <FaLinkedinIn className="w-5 h-5" />
                </button>
              </Link>
              <Link to={"https://twitter.com/avniigarg"} target="_blank">
                <button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                  <FaXTwitter className="w-5 h-5" />
                </button>
              </Link>
              <Link
                to={"https://www.instagram.com/avnigarg.ux/"}
                target="_blank"
              >
                <button className="shadow-neu p-3 hover:scale-105 duration-500 rounded-full active:shadow-neu-i">
                  <FaInstagram className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* about section */}
      {/* <div className="container flex flex-col md:flex-row mt-32 justify-between md:items-end gap-8">
        <div className="shadow-neu rounded-3xl p-10 md:w-4/6">
          <div className="text-4xl font-medium flex gap-3">
            About Me
            <span>
              <PiHandWaving />
            </span>
          </div>
          <div className="text-[rgb(156,156,156)]  md:text-lg font-thin pt-4">
            Hello there! Recent graduate with a B.Tech, specialising in simple
            and sleek design. I create fun and user-friendly interfaces – even
            grandma-approved! Outside design, you'll find me enjoying Rom-coms.
            Not a fan of complicated UIs, though. Excited to bring my design
            flair to your team!
          </div>
        </div>

        <button
          className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-56 font-medium text-lg h-16 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
          id="get-in-touch"
        >
          <FaArrowRight />
          <span>More about me</span>
        </button>
      </div> */}
      {/* about section end */}

      {/* my Services */}
      {/* <div className="container flex flex-col my-16">
        <h1 className="text-4xl font-medium pb-16">My Services</h1>

        <div className="flex flex-col lg:flex-row gap-10" id="cards">
          <div className="shadow-neu flex flex-col gap-4 p-10 rounded-3xl justify-between lg:w-1/3">
            <BsLaptop className="text-4xl text-[rgb(126,126,126)]" />
            <div className="text-2xl">Web Design</div>
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
              Crafting seamless online experiences with a focus on simplicity
              and user delight. From intuitive interfaces to visually engaging
              layouts, I bring a fresh perspective to elevate your digital
              presence.
            </div>
          </div>

          <div className="shadow-neu flex flex-col gap-4 p-10 rounded-3xl justify-between lg:w-1/3">
            <PiDeviceMobileLight className="text-4xl text-[rgb(126,126,126)]" />
            <div className="text-2xl">Mobile Design</div>
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
              Elevating mobile experiences through intuitive interfaces and
              sleek design. From responsive layouts to user-centric
              interactions, I specialize in creating engaging and accessible
              apps for a seamless digital journey.
            </div>
          </div>

          <div className="shadow-neu flex flex-col gap-4 p-10 rounded-3xl justify-between lg:w-1/3">
            <PiNotebook className="text-4xl text-[rgb(126,126,126)]" />
            <div className="text-2xl">UX Research</div>
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
              Gaining deep insights through user-centric analysis, my UX
              research ensures your design meets user needs seamlessly. Uncover
              the essence of user experience for impactful digital solutions.
            </div>
          </div>
        </div>
      </div> */}
      {/* my services end */}

      {/* projects start*/}
      <div className="container flex flex-col my-16 gap-10">
        <h1 className="text-4xl font-medium">My Work</h1>

        {/* project 1 */}

        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between">
            <div className="md:w-1/2 " id="project-image">
              <img
                src={blive_hero}
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
                  
Conducted market analysis, documented trends, and designed wireframes for Blive's Ezy App, enhancing user experience for a subscription-based EV rental service.
                </div>
              </div>
              <Link to={'/project1'}><button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowRight />
                <span>View Project</span>
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* project 2 */}

        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between">
            <div className="md:w-1/2 " id="project-image">
              <img
                src={brandshark_hero}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div
              id="project-description"
              className="flex flex-col gap-6 md:w-1/2 justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="text-[rgb(156,156,156)] font-thin">
                  UX Case Study - Redesign Application
                </div>
                <div className="text-2xl">Marketing Website Redesign</div>
                <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
                  Crafting seamless online experiences with a focus on
                  simplicity and user delight. From intuitive interfaces to
                  visually engaging layouts, I bring a fresh perspective to
                  elevate your digital presence.
                </div>
              </div>
              <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowRight />
                <span>View Project</span>
              </button>
            </div>
          </div>
        </div>
        

        {/* Project 3 */}

        <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col md:flex-row-reverse gap-4 md:gap-20 p-6 md:p-10 rounded-3xl justify-between">
            <div className="md:w-1/2 " id="project-image">
              <img
                src={brandshark_hero}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div
              id="project-description"
              className="flex flex-col gap-6 md:w-1/2 justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="text-[rgb(156,156,156)] font-thin">
                  UX Case Study - Redesign Application
                </div>
                <div className="text-2xl">Marketing Website Redesign</div>
                <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
                  Crafting seamless online experiences with a focus on
                  simplicity and user delight. From intuitive interfaces to
                  visually engaging layouts, I bring a fresh perspective to
                  elevate your digital presence.
                </div>
              </div>
              <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowRight />
                <span>View Project</span>
              </button>
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
    </main>
  );
};

export default Body;
