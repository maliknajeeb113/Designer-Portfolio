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

const Project1 = () => {
    return (<div
        className="bg-primary w-screen top-[120px] flex flex-col justify-center font-poppins items-center px-6 md:px-[10rem] mx-auto h-screen"
        id="Project1"
      >
         <div id='head' className="container flex flex-col items-start gap-6">
            <div className="text-6xl font-medium">
            BrandShark
            </div> 
            <div className="text-xl text-[rgb(156,156,156)] font-thin w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit lorem.
            </div>

            <div className="container flex flex-row justify-between">

                <div id="left" className="flex gap-10 text-[rgb(156,156,156)]">

                    <div className="flex flex-col gap-4">
                    <h1 className="font-medium text-xl">Client</h1>
                    <p className="font-thin">BrandShark</p>

                    </div>

                    <div className="flex flex-col gap-4">
                    <h1 className="font-medium text-xl">Date</h1>
                    <p className="font-thin">October 27, 2023</p>

                    </div>

                    <div className="flex flex-col gap-4">
                    <h1 className="font-medium text-xl">Service</h1>
                    <p className="font-thin">3D modeling</p>

                    </div>

                    
                </div>

                <div id="right" className="flex">
                <button
                className="flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-56 font-medium text-lg h-16 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]"
                id="get-in-touch"
              >
                <FaArrowRight />
                <span>View Project</span>
              </button>

                </div>

            </div>

         </div>
        
        
    </div>)
}

export default Project1