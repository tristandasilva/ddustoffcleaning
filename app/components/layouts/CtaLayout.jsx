import React from 'react';
import StyledButton from '../StyledButton';

const CtaLayout = () => {
  return (
    <div className='cta mt-28 mb-8'>
      <div className='overlay'>
        <div className='flex flex-col h-full gap-10 justify-center items-center text-center'>
          <div className='text-[32px] text-black-blue uppercase font-semibold'>
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
