'use client';

import React from 'react';
import SectionTitle from '../SectionTitle';
import testimonials from '../Testimonials/testimonials';
import TestimonialSlider from '../Testimonials/TestimonialSlider';

const TestimonialsLayout = () => {
  return (
    <div className='h-full flex flex-col justify-center align-middle mx-[15px] md:mx-[100px] mb-10'>
      <SectionTitle title='What Clients Are Saying' />
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsLayout;
