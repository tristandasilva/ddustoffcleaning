'use client';

import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const TestimonialSlider = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className='flex justify-center'>
      <Testimonial testimonial={testimonials[currentTestimonialIndex]} />
    </div>
  );
};

export default TestimonialSlider;
