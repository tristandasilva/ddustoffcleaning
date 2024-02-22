import React from 'react';
import Image from 'next/image';

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-8'>
      <a target='_blank' href='mailto:ddustoffcleaning@gmail.com'>
        <Image
          src={'/email-icon.svg'}
          width={30}
          height={30}
          alt='Instagram icon'
        />
      </a>
      <a target='_blank' href='https://www.instagram.com/ddustoffcleaning/'>
        <Image
          src={'/ig-icon.svg'}
          width={30}
          height={30}
          alt='Instagram icon'
        />
      </a>

      <a target='_blank' href='https://www.facebook.com/Ddustoffcleaning/'>
        <Image
          src={'/fb-icon.svg'}
          width={30}
          height={30}
          alt='Instagram icon'
        />
      </a>
    </div>
  );
};

export default SocialLinks;
