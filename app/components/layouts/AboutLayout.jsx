import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutLayout = () => {
  return (
    <div id='about' className='my-[100px] px-[25px] md:px-[100px] mt-20'>
      <div className='flex gap-10 lg:gap-28 flex-col lg:flex-row justify-between lg:justify-center items-center'>
        <div className='flex-shrink-0'>
          <Image
            src={'/about-img.png'}
            width={475}
            height={475}
            alt='About image'
          />
        </div>
        <div className='max-w-[550px] flex-shrink text-center md:text-left'>
          <h3 className='text-[32px]'>
            A family owned business, cleaning with love.
          </h3>
          <p className='text-[18px] font-sans font-light mt-4 mb-5'>
            DDust Off Cleaning is a rapidly growing family owned business. We
            live by the motto &quot;if you&lsquo;re happy, I&lsquo;m happy&quot;
            — this is why we offer free in-home consultations which allows us to
            fully understand your cleaning and organizational needs, so that we
            can provide a solution that best suits your necessities.
          </p>
          <Link
            href='#services-section'
            className='font-sans font-medium text-blue-500'
          >
            See our services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
