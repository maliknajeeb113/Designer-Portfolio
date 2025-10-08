import salesken1 from "../assets/salesken/salesken-1.jpeg";
import salesken2 from "../assets/salesken/salesken-2.jpeg";
import salesken from "../assets/salesken/salesken.png";

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
      className=' w-screen flex flex-col items-center font-poppins  px-6 md:px-[10rem] mx-auto h-min-screen'
      id='BLive'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}>
      <div
        id='head'
        className='container flex flex-col items-start gap-6 mt-[150px]'>
        <div className='text-3xl lg:text-6xl font-medium'>
          Native Application Redesign
        </div>
        {/* <div className='md:text-xl text-[rgb(156,156,156)] font-thin lg:w-4/5'>
          Led competitive research and designed user-focused interfaces at
          Salesken.ai, streamlining sales workflows with AI-driven tools and
          actionable insights.
        </div> */}

        <div className='container flex flex-col md:flex-row md:justify-between gap-10'>
          <div
            id='left'
            className='flex flex-col md:flex-row gap-4 md:gap-24 md:justify-between text-[rgb(156,156,156)]'>
            <div className='flex flex-col md:gap-4'>
              <h1 className='font-medium md:text-xl'>Project</h1>
              <p className='text-sm md:text-lg font-thin'>Native Application</p>
            </div>

            <div className='flex flex-col md:gap-4'>
              <h1 className='font-medium md:text-xl'>Role</h1>
              <p className='text-sm md:text-lg font-thin'>Product Designer</p>
            </div>

            <div className='flex flex-col md:gap-4'>
              <h1 className='font-medium md:text-xl'>Team</h1>
              <p className='text-sm md:text-lg font-thin'>
                Design Team
              </p>
            </div>
          </div>

          <div id='right' className='flex'>
            <Link
              to={
                "https://www.behance.net/gallery/213328817/AI-Based-Sales-Intelligence-Platform"
              }
              target='_blank'>
              {" "}
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
        <img src={salesken} className='rounded-3xl object-cover w-full' />
      </div>

      <div className='container flex flex-col shadow-neu rounded-3xl p-12 gap-6'>
        <div className='text-2xl md:text-4xl'>Overview</div>
        <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
          How can we help sales teams boost their performance, simplify their
          workflows, and achieve amazing results? <br />
          At Salesken.ai, I worked closely with the design and product teams to
          create user-friendly experiences for their AI tools. From real-time
          guidance to smarter analytics and automation, the goal was to make
          life easier for sales reps while helping them perform better. I
          focused on simplifying complex workflows and crafting tools like
          Revenue Intelligence AI and Sales Assistant AI to be intuitive and
          impactful. The idea was to build solutions that not only worked
          seamlessly but truly made a difference in the way sales teams operate.
        </div>
      </div>

      <div
        className='container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center'
        id='project-image'>
        <img src={salesken2} className='rounded-3xl object-cover w-full' />
      </div>

      <div className='container flex flex-col md:flex-row gap-10'>
        <div className='flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2'>
          <div className='text-2xl md:text-4xl'>UX Problem</div>
          <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
            Salesken's app could really use some upgrades to make life easier
            for sales reps. Right now, things like scheduling calls, checking
            deal insights and getting real-time tips involve hopping between a
            bunch of different tools, which can be a hassle. <br />
            This messy setup means sales reps waste time on everyday tasks
            instead of connecting with customers and building those important
            relationships.
          </div>
        </div>
        <div className='flex flex-col shadow-neu rounded-3xl p-8 gap-6 md:w-1/2'>
          <div className='text-2xl md:text-4xl'>UX Solution</div>
          <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
            Let’s create a platform that brings together easy scheduling, smart
            post-call insights, and real-time help all in one simple interface.
            Here’s what we’re aiming for:
            <ul className='list-disc pl-4 pt-1 pb-1 my-1'>
              <li>
                ⁠Keep things simple by putting all the tools in one handy app.
              </li>
              <li>
                ⁠Boost productivity with automated tasks and useful insights.
              </li>
              <li>
                ⁠Make it super easy for sales reps to focus on selling instead
                of juggling different tools.
              </li>
            </ul>
            This updated platform will make life easier and help sales pros work
            more efficiently, no matter what industry they’re in!
          </div>
        </div>
      </div>

      <div
        className='container flex shadow-neu rounded-3xl my-10 md:my-20 justify-center'
        id='project-image'>
        <img src={salesken1} className='rounded-3xl object-cover w-full' />
      </div>

      <div className='container flex flex-col shadow-neu rounded-3xl p-12 gap-6'>
        <div className='text-2xl md:text-4xl'>Impact</div>
        <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
          The redesigned platform led to:
          <ul className='list-disc pl-4 pt-1 pb-1'>
            <li>
              <span className='font-medium'>20%</span> increase in platform
              adoption.
            </li>
            <li>
              <span className='font-medium'>25%</span> reduction in time spent
              navigating tools.
            </li>
            <li>
              <span className='font-medium'>Improved deal closures</span> with
              real-time insights.
            </li>
            <li>
              <span className='font-medium'>Positive feedback</span> on the
              intuitive design and efficiency.{" "}
            </li>
          </ul>
          The updates positioned Salesken as a user-first, competitive solution
          in the revenue intelligence space.
        </div>
      </div>

      <div className='container flex flex-col shadow-neu rounded-3xl p-12 gap-6 my-10 md:my-20'>
        <div className='text-2xl md:text-4xl'>Reflections</div>
        <div className=' text-[rgb(156,156,156)] font-thin text-lg'>
          The Native app is currently a work in progress, but significant
          strides have been made.
          <div className='my-3' />
          This stint has proven to be the most challenging yet rewarding
          experience I've encountered, primarily due to the fast-paced and
          ambiguous environment. I truly valued the challenge of designing my
          first end-to-end product, which has greatly enhanced my confidence in
          making design decisions. This experience underscored the importance of
          being a collaborative team player and provided me with the opportunity
          to work closely with other designers and engineers.
          <div className='my-3' />PS: I was also in the process of developing Version
          2 of the mobile application.
        </div>
      </div>
    </motion.div>
  );
};

export default BLive;
