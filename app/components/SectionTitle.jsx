import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <h2 className='boxShad uppercase text-[32px] w-auto text-center self-center px-5 mb-8 md:mb-16'>
      {title}
    </h2>
  );
};

export default SectionTitle;
