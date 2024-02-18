import React from 'react';

const Faq = ({ faq }) => {
  return (
    <div>
      <h4 className='font-sans mb-3 text-[18px] md:text-[22px] text-darker-blue font-semibold'>
        {faq.question}
      </h4>
      <p className='font-sans text-[15px] md:text-[16px] text-paragraph-blue'>
        {faq.answer}
      </p>
    </div>
  );
};

export default Faq;
