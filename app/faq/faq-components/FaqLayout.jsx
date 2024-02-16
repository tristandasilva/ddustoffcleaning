import React from 'react';
import FaqList from './FaqList';
import faqs from '../faqs';
import SectionTitle from '../../components/SectionTitle';

const FaqLayout = () => {
  return (
    <div className='h-full mx-[15px] md:mx-[200px] mt-12 my-16 flex flex-col justify-center align-middle'>
      <SectionTitle title='Frequently Asked Questions' />
      <FaqList faqs={faqs} />
    </div>
  );
};

export default FaqLayout;
