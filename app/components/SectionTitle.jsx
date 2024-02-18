import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <h2 className='boxShad uppercase w-auto text-center text-black-blue font-regular self-center px-5 mb-8 md:mb-16'>
      {title}
    </h2>
  );
};

export default SectionTitle;
