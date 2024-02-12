'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { dropdownItems } from './dropdownItems';
import DropdownItemList from './DropdownItemList';

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
      {!isOpen && (
        <div className='absolute border p-5 right-3 rounded'>
          <ul className='flex flex-col gap-3'>
            <DropdownItemList dropdownItems={dropdownItems} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
