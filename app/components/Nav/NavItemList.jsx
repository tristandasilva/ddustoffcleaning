import React from 'react';
import Link from 'next/link';

const NavItemList = ({ navItems }) => {
  return navItems.map((item) => (
    <li
      className='px-1 hover:border-b-2 hover:border-darker-blue hover:-mb-[2px] transition-all'
      key={item.text}
    >
      <Link href={item.path}>{item.text}</Link>
    </li>
  ));
};

export default NavItemList;
