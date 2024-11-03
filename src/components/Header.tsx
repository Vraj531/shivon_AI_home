import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex flex-col z-10'>
      <header className='navbar lg:px-48 py-4'>
        <div className='navbar-start'>
          {/* <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Features</a>
              </li>
            </ul>
          </div> */}
          <Link className='' href='/'>
            <Image src='/logo.png' alt='shivon ai' width={250} height={150} />
          </Link>
        </div>
        {/* <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Features</a>
          </li>
        </ul>
      </div> */}
        <div className='navbar-end'>
          {/* <ul className='menu menu-horizontal px-1 pr-8 hidden md:flex'>
            <li>
              <a className='font-semibold'>Home</a>
            </li>
            <li>
              <a className='font-semibold'>About</a>
            </li>
            <li>
              <a className='font-semibold'>Pricing</a>
            </li>
            <li>
              <a className='font-semibold'>Features</a>
            </li>
          </ul> */}
          {/* <a className='link no-underline hover:underline font-semibold text-orange-500'>Login</a>
          <div className='divider divider-horizontal md:py-4 before:h-[1.2px] after:h-[1.2px] before:bg-black after:bg-black' />
          <a className='link no-underline hover:underline font-semibold'>Signup</a> */}
          <Link
            className='link no-underline hover:underline font-semibold text-orange-500'
            href='https://forms.gle/MLhtvcPYF2xcjkff9'
          >
            Request a demo
          </Link>
        </div>
      </header>
      <div className='divider w-full px-12 md:mx-auto md:w-10/12 before:bg-black after:bg-black before:h-[1px] after:h-[1px] mt-0'></div>
    </div>
  );
};
