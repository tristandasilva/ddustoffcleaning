import React from 'react';
import StyledButton from '../StyledButton';

const CtaLayout = () => {
  return (
    <div className='cta mt-20 md:mt-28 md:mb-10 '>
      <div className='overlay'>
        <div className='p-5 md:p-0 flex flex-col h-full gap-10 justify-center items-center text-center'>
          <div className='text-[32px] text-black-blue uppercase font-medium'>
            Tell us how we can lighten <span className='italic'>your</span>{' '}
            load.
            <br></br>
            Request A Quote Today.
          </div>
          <StyledButton path='/quote' text='Visit Quotation Form' />
        </div>
      </div>
    </div>
  );
};

export default CtaLayout;
