import React from 'react';
import FaqList from './FaqList';
import faqs from './faqs';

const FaqLayout = () => {
  return (
    <div className='h-full mx-[30px] md:mx-[200px] mb-16 flex flex-col justify-center align-middle'>
      <FaqList faqs={faqs} />
    </div>
  );
};

export default FaqLayout;
