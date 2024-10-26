/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Landing = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto md:py-16'>
      {/* Left Image */}
      <div className='md:w-2/5 order-2 md:order-1 relative'>
        <img
          src='https://picsum.photos/400/400?random=2'
          alt='VR User'
          className=' z-10 rounded-full md:absolute -top-48 -right-5'
          loading='eager'
          data-aos='fade-right'
        />
        <div className='relative'>
          {/* <div className='absolute -inset-1 bg-green-50 rounded-full'></div> */}
        </div>
      </div>

      {/* Right Content */}
      <div className='md:w-3/5 order-1 md:order-2 z-20 md:pt-10' data-aos='fade-left'>
        <div className='flex items-center  '>
          <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
            <div className='w-6 h-6 border-2 border-white rounded-full'></div>
          </div>
          <span className='text-3xl md:text-5xl font-semibold'>SHIVON AI</span>
        </div>
        <h1 className='text-3xl md:text-5xl mb-2'>
          Revolutionizing
          <span className='block text-orange-500 '>Recruitment</span>
        </h1>
        <p className='text-gray-600 text-lg mb-4 max-w-lg'>
          AI-powered candidate sourcing and search for recruiters. Simplify your hiring process with
          our automated solutions.
        </p>
        <p className='flex gap-2 text-xl items-center font-semibold'>
          <span>Get In Touch</span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 24'
              height='1.6rem'
              width='2rem'
              stroke='#cc6300'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='#cc6300'
            >
              <path
                d='M90 5L97 12M97 12L90 19M97 12H3'
                stroke='#cc6300'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='#cc6300'
              />
            </svg>
            {/* <svg
              fill='#cc6300'
              height='1.6rem'
              width='1.6rem'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='-33 -33 396.00 396.00'
              xmlSpace='preserve'
              stroke='#cc6300'
              strokeWidth='0.0033'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
                stroke='#CCCCCC'
                strokeWidth='1.98'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  id='XMLID_27_'
                  d='M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z'
                ></path>{' '}
              </g>
            </svg> */}
          </span>
        </p>
      </div>
    </section>
  );
};
