import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
import AboutLayout from './components/layouts/AboutLayout';
import CtaLayout from './components/layouts/CtaLayout';
import HeroLayout from './components/layouts/HeroLayout';
import ServicesLayout from './components/layouts/ServicesLayout';
import TestimonialsLayout from './components/layouts/TestimonialsLayout';

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
