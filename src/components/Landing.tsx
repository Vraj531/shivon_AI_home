/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export const Landing = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto md:py-16 relative w-full'>
      <div className='absolute inset-0  flex w-full justify-between'>
        <div className='absolute bg-[#674dfd11] -top-[24rem] -left-[24rem] rounded-full size-[1004px] filter blur-lg' />
        <svg
          className='-top-[11rem] lg:absolute hidden'
          width='1425'
          height='672'
          viewBox='0 0 1425 672'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_1_754)'>
            <path
              d='M1550 -535C1407.81 452.123 513.537 542 513.537 542C513.537 542 1132.81 456.435 414.292 -237.82L130 -535H1550Z'
              fill='#F04511'
              fillOpacity='0.05'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_1_754'
              x='0'
              y='-665'
              width='1680'
              height='1337'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='65' result='effect1_foregroundBlur_1_754' />
            </filter>
          </defs>
        </svg>

        <div className='absolute bg-[#f0451110]  w-[400px] h-[600px] -top-[11rem] left-[48rem] rounded-full filter blur-lg' />
        {/* <img alt='' src='/arc.png' className='size-10' /> */}
      </div>
      {/* Left Image */}
      <div className='md:w-1/2 order-2 md:order-1 relative' data-aos='fade-right'>
        <Image
          src='/landing.png'
          alt='VR User'
          className=''
          loading='eager'
          width={500}
          height={300}
          layout=''
        />
        {/* <div className='relative'> */}
        {/* <div className='absolute -inset-1 bg-green-50 rounded-full'></div> */}
        {/* </div> */}
      </div>

      {/* Right Content */}
      <div className='md:w-1/2 order-1 md:order-2 z-20 md:pt-10 ml-10' data-aos='fade-left'>
        <h1 className='text-3xl md:text-7xl mb-2'>
          Revolutionizing
          <span className='block text-[#fc7754] '>Recruitment</span>
        </h1>
        <p className='text-gray-600 text-lg mb-4 max-w-lg'>
          AI-powered candidate sourcing and search for recruiters. Simplify your hiring process with
          our automated solutions.
        </p>
        <Link
          className='flex gap-2 text-xl items-center font-semibold link no-underline hover:underline'
          href='https://forms.gle/MLhtvcPYF2xcjkff9'
        >
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
        </Link>
      </div>
    </section>
  );
};
