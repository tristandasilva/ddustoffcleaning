import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='container flex justify-between items-center mx-auto mt-3'>
        <Logo width={150} height={150} />
        <ul className='flex gap-7 mt-[-100%] md:mt-[inherit]'>
          <li>
            <Link href='#about'>About</Link>
          </li>
          <li>
            <Link href='#services'>Services</Link>
          </li>
          <li>
            <Link href='/quote'>Request A Quote</Link>
          </li>
          <li>
            <Link href='#contact'>Contact</Link>
          </li>
          <li>
            <Link href='/faq'>FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
