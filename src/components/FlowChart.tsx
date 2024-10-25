import React from 'react';

export const FlowChart = () => {
  return (
    <div className='md:flex justify-center items-start relative '>
      {/* Left Side Nodes */}
      <div className='relative flex flex-col items-end gap-8'>
        {/* Vertical Connecting Line for Left Nodes */}
        <div className='absolute  top-7 h-[86%] w-0.5 bg-orange-500'></div>

        {/* Left Nodes */}
        <Node label='ID Verification' direction='right' />
        <Node label='Profile Information' direction='right' />
        <Node label='Skill Assessment' direction='right' />
        <Node label='Learning Roadmap' direction='right' />
        <Node label='Job Application' direction='right' />
      </div>

      {/* CMS Node in the Center */}
      <div className='relative flex flex-col items-center md:mx-28 mx-20 self-center'>
        <div className='bg-yellow-50 text-orange-600 rounded-lg p-6 text-center shadow-md w-72 h-72 align-middle flex'>
          <span className='font-bold text-3xl self-center text-center w-full'>CMS</span>
        </div>
        <div className='absolute -top-8'>
          <div className='bg-[#dfeee8] p-2 w-36 text-center rounded-2xl rounded-br-none rounded-tl-none'>
            AI Video
            <br />
            Screening
          </div>
        </div>
        <div className='absolute top-[15%] -left-20'>
          <div className='bg-[#dfeee8] p-2 w-36 text-center rounded-2xl rounded-br-none rounded-tl-none'>
            Profile
            <br />
            Verfication
          </div>
        </div>
        <div className='absolute top-[15%] -right-20'>
          <div className='bg-[#dfeee8] p-2 w-36 text-center rounded-2xl rounded-br-none rounded-tl-none'>
            Learning
            <br />
            History
          </div>
        </div>
        <div className='absolute bottom-[15%] -right-20'>
          <div className='bg-[#dfeee8] p-2 w-36 text-center rounded-2xl rounded-br-none rounded-tl-none'>
            Interview
            <br />
            History
          </div>
        </div>
        <div className='absolute bottom-[15%] -left-20'>
          <div className='bg-[#dfeee8] p-2 w-36 text-center rounded-2xl rounded-br-none rounded-tl-none'>
            Skill
            <br />
            Tracking
          </div>
        </div>
        <div className='absolute -bottom-8'>
          <div className='bg-[#dfeee8] p-2 w-36 text-center rounded-2xl rounded-br-none rounded-tl-none'>
            Work
            <br />
            History
          </div>
        </div>
        {/* Horizontal Lines Connecting CMS to Left and Right */}
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full w-28 h-0.5 bg-orange-500 '></div>
        <div className='absolute top-[46.5%] -left-5'>
          <svg
            fill='#f45d32'
            height='20px'
            width='20px'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='-13.2 -13.2 356.40 356.40'
            xmlSpace='preserve'
            stroke='#f45d32'
            strokeWidth='9.24'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke='#CCCCCC'
              strokeWidth='7.92'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                id='XMLID_27_'
                d='M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z'
              ></path>{' '}
            </g>
          </svg>
        </div>
        <div className='absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full w-28 h-0.5 bg-orange-500'></div>
      </div>

      {/* Right Side Nodes */}
      <div className='relative flex flex-col items-start gap-8 mt-[4.76rem]'>
        {/* Vertical Connecting Line for Right Nodes */}
        <div className='absolute top-7 h-[78%] w-0.5 bg-orange-500'></div>

        {/* Right Nodes */}
        <Node label='Recruiter Dashboard' direction='left' />
        <Node label='Centralized Candidate Profile' direction='left' />
        <Node label='Candidate Matching' direction='left' />
      </div>
    </div>
  );
};

const Node = ({ label, direction = 'right' }: { label: string; direction: string }) => {
  return (
    <div className='flex items-center'>
      {direction === 'left' && <div className='w-20 h-0.5 bg-orange-500'></div>}
      {direction === 'left' && (
        <svg
          fill='#f45d32'
          height='20px'
          width='20px'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='-13.2 -13.2 356.40 356.40'
          xmlSpace='preserve'
          stroke='#f45d32'
          strokeWidth='9.24'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='#CCCCCC'
            strokeWidth='7.92'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <path
              id='XMLID_27_'
              d='M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z'
            ></path>{' '}
          </g>
        </svg>
      )}
      <NodeBox label={label} />
      {direction === 'right' && <div className='w-10 h-0.5 bg-orange-500'></div>}
    </div>
  );
};

const NodeBox = ({ label }: { label: string }) => {
  if (label === 'Centralized Candidate Profile')
    return (
      <div className='bg-[#dfeee8] p-4 w-52 text-center rounded-lg shadow-md'>
        Centralized <br /> Candidate Profile
      </div>
    );
  return <div className='bg-[#dfeee8] p-4 w-52 text-center rounded-lg shadow-md'>{label}</div>;
};
