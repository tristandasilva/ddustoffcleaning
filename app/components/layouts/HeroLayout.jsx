import React from 'react';
import StyledButton from '../StyledButton';

const HeroLayout = () => {
  return (
    <div className='hero-section'>
      <div className='overlay'>
        <div className='md:ml-48 xl:ml-52 md:mr-0 mt-20 xl:mt-24 mx-6 text-center sm:text-start flex flex-col items-center sm:items-start max-w-[550px]'>
          <h1 className='text-[40px] md:text-[48px] xl:text-[50px] leading-tight uppercase'>
            The only cleaning service you&lsquo;ll need
          </h1>
          <p className='font-sans text-gray-700 text-[18px] mt-3 mb-8'>
            Providing a wide array of convenient cleaning services in the
            Ottawa-Gatineau area.
          </p>
          <StyledButton path='/quote' text='Request A Quote' />
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
