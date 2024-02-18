import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCardList = ({ services }) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-4 md:gap-8 overflow-hidden'>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceCardList;
