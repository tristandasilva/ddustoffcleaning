'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import NavItemList from './NavItemList';
import navItems from './navItems';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        <Image
          src='/menu-icon.svg'
          width={30}
          height={30}
          alt='Menu icon'
        ></Image>
      </button>
      {isOpen && (
        <div className='absolute border px-4 h-[220px] right-3 rounded z-50 bg-[#d2f2fa] uppercase'>
          <ul className='flex flex-col h-full justify-evenly items-center'>
            <NavItemList navItems={navItems} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
