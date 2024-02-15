import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ service }) => {
  return (
    <div className='overflow-auto flex-shrink-0 w-full lg:max-w-[310px] h-full border'>
      <div>
        <Image
          src={service.image}
          alt='Service image'
          width={450}
          height={300}
          className='w-full'
        />
      </div>
      <div className='py-5 px-8 bg-[#EEF7FF] flex flex-col gap-2 text-center font-sans'>
        <h4 className='text-[18px] font-semibold'>{service.type}</h4>
        <p className=''>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
