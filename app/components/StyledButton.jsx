import React from 'react';
import Link from 'next/link';

const StyledButton = (props) => {
  return (
    <button className='styledBtn font-sans max-w-[50%]'>
      <Link href={props.path}>{props.text}</Link>
    </button>
  );
};

export default StyledButton;
