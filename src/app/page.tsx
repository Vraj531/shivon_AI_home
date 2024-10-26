/* eslint-disable @next/next/no-img-element */
'use client';
import { FlowChart } from '@/components/FlowChart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Landing } from '@/components/Landing';
import { useEffect } from 'react';

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
          <p className='text-4xl text-center py-4'>
            <span className='font-bold'>SHIVON AI</span>
            <span className='font-light'> Candidate</span>
            <span className='text-orange-600'> Monitoring System</span>
          </p>
          <FlowChart />
        </section>

        <section
          className='flex flex-col md:flex-row justify-center lg:pt-20'
          data-aos='fade-right'
        >
          <div className='md:w-1/2 md:text-right items-center h-full md:mt-36 px-12 pb-6 md:pb-0'>
            <p className='text-3xl md:text-4xl font-light'>
              Why <span className='text-orange-500'>Choose</span>
            </p>
            <p className='text-xl md:text-3xl font-bold'>SHIVON AI</p>
          </div>
          <div className='p-0'>
            <div className='relative'>
              {/* Single continuous vertical line */}
              <div
                className='absolute left-4 top-4 w-0.5 bg-orange-600'
                style={{
                  height: 'calc(100% - 180px)',
                  transform: 'translateX(-50%)',
                }}
              />

              {features.map((feature, index) => (
                <div key={index} className='relative flex items-start'>
                  {/* Circle */}
                  <div className='relative'>
                    <div className='absolute left-0 w-8 h-8 bg-green-100 rounded-full border-2 z-10' />
                  </div>

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
            <h1 className='sm:text-4xl text-2xl  text-gray-900 mb-4'>
              How <span className='font-bold'>SHIVON AI</span> Makes
              <span className='text-orange-600'> A Difference</span>
            </h1>
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
      <div className='bg-gradient-to-t from-green-50 to-neutral-50 relative md:pb-24 flex flex-col gap-8'>
        <section className='grid lg:grid-cols-2 grid-cols-1 items-center lg:px-12 px-8 md:py-20 md:pb-40 gap-4 md:gap-0'>
          <img src='https://picsum.photos/700/400?random=1' alt='random' className='object-fill ' />
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
          <img src='https://picsum.photos/700/400?random=2' alt='random' />
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
  },
  {
    title: 'Automated',
    subtitle: 'Sourcing',
    description: 'Automate candidate sourcing, freeing up valuable time for recruiters.',
  },
  {
    title: 'Data-Driven',
    subtitle: 'Insights',
    description:
      'Get insights from data-driven reports, helping you make informed hiring decisions.',
  },
];
