import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = ({ showBackground }) => {
  return showBackground ? (
    <div className="footer-text text-center text-[14px] md:text-[15px] tracking-wider flex flex-col items-center gap-8 p-10 bg-[url('/footer-bg.png')] border">
      <SocialLinks />
      <p>© Copyright DDust Off Cleaning Inc. 2024</p>
    </div>
  ) : (
    <div className='footer-text text-center text-[14px] md:text-[15px] tracking-wider flex flex-col items-center gap-8 p-6 text-slate-700'>
      <SocialLinks />
      <p>© Copyright DDust Off Cleaning Inc. 2024</p>
    </div>
  );
};

export default Footer;
