import Navbar from './components/navigation/Navbar';
import HeroLayout from './components/layouts/HeroLayout';
import AboutLayout from './components/layouts/AboutLayout';
import ServicesLayout from './components/layouts/ServicesLayout';
import TestimonialsLayout from './components/layouts/TestimonialsLayout';
import CtaLayout from './components/layouts/CtaLayout';
import Footer from './components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/menu-icon.svg' />
      </Head>
      <div>
        <div>
          <Navbar />
          <HeroLayout />
          <AboutLayout />
          <ServicesLayout />
          <TestimonialsLayout />
          <CtaLayout />
          <Footer showBackground={false} />
        </div>
      </div>
    </>
  );
}
