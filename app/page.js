import Navbar from './components/Nav/Navbar';
import AboutLayout from './components/layouts/AboutLayout';
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
      </div>
    </div>
  );
}
