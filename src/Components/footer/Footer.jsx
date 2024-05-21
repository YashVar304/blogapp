import React from 'react';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className='bg-white border-y'>
      <div className='w-full max-w-screen-xl mx-auto p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div>
            <a href="/">
              <Logo width='24rem'/>
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900'>RESOURCES</h2>
              <ul className='text-gray-600 font-medium'>
                <li className='mb-4'>
                  <a href="/" className='hover:underline'>Home</a>
                </li>
                <li>
                  <a href="/about" className='hover:underline'>About</a>
                </li>
              </ul>
            </div>
            <div className=''>
              <h2 className='mb-6 text-sm font-semibold text-gray-900'>FOLLOW US</h2>
              <ul className='text-gray-600 font-medium'>
                <li className='mb-4'>
                  <a href="https://github.com/yourusername" className='hover:underline'>GitHub</a>
                </li>
                <li>
                  <a href="https://discord.com/" className='hover:underline'>Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900'>LEGAL</h2>
              <ul className='text-gray-600 font-medium'>
                <li className='mb-4'>
                  <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className='hover:underline'>Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8'/>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a href="https://hiteshchoudhary.com/" className="hover:underline">yashvarshney</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="https://facebook.com/" className="text-gray-500 hover:text-gray-900">
              {/* Facebook icon */}
            </a>
            {/* Other social media links */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
