/* eslint-disable react/jsx-key */
import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCardList = ({ services }) => {
  return (
    <div className='flex flex-wrap mt-16 justify-center gap-12 overflow-hidden'>
      {services.map((service) => (
        <ServiceCard service={service} />
      ))}
    </div>
  );
};

export default ServiceCardList;
