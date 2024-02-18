import React from 'react';

const Footer = ({ showBackground }) => {
  return showBackground ? (
    <div className="footer-text text-center text-[14px] md:text-[15px] tracking-wider flex flex-col gap-2 p-8 bg-[url('/footer-bg.png')] border">
      <a href='mailto:ddustoffcleaning@gmail.com'>ddustoffcleaning@gmail.com</a>
      <p>+1 (613) 800-2067</p>
      <p>© Copyright DDust Off Cleaning Inc. 2024</p>
    </div>
  ) : (
    <div className='footer-text text-center text-[14px] md:text-[15px] tracking-wider flex flex-col gap-2 p-8 text-slate-700'>
      <a href='mailto:ddustoffcleaning@gmail.com'>ddustoffcleaning@gmail.com</a>
      <p>+1 (613) 800-2067</p>
      <p>© Copyright DDust Off Cleaning Inc. 2024</p>
    </div>
  );
};

export default Footer;
