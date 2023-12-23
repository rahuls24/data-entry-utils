import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  showNavigationArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNavigationArrow }) => {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='flex items-center justify-between'>
        {showNavigationArrow && (
          <Link href='/'>
            <div className='text-white'>
              <svg
                className='w-6 h-6 mr-2 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M18 11H4.83l5.59-5.59L10 4l-8 8 8 8 1.41-1.41L4.83 13H18v-2z' />
              </svg>
            </div>
          </Link>
        )}

        <div className='text-center flex-grow'>
          <h1 className='text-2xl font-bold'>Data Entry Helper</h1>
        </div>

        {/* You can add other header content here if needed */}
      </div>
    </header>
  );
};

export default Header;
