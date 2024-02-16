import React from 'react';

const Faq = ({ faq }) => {
  return (
    <div>
      <h4 className='font-sans mb-3 text-[22px] text-darker-blue font-semibold'>
        {faq.question}
      </h4>
      <p className='font-sans text-paragraph-blue'>{faq.answer}</p>
    </div>
  );
};

export default Faq;
