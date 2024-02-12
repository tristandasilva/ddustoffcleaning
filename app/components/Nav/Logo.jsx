import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ width, height }) => {
  return (
    <Link href='/'>
      <Image src='/logo-bg.png' width={width} height={height} alt='Logo' />
    </Link>
  );
};

export default Logo;
