export const FlowChart = () => {
  return (
    <div className='flex justify-center font-medium items-start relative md:scale-75 lg:scale-100 scale-[38%]  md:py-16'>
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
        {/* animated circle over the line */}
        {/* <div className='absolute size-2 rounded-full top-[8.7rem] -left-20 transform -translate-y-1/2 -translate-x-full bg-orange-500 circle-rightl'></div> */}
        {/* Horizontal Lines Connecting CMS to Left and Right */}
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full w-28 h-0.5 bg-orange-500 '></div>
        <div className='absolute top-[47.2%] -left-[10px]'>
          <svg
            width='10'
            height='16'
            viewBox='0 0 10 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.707 8.70713C10.098 8.31661 10.098 7.68344 9.707 7.29292L3.343 0.928957C2.953 0.538432 2.319 0.538432 1.929 0.928957C1.538 1.31948 1.538 1.95265 1.929 2.34317L7.586 8.00003L1.929 13.6569C1.538 14.0474 1.538 14.6806 1.929 15.0711C2.319 15.4616 2.953 15.4616 3.343 15.0711L9.707 8.70713ZM0 9L9 9.00003L9 7.00003L0 7L0 9Z'
              fill='#EF6823'
            />
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
  return label === 'Centralized Candidate Profile' ? (
    <div className='flex items-center '>
      <div className='flex items-center mb-[1px]'>
        {direction === 'left' && (
          <>
            <div className='w-20 h-0.5 bg-orange-500'></div>
            {/* ball animation */}
            <div className='absolute size-2 rounded-full left-0 bg-orange-500 circle-rightl'></div>
          </>
        )}
        {direction === 'left' && (
          <svg
            width='10'
            height='16'
            viewBox='0 0 10 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.707 8.70713C10.098 8.31661 10.098 7.68344 9.707 7.29292L3.343 0.928957C2.953 0.538432 2.319 0.538432 1.929 0.928957C1.538 1.31948 1.538 1.95265 1.929 2.34317L7.586 8.00003L1.929 13.6569C1.538 14.0474 1.538 14.6806 1.929 15.0711C2.319 15.4616 2.953 15.4616 3.343 15.0711L9.707 8.70713ZM0 9L9 9.00003L9 7.00003L0 7L0 9Z'
              fill='#EF6823'
            />
          </svg>
        )}
      </div>
      <NodeBox label={label} />
      {direction === 'right' && (
        <>
          {/* <div className='absolute size-2 rounded-full  bg-orange-500 circle-rightl'></div> */}
          <div className='w-10 h-0.5 bg-orange-500'></div>
        </>
      )}
    </div>
  ) : (
    <div className='flex items-center'>
      {direction === 'left' && (
        <>
          <div className='w-20 h-0.5 bg-orange-500'></div>
          {/* ball animation */}
          <div className='absolute size-2 rounded-full left-0 bg-orange-500 circle-rightl'></div>
        </>
      )}
      {direction === 'left' && (
        <svg
          width='10'
          height='16'
          viewBox='0 0 10 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.707 8.70713C10.098 8.31661 10.098 7.68344 9.707 7.29292L3.343 0.928957C2.953 0.538432 2.319 0.538432 1.929 0.928957C1.538 1.31948 1.538 1.95265 1.929 2.34317L7.586 8.00003L1.929 13.6569C1.538 14.0474 1.538 14.6806 1.929 15.0711C2.319 15.4616 2.953 15.4616 3.343 15.0711L9.707 8.70713ZM0 9L9 9.00003L9 7.00003L0 7L0 9Z'
            fill='#EF6823'
          />
        </svg>
      )}
      <NodeBox label={label} />
      {direction === 'right' && (
        <>
          <div className='w-10 h-0.5 bg-orange-500'></div>
          {/* ball animation */}
          <div className='absolute size-2 rounded-full right-8 bg-orange-500 circle-right'></div>
        </>
      )}
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
