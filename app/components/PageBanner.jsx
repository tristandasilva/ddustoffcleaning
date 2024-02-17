import React from 'react';

const PageBanner = ({ text }) => {
  return (
    <div className='mt-7'>
      <div className='page-banner'>
        <div className='overlay'>
          <div className='flex justify-center items-center w-full h-full'>
            <h1 className='text-4xl uppercase'>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
