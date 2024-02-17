import React from 'react';
import Link from 'next/link';

const StyledButton = (props) => {
  return (
    <button
      type={props.type}
      className='styledBtn font-sans max-w-[80%] md:max-w-[50%]'
    >
      <Link href={props.path}>{props.text}</Link>
    </button>
  );
};

export default StyledButton;
