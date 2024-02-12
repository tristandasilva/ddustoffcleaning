import React from 'react';
import Link from 'next/link';

const DropdownItemList = ({ dropdownItems }) => {
  return dropdownItems.map((item) => (
    <li key={item.text}>
      <Link href={item.path}>{item.text}</Link>
    </li>
  ));
};

export default DropdownItemList;
