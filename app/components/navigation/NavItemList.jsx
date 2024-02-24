import React from 'react';

const NavItemList = ({ navItems }) => {
  return navItems.map((item) => (
    <li
      className='px-1 hover:border-b-2 hover:border-darker-blue hover:-mb-[2px] transition-all'
      key={item.text}
    >
      <a href={item.path}>{item.text}</a>
    </li>
  ));
};

export default NavItemList;
