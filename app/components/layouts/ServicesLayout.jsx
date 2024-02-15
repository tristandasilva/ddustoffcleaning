import React from 'react';
import ServiceCardList from '../Services/ServiceCardList';
import services from '../Services/services';
import SectionTitle from '../SectionTitle';

const ServicesLayout = () => {
  return (
    <div className='service-section h-full my-[50px] md:my-[150px] mx-[15px] md:mx-[100px] flex flex-col justify-center align-middle'>
      <SectionTitle title='Services We Offer' />
      <ServiceCardList services={services} />
    </div>
  );
};

export default ServicesLayout;
