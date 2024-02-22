'use client';

import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const TestimonialSlider = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  return (
    <div className='flex justify-center px-4 md:px-0'>
      <Testimonial testimonial={testimonials[currentTestimonialIndex]} />
    </div>
  );
};

export default TestimonialSlider;
