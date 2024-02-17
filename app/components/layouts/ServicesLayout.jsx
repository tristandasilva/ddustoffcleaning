import React from 'react';
import ServiceCardList from '../Services/ServiceCardList';
import services from '../Services/services';
import SectionTitle from '../SectionTitle';

const ServicesLayout = () => {
  return (
    <div
      id='services'
      className='h-full my-[50px] md:my-[150px] mx-[20px] xl:mx-[100px] 2xl:mx-[200px] flex flex-col justify-center align-middle'
    >
      <SectionTitle title='Services We Offer' />
      <ServiceCardList services={services} />
    </div>
  );
};

export default ServicesLayout;
