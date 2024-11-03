/* eslint-disable @next/next/no-img-element */
'use client';
import { FlowChart } from '@/components/FlowChart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Landing } from '@/components/Landing';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  // const randomNumber = Math.floor(Math.random() * 1000);

  useEffect(() => {
    Aos.init({ duration: 1200, offset: 200 });
  });
  return (
    // <div className='w-full bg-gradient-to-br from-indigo-50 from-10% via-orange-50 via-60% to-neutral-50 to-100%'>
    <div className='w-full '>
      <div className='px-6 md:px-28'>
        <Landing />

        <section className='pt-12 md:pt-28' data-aos='fade-down' data-aos-offset='205'>
          <div className='flex text-4xl text-center py-4 gap-4 justify-center'>
            <Image src='/logo.png' alt='shivon ai' width={250} height={150} />
            <span className='font-light'> Candidate</span>
            <span className='text-orange-600'> Monitoring System</span>
          </div>
          <FlowChart />
        </section>

        <section
          className='flex flex-col md:flex-row justify-center lg:pt-20'
          data-aos='fade-right'
        >
          <div className='md:w-1/2 md:text-right flex flex-col  h-full md:mt-36 px-12 pb-6 md:pb-0'>
            <div className='flex flex-col'>
              <p className='text-3xl md:text-4xl font-light pr-8'>
                Why <span className='text-orange-500'>Choose</span>
              </p>
              <Image
                src='/logo.png'
                alt='shivon ai'
                width={250}
                height={150}
                className='place-self-end'
              />
            </div>
            {/* <p className='text-xl md:text-3xl font-bold'>SHIVON AI</p> */}
          </div>
          <div className='p-0'>
            <div className='relative'>
              {/* Single continuous vertical line */}
              <div
                className='absolute left-6 top-4 w-0.5 bg-orange-600'
                style={{
                  height: 'calc(100% - 180px)',
                  transform: 'translateX(-50%)',
                }}
              />

              {features.map((feature, index) => (
                <div key={index} className='relative flex items-start'>
                  {/* Circle */}
                  <div className='relative '>{feature.svgImage}</div>

                  {/* Content */}
                  <div className='ml-16 mb-16'>
                    <h3 className='text-2xl md:text-4xl font-medium'>
                      <span className='text-orange-500 '>{feature.title}</span>
                      <span className='text-black ml-2'>{feature.subtitle}</span>
                    </h3>
                    <p className='mt-2 text-gray-600 text-lg'>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='text-gray-600 body-font overflow-hidden relative' data-aos='fade-left'>
          <div className='text-center pt-12 pb-8' data-aos='fade-down' data-aos-offset='150'>
            <div className='flex gap-2 justify-center sm:text-4xl text-2xl  text-gray-900 mb-4'>
              How
              {/* <span className='font-bold'>SHIVON AI</span> */}
              <span>
                <Image
                  src='/logo.png'
                  alt='shivon ai'
                  width={250}
                  height={150}
                  className='place-self-end'
                />
              </span>
              Makes
              <span className='text-orange-600'> A Difference</span>
            </div>
          </div>
          <div className='container lg:px-20 md:px-10 px-5 pb-24 mx-auto flex flex-wrap'>
            <div className='flex flex-wrap -m-4'>
              <div className='p-4 lg:w-1/2 md:w-full' data-aos='fade-right'>
                <div className='flex  inset-x-0 top-0 bg-gradient-to-tr from-orange-600 from-10% to-slate-50 to-80% p-0.5 sm:flex-row flex-col rounded-lg rounded-br-none'>
                  <div className='flex-grow bg-gradient-to-r from-slate-50 to-white rounded-lg rounded-r-none p-8 shadow-md'>
                    <h2 className='text-gray-900 text-xl md:text-3xl font-medium mb-3'>
                      AI Powered Search
                    </h2>
                    <p className='leading-relaxed text-base'>
                      Our AI tools speed up the hiring process by automatically sourcing and
                      screening candidates, reducing time to hire
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-4 lg:w-1/2 md:w-full'>
                <div className='flex  inset-x-0 top-0 bg-gradient-to-tr from-orange-600 from-10% to-slate-50 to-80% p-0.5 sm:flex-row flex-col rounded-lg rounded-br-none'>
                  <div className='flex-grow  bg-gradient-to-r from-slate-50 to-white rounded-lg rounded-r-none p-8 shadow-md'>
                    <h2 className='text-gray-900 text-xl md:text-3xl font-medium mb-3'>
                      Better Candidate Matches
                    </h2>
                    <p className='leading-relaxed text-base'>
                      Our AI tools speed up the hiring process by automatically sourcing and
                      screening candidates, reducing time to hire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='candidate-screening relative md:pb-24 flex flex-col gap-8'>
        <section className='grid lg:grid-cols-2 grid-cols-1 items-center lg:px-12 px-8 md:py-20 md:pb-40 gap-4 md:gap-0'>
          <img src='/chat1.png' alt='random' className='object-fill ' />
          <div className='max-w-md md:mx-auto'>
            <div className='space-y-2'>
              <p className='text-xl md:text-4xl font-medium'>
                Lorem <span className='text-orange-500'>Ipsum Is Simply</span> Dummy Text
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className='flex gap-2 font-bold text-lg items-center'>
                Get started
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
          <div className='lg:order-none order-last max-w-md md:mx-auto lg:self-auto'>
            <div className='space-y-2'>
              <p className='text-xl md:text-4xl font-medium'>
                Lorem <span className='text-orange-500'>Ipsum Is Simply</span> Dummy Text
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className='flex gap-2 font-bold text-lg items-center'>
                Get started
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
          <img src='/chat.png' alt='random' />
        </section>
        <section className='w-full lg:absolute lg:-bottom-24 place-self-end self-end'>
          <div className='flex lg:w-[80%] items-center mx-auto justify-around bg-white rounded-xl '>
            <div className='py-4 md:py-0 px-4'>
              <p className='text-xl lg:text-4xl font-bold'>Ready To Revolutionize</p>
              <p className='text-xl lg:text-4xl font-bold'>Your Recruitment Process?</p>
              <p className='flex gap-2 pt-8 font-bold text-orange-600 '>
                Get started
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
                </span>
              </p>
            </div>
            <img alt='agree' src='/agree2.png' className='md:h-56 h-28' data-aos='fade-top' />
          </div>
        </section>
      </div>
      <div className='md:h-72 flex w-full'>
        <section className='mt-auto flex flex-col justify-center w-full content-center place-content-center mx-auto py-10 gap-4'>
          <p className='text-5xl font-bold text-center'>SHIVON AI</p>
          <div className='flex self-center gap-4'>
            <img src='/icons8-instagram.svg' alt='facebook' className='max-w-6' />
            <img src='/icons8-facebook.svg' alt='facebook' className='max-w-6' />
            <img src='/icons8-linkedin.svg' alt='facebook' className='max-w-6' />
            <img src='/icons8-twitterx.svg' alt='facebook' className='max-w-6' />
          </div>
        </section>
      </div>
      <div className='divider py-0 my-0 lg:max-w-screen-md mx-auto'></div>
    </div>
  );
}

const features = [
  {
    title: 'AI-Powered',
    subtitle: 'Search',
    description:
      'Leverage advanced AI algorithms to source the best candidates quickly and efficiently.',
    svgImage: (
      <svg
        width='50'
        height='53'
        viewBox='0 0 73 73'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='36.5' cy='36.5' r='36.5' fill='url(#paint0_linear_6_2)' />
        <path
          d='M41.9688 41.9688L38.339 38.339M38.339 38.339C38.796 37.8819 39.1585 37.3393 39.4059 36.7422C39.6532 36.145 39.7806 35.505 39.7806 34.8586C39.7806 34.2123 39.6532 33.5723 39.4059 32.9751C39.1585 32.378 38.796 31.8354 38.339 31.3783C37.8819 30.9213 37.3393 30.5587 36.7422 30.3114C36.145 30.064 35.505 29.9367 34.8586 29.9367C34.2123 29.9367 33.5723 30.064 32.9751 30.3114C32.378 30.5587 31.8354 30.9213 31.3783 31.3783C30.4551 32.3016 29.9364 33.5537 29.9364 34.8594C29.9364 36.165 30.4551 37.4172 31.3783 38.3404C32.3016 39.2636 33.5537 39.7823 34.8594 39.7823C36.165 39.7823 37.4172 39.2636 38.3404 38.3404L38.339 38.339ZM49.625 36.5C49.625 38.2236 49.2855 39.9303 48.6259 41.5227C47.9663 43.1151 46.9995 44.562 45.7808 45.7808C44.562 46.9995 43.1151 47.9663 41.5227 48.6259C39.9303 49.2855 38.2236 49.625 36.5 49.625C34.7764 49.625 33.0697 49.2855 31.4773 48.6259C29.8849 47.9663 28.438 46.9995 27.2192 45.7808C26.0005 44.562 25.0337 43.1151 24.3741 41.5227C23.7145 39.9303 23.375 38.2236 23.375 36.5C23.375 33.019 24.7578 29.6806 27.2192 27.2192C29.6806 24.7578 33.019 23.375 36.5 23.375C39.981 23.375 43.3194 24.7578 45.7808 27.2192C48.2422 29.6806 49.625 33.019 49.625 36.5Z'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_6_2'
            x1='-5.07507e-08'
            y1='-4.5'
            x2='69.5'
            y2='62'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#BDDBD1' />
            <stop offset='1' stop-color='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Automated',
    subtitle: 'Sourcing',
    description: 'Automate candidate sourcing, freeing up valuable time for recruiters.',
    svgImage: (
      <svg
        width='50'
        height='53'
        viewBox='0 0 73 73'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='36.5' cy='36.5' r='36.5' fill='url(#paint0_linear_6_3)' />
        <path
          d='M47.4375 36.5C47.4375 34.7033 47.3704 32.9227 47.2362 31.1596C47.1331 29.7627 46.5314 28.4494 45.541 27.459C44.5506 26.4685 43.2373 25.8669 41.8404 25.7637C38.2852 25.4955 34.7148 25.4955 31.1596 25.7637C29.7627 25.8669 28.4494 26.4685 27.459 27.459C26.4686 28.4494 25.8669 29.7627 25.7638 31.1596C25.739 31.4804 25.7171 31.8027 25.6967 32.125M47.4375 36.5L51.8125 32.125M47.4375 36.5L43.0625 32.125M25.5625 36.5C25.5625 38.2966 25.6296 40.0773 25.7638 41.8404C25.8669 43.2373 26.4686 44.5506 27.459 45.541C28.4494 46.5314 29.7627 47.133 31.1596 47.2362C34.7148 47.5046 38.2852 47.5046 41.8404 47.2362C43.2373 47.133 44.5506 46.5314 45.541 45.541C46.5314 44.5506 47.1331 43.2373 47.2362 41.8404C47.261 41.5196 47.2829 41.1973 47.3033 40.875M25.5625 36.5L29.9375 40.875M25.5625 36.5L21.1875 40.875'
          stroke='black'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_6_3'
            x1='-5.07507e-08'
            y1='-4.5'
            x2='69.5'
            y2='62'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#BDDBD1' />
            <stop offset='1' stop-color='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Data-Driven',
    subtitle: 'Insights',
    description:
      'Get insights from data-driven reports, helping you make informed hiring decisions.',
    svgImage: (
      <svg
        width='50'
        height='53'
        viewBox='0 0 73 73'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='36.5' cy='36.5' r='36.5' fill='url(#paint0_linear_6_4)' />
        <path
          d='M25.25 42L32 35.25L36.306 39.556C37.5509 37.1021 39.6045 35.1531 42.12 34.038L44.86 32.818M44.86 32.818L38.92 30.537M44.86 32.818L42.58 38.758'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_6_4'
            x1='-5.07507e-08'
            y1='-4.5'
            x2='69.5'
            y2='62'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#BDDBD1' />
            <stop offset='1' stop-color='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

// const svgList = (feature: string) => {
//   switch (feature) {
//     case 'AI-Powered':
//       return (
//         <svg
//           className=''
//           width='35'
//           height='35'
//           viewBox='0 0 35 35'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M22.9688 22.9688L19.339 19.339M19.339 19.339C19.796 18.8819 20.1585 18.3393 20.4059 17.7422C20.6532 17.145 20.7806 16.505 20.7806 15.8586C20.7806 15.2123 20.6532 14.5723 20.4059 13.9751C20.1585 13.378 19.796 12.8354 19.339 12.3783C18.8819 11.9213 18.3393 11.5587 17.7422 11.3114C17.145 11.064 16.505 10.9367 15.8586 10.9367C15.2123 10.9367 14.5723 11.064 13.9751 11.3114C13.378 11.5587 12.8354 11.9213 12.3783 12.3783C11.4551 13.3016 10.9364 14.5537 10.9364 15.8594C10.9364 17.165 11.4551 18.4172 12.3783 19.3404C13.3016 20.2636 14.5537 20.7823 15.8594 20.7823C17.165 20.7823 18.4172 20.2636 19.3404 19.3404L19.339 19.339ZM30.625 17.5C30.625 19.2236 30.2855 20.9303 29.6259 22.5227C28.9663 24.1151 27.9995 25.562 26.7808 26.7808C25.562 27.9995 24.1151 28.9663 22.5227 29.6259C20.9303 30.2855 19.2236 30.625 17.5 30.625C15.7764 30.625 14.0697 30.2855 12.4773 29.6259C10.8849 28.9663 9.43799 27.9995 8.21922 26.7808C7.00045 25.562 6.03367 24.1151 5.37408 22.5227C4.71449 20.9303 4.375 19.2236 4.375 17.5C4.375 14.019 5.75781 10.6806 8.21922 8.21922C10.6806 5.75781 14.019 4.375 17.5 4.375C20.981 4.375 24.3194 5.75781 26.7808 8.21922C29.2422 10.6806 30.625 14.019 30.625 17.5Z'
//             stroke='black'
//             strokeWidth='1.5'
//             strokeLinecap='round'
//             strokeLinejoin='round'
//           />
//         </svg>
//       );
//     case 'Automated':
//       return (
//         <svg
//           width='33'
//           height='25'
//           viewBox='0 0 33 25'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M27.4375 12.5C27.4375 10.7033 27.3704 8.92268 27.2362 7.15956C27.1331 5.76269 26.5314 4.44938 25.541 3.45896C24.5506 2.46853 23.2373 1.86691 21.8404 1.76372C18.2852 1.49551 14.7148 1.49551 11.1596 1.76372C9.76271 1.86691 8.44941 2.46853 7.45898 3.45896C6.46856 4.44938 5.86694 5.76269 5.76375 7.15956C5.73896 7.48039 5.71708 7.80268 5.69667 8.12497M27.4375 12.5L31.8125 8.12497M27.4375 12.5L23.0625 8.12497M5.5625 12.5C5.5625 14.2966 5.62958 16.0773 5.76375 17.8404C5.86694 19.2373 6.46856 20.5506 7.45898 21.541C8.44941 22.5314 9.76271 23.133 11.1596 23.2362C14.7148 23.5046 18.2852 23.5046 21.8404 23.2362C23.2373 23.133 24.5506 22.5314 25.541 21.541C26.5314 20.5506 27.1331 19.2373 27.2362 17.8404C27.261 17.5196 27.2829 17.1973 27.3033 16.875M5.5625 12.5L9.9375 16.875M5.5625 12.5L1.1875 16.875'
//             stroke='black'
//             strokeWidth='1.5'
//             strokeLinecap='round'
//             strokeLinejoin='round'
//           />
//         </svg>
//       );
//     case 'Data-Driven':
//       return (
//         <svg
//           width='24'
//           height='24'
//           viewBox='0 0 24 24'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M2.25 18L9 11.25L13.306 15.556C14.5509 13.1021 16.6045 11.1531 19.12 10.038L21.86 8.81799M21.86 8.81799L15.92 6.53699M21.86 8.81799L19.58 14.758'
//             stroke='black'
//             strokeWidth='1.5'
//             strokeLinecap='round'
//             strokeLinejoin='round'
//           />
//         </svg>
//       );
//   }
// };
