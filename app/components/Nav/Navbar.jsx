import React from 'react';
import Logo from './Logo';
import Dropdown from './DropdownMenu/Dropdown';
import DropdownItemList from './DropdownMenu/DropdownItemList';
import { dropdownItems } from './DropdownMenu/dropdownItems';

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[80%] flex justify-between items-center mx-auto mt-3'>
        <div>
          <Logo width={150} height={150} />
        </div>
        <div>
          <ul className='flex absolute md:static md:gap-7 mt-[-100%] md:mt-[inherit]'>
            <DropdownItemList dropdownItems={dropdownItems} />
          </ul>
        </div>
        <div className='md:absolute md:hidden'>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
