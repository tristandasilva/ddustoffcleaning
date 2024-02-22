import React from 'react';
import Link from 'next/link';

const StyledButton = (props) => {
  return (
    <Link href={props.path}>
      <button type={props.type} className='styledBtn font-sans max-w-[100%]'>
        {props.text}
      </button>
    </Link>
  );
};

export default StyledButton;
