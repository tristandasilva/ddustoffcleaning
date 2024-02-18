import Navbar from './components/nav/Navbar';
import HeroLayout from './components/layouts/HeroLayout';
import AboutLayout from './components/layouts/AboutLayout';
import ServicesLayout from './components/layouts/ServicesLayout';
import TestimonialsLayout from './components/layouts/TestimonialsLayout';
import CtaLayout from './components/layouts/CtaLayout';
import Footer from './components/Footer';

export default function Home() {
  return (
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
  );
}
