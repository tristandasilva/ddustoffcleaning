import React from 'react';
import SectionTitle from '@/app/components/SectionTitle';
import FaqList from '@/app/faq/faq-components/FaqList';
import QuotationForm from './QuotationForm';

const FormLayout = () => {
  return (
    <div className='h-full mx-[15px] md:mx-[150px] mt-12 mb-24 flex flex-col justify-center align-middle'>
      <SectionTitle title='Request A Quote' />
      <div className='form-container'>
        <QuotationForm />
      </div>
    </div>
  );
};

export default FormLayout;
