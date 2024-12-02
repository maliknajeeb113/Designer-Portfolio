import brandsharkTitle from "../assets/brandshark/brandsharkTitle.png";
import brandsharkWireframe from "../assets/brandshark/brandsharkWireframe.png";
import brandsharkCompare from "../assets/brandshark/brandsharkCompare.png";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Brandshark = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className=' w-screen flex jus flex-col items-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen'
      id='Brandshark'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}>
      <div
        id='head'
        className='container flex flex-col items-start gap-6 mt-[150px]'>
        <div className='text-3xl lg:text-6xl font-medium'>
          Marketing Website Redesign
        </div>
        {/* <div className='md:text-xl text-[rgb(156,156,156)] font-thin lg:w-4/5'>
          Transformed Brand Shark's online presence with a sleek, visually
          stunning website, showcasing their video production prowess to
          captivate potential clients.
        </div> */}

        <div className='container flex flex-col md:flex-row md:justify-between gap-10'>
          <div
            id='left'
            className='flex flex-col md:flex-row gap-4 md:gap-24 md:justify-between text-[rgb(156,156,156)]'>
            <div className='flex flex-col md:gap-4'>
              <h1 className='font-medium md:text-xl'>Project</h1>
              <p className='text-sm md:text-lg font-thin'>Personal Project</p>
            </div>

            <div className='flex flex-col md:gap-4'>
              <h1 className='font-medium md:text-xl'>Role</h1>
              <p className='text-sm md:text-lg font-thin'>UX/UI Designer</p>
            </div>

            {/* <div className="flex flex-col md:gap-4">
              <h1 className="font-medium md:text-xl">Team</h1>
              <p className="text-sm md:text-lg font-thin">
                Product Design Team
              </p>
            </div> */}
          </div>

          <div id='right' className='flex'>
            <Link
              to={
                "https://www.behance.net/gallery/188272785/Marketing-Website-Redesign-UIUX-Design-Web-Design"
              }
              target='_blank'>
              <button
                className='flex justify-center rounded-2xl active:shadow-neu-i items-center shadow-neu w-40 md:w-56 font-medium text-sm md:text-lg h-14 gap-3 cursor-pointer hover:scale-[1.02] duration-500 text-[rgb(126,126,126)]'
                id='get-in-touch'>
                <FaArrowRight />
                <span>View Case Study</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className='container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center'
        id='project-image'>
        <img
          src={brandsharkTitle}
          className='rounded-3xl object-cover w-full'
        />
      </div>

      <div className='container flex flex-col shadow-neu rounded-3xl p-12 gap-6'>
        <div className='text-2xl md:text-4xl'>About the Project</div>
        <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
          Brandshark's video marketing page faced significant challenges in
          engaging and converting visitors. The cluttered design overwhelmed
          users, making it difficult to navigate and find relevant information.
          Additionally, the value proposition was unclear, leaving visitors
          unsure about the benefits of Brandshark's services. Combined with an
          unintuitive user experience, these obstacles hindered the page's
          effectiveness in capturing attention and driving conversions.
        </div>
      </div>

      <div
        className='container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center'
        id='project-image'>
        <img
          src={brandsharkWireframe}
          className='rounded-3xl object-cover w-full'
        />
      </div>

      <div className='container flex flex-col md:flex-row gap-10'>
        <div className='flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2'>
          <div className='text-2xl md:text-4xl'>UX Problem</div>
          <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
            Develop a visually engaging, user-centric design for Brandshark's
            video marketing page, effectively communicating their expertise and
            value proposition. Streamline the user experience with clear calls
            to action and intuitive navigation, guiding visitors seamlessly
            towards conversion. Implement analytics and user feedback mechanisms
            to continuously measure and improve the page's performance.
          </div>
        </div>
        <div className='flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2'>
          <div className='text-2xl md:text-4xl'>UX Solution</div>
          <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
            The meticulously crafted redesign brought about remarkable
            enhancements in visual appeal, clarity, and user experience,
            fostering heightened engagement, clearer understanding of
            Brandshark's offerings, and a substantial surge in conversion rates.
          </div>
        </div>
      </div>

      <div
        className='container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center'
        id='project-image'>
        <img
          src={brandsharkCompare}
          className='rounded-3xl object-cover w-full'
        />
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

export default Brandshark;
