import React from 'react';
import StyledButton from '../StyledButton';

const CtaLayout = () => {
  return (
    <div className='p-16 mt-28 mb-6 bg-[#eef7ffd7] flex flex-col gap-10 justify-center items-center text-center border'>
      <div className='text-[32px] text-black-blue uppercase font-semibold'>
        Tell us how we can lighten <span className='italic'>your</span> load.
        <br></br>
        Request A Quote Today.
      </div>
      <StyledButton path='/quote' text='Visit Quotation Form' />
    </div>
  );
};

export default CtaLayout;
