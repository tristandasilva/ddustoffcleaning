import React from 'react';

const PageBanner = ({ text }) => {
  return (
    <div className='mt-7'>
      <div className='page-banner'>
        <div className='overlay'>
          <div className='flex justify-center items-center w-full h-full'>
            <h1 className='text-2xl md:text-4xl text-black-blue tracking-normal uppercase px-2'>
              {text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
