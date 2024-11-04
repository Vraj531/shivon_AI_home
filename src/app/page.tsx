/* eslint-disable @next/next/no-img-element */
'use client';
import { FlowChart } from '@/components/FlowChart';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Landing } from '@/components/Landing';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // const randomNumber = Math.floor(Math.random() * 1000);

  useEffect(() => {
    Aos.init({ duration: 800, offset: 100 });
  });
  return (
    // <div className='w-full bg-gradient-to-br from-indigo-50 from-10% via-orange-50 via-60% to-neutral-50 to-100%'>
    <div className='w-full '>
      <div className='px-6 md:px-28'>
        <Landing />

        <section className='pt-12 md:pt-28' data-aos='fade-down' data-aos-offset='205'>
          <div className='flex text-4xl text-center py-4 gap-4 justify-center'>
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
      <div className='bg-gradient-to-r from-[#bddbd170] to-neutral-50 relative md:pb-24 flex flex-col gap-8 z-40'>
        <section className='grid lg:grid-cols-2 grid-cols-1 items-center lg:px-12 px-8 md:py-20 md:pb-40 gap-4 md:gap-0'>
          <img src='/chat1.png' alt='random' className='object-fill ' />
          <div className='max-w-md md:mx-auto'>
            <div className='space-y-2'>
              <p className='text-xl md:text-4xl font-medium'>
                AI Powered <span className='text-orange-500'>Candidate Screening</span>
              </p>
              <p>
                Our AI screens candidates with skill-focused questions, capturing responses and
                recording video to provide recruiters with a clear view of each candidate&apos;s
                abilities.
              </p>
              <Link
                className='flex gap-2 font-bold text-lg items-center'
                href='https://forms.gle/MLhtvcPYF2xcjkff9'
              >
                Get started
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 24'
                    height='1.6rem'
                    width='3rem'
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
              </Link>
            </div>
          </div>
          <div className='lg:order-none order-last max-w-md md:mx-auto lg:self-auto'>
            <div className='space-y-2'>
              <p className='text-xl md:text-4xl font-medium'>
                Comprehensive <br /> <span className='text-orange-500'>Candidate Profiles</span>
              </p>
              <p>
                Our app offers candidate profiles with essential information, skill assessments, and
                percentages, helping HR professionals make quick hiring decisions.
              </p>
              <Link
                className='flex gap-2 font-bold text-lg items-center'
                href='https://forms.gle/MLhtvcPYF2xcjkff9'
              >
                Get started
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 24'
                    height='1.6rem'
                    width='3rem'
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
              </Link>
            </div>
          </div>
          <img src='/chat.png' alt='chat' />
        </section>
        <section className='w-full lg:absolute lg:-bottom-24 place-self-end self-end z-50'>
          <div className='flex lg:w-[80%] items-center mx-auto justify-around bg-[#f6f5fa] rounded-xl '>
            <div className='py-4 md:py-0 px-4'>
              <p className='text-xl lg:text-4xl font-bold'>Ready To Revolutionize</p>
              <p className='text-xl lg:text-4xl font-bold'>Your Recruitment Process?</p>
              <Link
                className='flex gap-2 pt-8 font-bold text-orange-600 '
                href="href='https://forms.gle/MLhtvcPYF2xcjkff9'"
              >
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
              </Link>
            </div>
            <img alt='agree' src='/agree2.png' className='md:h-56 h-28' data-aos='fade-top' />
          </div>
        </section>
      </div>
      <section className='md:h-80 flex w-full relative'>
        <div className='absolute bg-[#f0451112] left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 size-[500px] filter blur-lg' />
        <div className='mt-auto flex flex-col justify-center w-full content-center place-content-center mx-auto py-10 gap-8 relative'>
          {/* <p className='text-5xl font-bold text-center'>SHIVON AI</p> */}
          <Image
            src='/logo.png'
            alt='shivon ai'
            className='place-self-center'
            width={350}
            height={150}
          />
          <div className='flex self-center gap-4'>
            <img src='/icons8-instagram.svg' alt='facebook' className='max-w-6' />
            <img src='/icons8-facebook.svg' alt='facebook' className='max-w-6' />
            <img src='/icons8-linkedin.svg' alt='facebook' className='max-w-6' />
            <img src='/icons8-twitterx.svg' alt='facebook' className='max-w-6' />
          </div>
        </div>
      </section>
      <div className='divider py-0 my-0 lg:max-w-screen-lg mx-auto'></div>
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
            <stop stopColor='#BDDBD1' />
            <stop offset='1' stopColor='white' />
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
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
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
            <stop stopColor='#BDDBD1' />
            <stop offset='1' stopColor='white' />
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
            <stop stopColor='#BDDBD1' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
