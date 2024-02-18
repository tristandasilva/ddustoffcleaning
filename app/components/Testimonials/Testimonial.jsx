import React from 'react';
import Image from 'next/image';

const Testimonial = ({ testimonial }) => {
  return (
    <div className='p-8 md:p-10 md:max-w-[90%] 2xl:max-w-[80%] font-sans text-gray-700 border-slate-600 dropShadow'>
      <div className='-pr-4'>
        <Image
          src={'/quotation.svg'}
          alt='Quotation mark'
          width={80}
          height={80}
        />
      </div>
      <div className='flex justify-center -mt-7 transition-all'>
        <div className='flex flex-col gap-4 max-w-[90%]'>
          <div className='md:text-[17px]'>{testimonial.text}</div>
          <div className='text-[15px] font-bold text-darker-blue'>
            &#8212;&#8212; {testimonial.clientName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
