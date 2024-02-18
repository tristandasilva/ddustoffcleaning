import React from 'react';
import StyledButton from '../StyledButton';

const HeroLayout = () => {
  return (
    <div className='hero-section'>
      <div className='overlay'>
        <div className='ml-0 md:ml-[10%] 2xl:ml-0 flex h-full items-center 2xl:justify-center'>
          <div className='hero-content 2xl:text-center flex flex-col 2xl:items-center 2xl:gap-2 max-w-[550px] 2xl:max-w-[800px]'>
            <h1 className='text-[38px] md:text-[48px] xl:text-[50px] 2xl:text-[54px] font-regular leading-tight uppercase'>
              The only cleaning service you&lsquo;ll need
            </h1>
            <p className='font-sans text-gray-700 text-[16px] mt-3 mb-8 2xl:max-w-[550px]'>
              Providing a wide array of convenient cleaning services in the
              Ottawa-Gatineau area.
            </p>
            <StyledButton path='/quote' text='Request A Quote' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
