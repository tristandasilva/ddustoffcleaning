import Navbar from '../components/Nav/Navbar';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import FaqLayout from './faq-components/FaqLayout';

export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center'>
        <FaqLayout />
      </div>
      <Footer showBackground={true} />
    </div>
  );
}
