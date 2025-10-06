import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbMailFilled } from "react-icons/tb";
import { motion } from "framer-motion";

import Socials from "../components/Socials";
import { jobsData } from "../constants/constant";
import { Card } from "../components/Card";
import hero from "../assets/heroImage.jpg";

const Body = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      className=' w-screen top-[120px] flex flex-col items-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px]'
      id='body'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}>
      {/* className=" w-screen flex flex-col justify-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen" */}
      {/* hero section */}
      <div
        className='container flex flex-col lg:flex-row-reverse gap-10 items-center justify-between'
        id='hero'>
        <div id='hero-img' className='flex items-center justify-center'>
          <img
            src={hero}
            alt=''
            className=' border-white border-8 md:border-[12px] rounded-full shadow-neu sm:max-w-xs lg:max-w-sm xl:max-w-lg object-cover'
          />
        </div>
        <div className='flex flex-col gap-6' id='hero-left'>
          <div className=' flex flex-col gap-6'>
            <h1 className='!leading-[1.2] text-3xl md:text-5xl font-medium '>
              Hey👋🏻, I'm{" "}
              <span className='text-[rgb(182,154,137)]'>Avni Garg,</span> <br />{" "}
              A Product Designer ✨<br /> based in Bangalore.
            </h1>
            <span className='text-[rgb(156,156,156)]  md:text-lg '>

              Currently designing intuitive B2B & B2C SaaS experiences at <Link to={'https://www.linkedin.com/company/bliveindia/'} className="underline font-medium" target="_blank">B:Live</Link>, focused on simplifying complex workflows.

            </span>
            <span className='text-[rgb(156,156,156)]  md:text-lg '>
              I focus on minimalism and easy-to-understand information.
            </span>
          </div>
          <div className='flex flex-col md:flex-row justify-start gap-6 text-[rgb(126,126,126)]'>
            {/* Todo - make the resume restricted */}
            <Link to='https://drive.google.com/file/d/1B_9Bz25SG9cIbWIgQFeeLjLua008NC84/view?usp=drive_link' target='_blank'>
              <button
                className='flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]'
                id='get-in-touch'>
                Download Resume
              </button>
            </Link>

            <Socials />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* projects start*/}
      <div className='container flex flex-col my-16 gap-10'>
        <h1 className='text-4xl font-medium'>Case Studies</h1>

        {/* Map the job data */}
        {jobsData?.map((data, idx) => {
          return (
            <span key={idx + "-" + data.jobTitle}>
              <Card
                imgLink={data.imgLink}
                jobTitle={data.jobTitle}
                companyName={data.companyName}
                desc={data.desc}
                linkTo={data.linkTo}
              />
            </span>
          );
        })}
      </div>

      {/* Contact me */}

      <div
        id='contact'
        className='container text-2xl md:text-5xl flex flex-col mb-10 md:mb-16 shadow-neu rounded-3xl items-center justify-center text-center py-10 md:py-20 px-8 gap-8 font-medium'>
        <h1>Want to create something awesome? </h1>
        <h1>Drop me an email.</h1>

        <Link to={"mailto:avni.garg.in@gmail.com"}>
          <button
            className='flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu font-medium text-sm md:text-lg gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)] py-4 px-6'
            id='get-in-touch'>
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
