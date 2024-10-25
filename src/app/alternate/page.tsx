import React from 'react';

const LandingPage = () => {
  return (
    <div className=' bg-gray-50'>
      {/* Navigation */}

      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-12 md:py-24'>
        {/* Left Image */}
        <div className='md:w-1/2 order-2 md:order-1 '>
          <img
            src='https://picsum.photos/500/500?random=2'
            alt='VR User'
            className='relative z-10 rounded-full place-self-end'
          />
          <div className='relative'>
            {/* <div className='absolute -inset-1 bg-green-50 rounded-full'></div> */}
          </div>
        </div>

        {/* Right Content */}
        <div className='md:w-1/2 order-1 md:order-2'>
          <div className='flex items-center  mb-4'>
            <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
              <div className='w-6 h-6 border-2 border-white rounded-full'></div>
            </div>
            <span className='text-2xl font-bold'>SHIVON AI</span>
          </div>
          <h1 className='text-5xl md:text-6xl mb-6 font-light'>
            Revolutionizing
            <span className='block text-orange-500 font-light'>Recruitment</span>
          </h1>
          <p className='text-gray-600 text-lg mb-8 max-w-lg'>
            AI-powered candidate sourcing and search for recruiters. Simplify your hiring process
            with our automated solutions.
          </p>
          <p className='flex gap-2 text-2xl items-center font-semibold'>
            <span>Get In Touch</span>
            <span>
              <svg
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
              </svg>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
