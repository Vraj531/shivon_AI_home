/* eslint-disable @next/next/no-img-element */
'use client';
import { FlowChart } from '@/components/FlowChart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Landing } from '@/components/Landing';
import { useEffect } from 'react';

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

export default function Home() {
  // const randomNumber = Math.floor(Math.random() * 1000);

  useEffect(() => {
    Aos.init({ duration: 1200, offset: 200 });
  });
  return (
    <div className='w-full bg-gradient-to-br from-indigo-50 to-neutral-50'>
      <div className='ripple' style={{ top: '-30rem', left: '-30rem' }}></div>
      <div className='ripple' style={{ top: '-45rem', left: '-45rem;' }}></div>
      <div className='ripple' style={{ top: '-60rem', left: '-60rem;' }}></div>
      <div className=' md:px-28'>
        <Landing />

        <section className='py-28 hidden md:block' data-aos='fade-down' data-aos-offset='220'>
          <p className='text-3xl text-center pb-16'>
            <span className='font-bold'>SHIVON AI</span>
            <span className='font-light'> Candidate</span>
            <span className='text-orange-600'> Monitoring System</span>
          </p>

          <FlowChart />
        </section>

        <section className='flex justify-center pt-20' data-aos='fade-right'>
          <div className='w-[50%] text-right flex-col items-center h-full mt-36 px-12'>
            <p className='text-3xl font-light '>
              Why <span className='text-orange-500'>Choose</span>
            </p>
            <p className='text-3xl font-bold'>SHIVON AI</p>
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
                    <h3 className='text-4xl font-light'>
                      <span className='text-orange-500'>{feature.title}</span>
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
          <div className='text-center pt-12 ' data-aos='fade-down' data-aos-offset='150'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              How SHIVON AI Makes A Difference
            </h1>
          </div>
          <div className='container lg:px-20 md:px-10 px-5 pb-24 mx-auto flex flex-wrap'>
            <div className='flex flex-wrap -m-4'>
              <div className='p-4 lg:w-1/2 md:w-full' data-aos='fade-right'>
                <div className='flex  inset-x-0 top-0 bg-gradient-to-tr from-orange-600 from-10% to-slate-50 to-80% p-0.5 sm:flex-row flex-col rounded-lg rounded-br-none'>
                  <div className='flex-grow bg-gradient-to-r from-slate-50 to-white rounded-lg rounded-r-none p-6 shadow-md'>
                    <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                      AI Powered Search
                    </h2>
                    <p className='leading-relaxed text-base'>
                      Our AI tools speed up the hiring process by automatically sourcing and
                      screening candidates, reducing time to hire
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-4 lg:w-1/2 md:w-full' data-aos='fade-left'>
                <div className='flex  inset-x-0 top-0 bg-gradient-to-tr from-orange-600 from-10% to-slate-50 to-80% p-0.5 sm:flex-row flex-col rounded-lg rounded-br-none'>
                  <div className='flex-grow bg-gradient-to-r from-slate-50 to-white rounded-lg rounded-r-none p-6 shadow-md'>
                    <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
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
      <div className='bg-gradient-to-r from-stone-200 to-neutral-50 relative'>
        <section className='grid lg:grid-cols-2 grid-cols-1 items-center lg:px-12 px-8 gap-8 py-20 pb-40'>
          <img
            src='https://picsum.photos/700/400?random=1'
            alt='random'
            className='object-fill'
            data-aos='fade-right'
          />
          <div className='max-w-sm mx-auto' data-aos='fade-left'>
            <div className='space-y-2'>
              <p className='text-4xl'>
                Lorem <span>Ipsum Is Simply</span> Dummy Text
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className='flex gap-2 font-bold text-orange-600'>
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
          <div
            className='lg:order-none order-last max-w-sm mx-auto lg:self-auto'
            data-aos='fade-right'
          >
            <div className='space-y-2'>
              <p className='text-4xl'>
                Lorem <span>Ipsum Is Simply</span> Dummy Text
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className='flex gap-2 font-bold'>
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
          <img src='https://picsum.photos/700/400?random=2' alt='random' data-aos='fade-left' />
        </section>
        <section className='w-full lg:absolute lg:-bottom-24'>
          <div className='flex lg:w-[70%] items-center mx-auto justify-around bg-white rounded-xl'>
            <div>
              <p className='text-3xl font-semibold'>Ready To Revolutionize</p>
              <p className='text-3xl font-semibold'>Your Recruitment Process?</p>
              <p className='flex gap-2 pt-2 font-bold text-orange-600 '>
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
            <img
              alt='agree'
              src='/agree2.png'
              className='h-44 object-scale-down'
              data-aos='fade-top'
            />
          </div>
        </section>
      </div>
      <div className='h-60 flex w-full'>
        <section className='mt-auto flex flex-col justify-center w-full content-center place-content-center mx-auto py-6 gap-4'>
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
