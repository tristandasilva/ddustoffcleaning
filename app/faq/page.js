import Navbar from '../components/Nav/Navbar';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import FaqLayout from './faq-components/FaqLayout';
import PageBanner from '../components/PageBanner';

export default function Faq() {
  return (
    <div>
      <Navbar />
      <PageBanner text='Frequently Asked Questions' />
      <div className='flex flex-col items-center'>
        <FaqLayout />
      </div>
      <Footer showBackground={true} />
    </div>
  );
}
