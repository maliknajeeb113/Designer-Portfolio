import React, { lazy, Suspense } from "react";

import bank from "../assets/playground/bank.gif";
import coffee from "../assets/playground/coffee.gif";
import porsche from "../assets/playground/Porsche.gif";
import zara from "../assets/playground/zara.gif";
import ezy from "../assets/playground/ezy.gif";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Playground = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className=' w-screen top-[120px] flex flex-col items-center font-poppins px-6 md:px-[10rem] mx-auto mt-[150px] mb-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}>
      <div className='text-[rgb(182,154,137)] text-5xl font-medium'>
        Playground
      </div>

      <div
        id='mega-grid'
        className='container flex flex-col mt-16 gap-4 justify-center'>
        <div className='flex flex-row gap-4'>
          <div
            id='contact'
            className='shadow-neu rounded-2xl md:rounded-3xl w-9/12 h-max'>
            <img
              src={porsche}
              alt='porsche'
              className='rounded-2xl md:rounded-3xl object-contain w-full max-h-full p-1 md:p-2 '
            />
          </div>

          <div
            id='contact'
            className='shadow-neu rounded-2xl md:rounded-3xl flex h-max w-4/12'>
            <img
              src={bank}
              alt='car'
              className='rounded-2xl md:rounded-3xl object-cover p-1 md:p-2'
            />
          </div>
        </div>

        <div
          id='contact'
          className='shadow-neu rounded-2xl md:rounded-3xl flex justify-center '>
          <img
            src={zara}
            alt='zara'
            className='rounded-2xl md:rounded-3xl object-con'
          />
        </div>

        <div className='flex flex-row gap-4'>
          <div
            id='contact'
            className='shadow-neu rounded-2xl md:rounded-3xl flex h-max w-4/12'>
            <img
              src={coffee}
              alt='car'
              className='rounded-2xl md:rounded-3xl object-cover p-1 md:p-2'
            />
          </div>
          <div
            id='contact'
            className='shadow-neu rounded-2xl md:rounded-3xl w-9/12 h-max'>
            <img
              src={ezy}
              alt='porsche'
              className='rounded-2xl md:rounded-3xl object-contain w-full max-h-full p-1 md:p-2'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Playground;
