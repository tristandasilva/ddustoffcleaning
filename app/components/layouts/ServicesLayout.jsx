import React from 'react';
import ServiceCardList from '../Services/ServiceCardList';
import services from '../Services/services';

const ServicesLayout = () => {
  return (
    <div className='h-full my-[150px] mx-[100px] flex flex-col justify-center align-middle'>
      <h2 className='boxShad text-[32px] w-auto text-center leading-[10px] self-center px-5'>
        Services We Offer
      </h2>
      <ServiceCardList services={services} />
    </div>
  );
};

export default ServicesLayout;
