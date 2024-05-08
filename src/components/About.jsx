import hero from "../assets/hero.jpeg";
import brandshark_hero from "../assets/Brandshark_title.png";
import { PiHandWaving, PiDeviceMobileLight, PiNotebook } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";



import {
  FaArrowRight,
  FaBehance,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div
      className="bg-primary w-screen top-[120px] flex flex-col justify-center font-poppins items-center px-6 md:px-[10rem] mx-auto mt-[150px]"
      // className="bg-primary w-screen top-[120px] flex flex-col justify-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px]"

      id="About"
    >
      {/* hero section */}
      <div
        className="container flex flex-col md:flex-row gap-10 items-center justify-between"
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
            <span className="text-[rgb(156,156,156)]  md:text-lg ">
              I focus on minimalism and easy-to-understand information. I focus on minimalism and easy-to-understand information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero perspiciatis eius expedita quasi eaque sequi officiis iusto, optio dignissimos tempora. Asperiores aperiam incidunt praesentium distinctio suscipit exercitationem veniam eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus debitis porro, illo consequatur perspiciatis quis iure. Maxime perferendis, qui assumenda delectus iure dolorem aut placeat saepe molestias dignissimos itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, recusandae labore minus animi fuga temporibus vitae! Similique quo itaque ratione repellendus! Sint illum et iusto architecto, consequatur quos! Asperiores, iure.

            </span>
          </div>
          {/* <div className="flex flex-col md:flex-row justify-start gap-6 text-[rgb(126,126,126)]">
            <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
            >
              <FaArrowRight />
              <span>Get in touch</span>
            </button>
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
          </div> */}
        </div>
      </div>
      {/* hero section end */}

      {/* about section */}
      {/* <div className="container flex flex-col md:flex-row mt-32 justify-between md:items-end gap-8">
        <div className="shadow-neu rounded-3xl p-10 ">
          <div className="text-2xl md:text-4xl font-medium flex gap-3">
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
        </div> */}

        {/* <button
          className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-56 font-medium text-lg h-16 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
          id="get-in-touch"
        >
          <FaArrowRight />
          <span>More about me</span>
        </button> */}
      {/* </div> */}
      {/* about section end */}

      {/* my Process */}
      {/* <div className="container flex flex-col my-16 mt-24">
        <h1 className="text-4xl font-medium pb-1">Design Process</h1>

        <div className="flex flex-col lg:flex-row gap-10" id="cards">

          <div className="shadow-neu flex flex-col p-10 rounded-3xl justify-between lg:w-1/3 gap-4">
            <h1 className="font-extrabold text-3xl text-[rgb(156,156,156)]">01</h1>
            <div className="text-3xl ">Define the project</div>
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>
          <div className="shadow-neu flex flex-col p-10 rounded-3xl justify-between lg:w-1/3 gap-4">
            <h1 className="font-extrabold text-3xl text-[rgb(156,156,156)]">02</h1>
            <div className="text-3xl ">Design the solution</div>
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>
          <div className="shadow-neu flex flex-col p-10 rounded-3xl justify-between lg:w-1/3 gap-4">
            <h1 className="font-extrabold text-3xl text-[rgb(156,156,156)]">03</h1>
            <div className="text-3xl ">Deliver the result</div>
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>

          
        </div>
      </div> */}
      {/* my services end */}

      {/* My experience */}
      <div className="container flex flex-col mt-16">
      <h1 className="text-4xl font-medium pb-10">Work Experience</h1>
      <div className="flex flex-col gap-10" id="cards">
          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between items-center">
            
            
            <div id='left' className="flex flex-col lg:w-1/2 gap-2">
                <div className="text-[rgb(156,156,156)]">BLIVE - Dec 2023 - Mar 2024</div>
                <div className="text-2xl">UX Desgin Intern</div>
            </div>
            
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
            BLive EZY Application - Research, Competitve analysis, Application Redesign ---- isko acha karna hai

            </div>
            
          </div>

          <div className="shadow-neu flex flex-col lg:flex-row gap-10 p-10 rounded-3xl justify-between items-center">
            
            
            <div id='left' className="flex flex-col lg:w-1/2 gap-2">
                <div className="text-[rgb(156,156,156)]">Oasis InfoByte - Dec 2023 - Mar 2024</div>
                <div className="text-2xl">Web Developer</div>
            </div>
            
            <div className="text-[rgb(156,156,156)]  md:text-lg font-thin lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
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
    </div>
  );
};

export default About;
