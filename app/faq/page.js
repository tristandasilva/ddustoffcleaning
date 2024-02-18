import Navbar from '../components/nav/Navbar';
import PageBanner from '../components/PageBanner';
import FaqLayout from '../components/faqs/FaqLayout';
import Footer from '../components/Footer';

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
