import React from 'react';
import Logo from './Logo';
import Dropdown from './DropdownMenu/Dropdown';
import DropdownItemList from './DropdownMenu/DropdownItemList';
import { dropdownItems } from './DropdownMenu/dropdownItems';

const Navbar = () => {
  return (
    <div className='w-full z-50'>
      <div className='max-w-[90%] flex justify-between items-center mx-auto my-4'>
        <div>
          <Logo width={130} height={130} />
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
