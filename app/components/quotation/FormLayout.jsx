import React from 'react';
import QuotationForm from './QuotationForm';

const FormLayout = () => {
  return (
    <div className='h-full px-2 md:px-0 mx-[15px] md:mx-[150px] mb-24 flex flex-col justify-center align-middle'>
      <div className='form-container'>
        <QuotationForm />
      </div>
    </div>
  );
};

export default FormLayout;
