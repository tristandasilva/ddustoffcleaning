import React from 'react';
import Faq from './Faq';

const FaqList = ({ faqs }) => {
  return (
    <div className='flex flex-col gap-16 mt-6 mb-12'>
      {faqs.map((faq, index) => (
        <Faq key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FaqList;
