import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div className='p-10 max-w-[80%] border font-sans text-gray-700'>
      <div>Quotation</div>
      <div>{testimonial.text}</div>
      <div>&#8212;&#8212; {testimonial.clientName}</div>
    </div>
  );
};

export default Testimonial;
