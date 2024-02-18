import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';
import FaqLayout from './components/faqs/FaqLayout';
import PageBanner from './components/PageBanner';

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
