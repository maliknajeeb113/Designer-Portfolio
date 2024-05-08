import blive_hero from "../assets/Blive.png";

import {
  FaArrowRight
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Project2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (<div
        className="bg-primary w-screen flex flex-col justify-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen"
        id="Project2"
      >
         <div id='head' className="container flex flex-col items-start gap-6 mt-[150px]">
            <div className="text-3xl lg:text-6xl font-medium">
            BLive EZY Application Redesign
            </div> 
            <div className="md:text-xl text-[rgb(156,156,156)] font-thin lg:w-4/5">
            Conducted market analysis, documented trends, and designed wireframes for Blive's Ezy App, enhancing user experience for a subscription-based EV rental service.
            </div>

            <div className="container flex flex-col md:flex-row md:justify-between gap-10">

                <div id="left" className="flex md:gap-24 justify-between text-[rgb(156,156,156)]">

                    <div className="flex flex-col md:gap-4">
                    <h1 className="font-medium md:text-xl">Project</h1>
                    <p className="text-sm md:text-lg font-thin">Application Redesign</p>

                    </div>

                    <div className="flex flex-col md:gap-4">
                    <h1 className="font-medium md:text-xl">Role</h1>
                    <p className="text-sm md:text-lg font-thin">UX/UI Designer</p>

                    </div>

                    <div className="flex flex-col md:gap-4">
                    <h1 className="font-medium md:text-xl">Team</h1>
                    <p className="text-sm md:text-lg font-thin">Product Design Team</p>

                    </div>

                    
                </div>

                <div id="right" className="flex">
               <Link to={'https://www.behance.net/gallery/195991509/EZY-Application-Redesign-Rental-Bike-UIUX-Design'} target="_blank"> <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowRight />
                <span>View Case Study</span>
              </button></Link>

                </div>

            </div>

         </div>

         <div className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center" id="project-image">
              <img
                src={blive_hero}
                className="rounded-3xl object-cover w-full"
              />
            </div>
            
            <div className="container flex flex-col shadow-neu rounded-3xl p-12 gap-6">
                <div className="text-2xl md:text-4xl">
                    Challenge
                </div>
                <div className=" text-[rgb(156,156,156)] font-thin">
                Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed euismod nisi. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec et odio pellentesque diam volutpat commodo.
                </div>
                <div className=" text-[rgb(156,156,156)] font-thin">
                Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed euismod nisi. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec et odio pellentesque diam volutpat commodo.
                </div>
                <div className=" text-[rgb(156,156,156)] font-thin ml-8 md:ml-16">
                    <ul className="list-disc flex flex-col gap-3">
                        <li>
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec
                        </li>
                        <li>
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec
                        </li>
                        <li>
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec
                        </li>
                    </ul>
                </div>
                </div> 

                <div className="container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center" id="project-image">
              <img
                src={blive_hero}
                className="rounded-3xl object-cover w-full"
              />
            </div>
            
            <div className="container flex flex-col shadow-neu rounded-3xl p-8 gap-6 mb-10 md:mb-20">
            <div className="text-2xl md:text-4xl">
                Project Results
                </div>
                <div className=" text-[rgb(156,156,156)] font-thin">
                Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed euismod nisi. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec et odio pellentesque diam volutpat commodo.
                </div>
                <div className=" text-[rgb(156,156,156)] font-thin ml-8 md:ml-16 ">
                    <ul className="list-decimal flex flex-col gap-3">
                        <li>
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec
                        </li>
                        <li>
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec
                        </li>
                        <li>
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec
                        </li>
                    </ul>
                </div>
                </div>  
        
    </div>)
}

export default Project2