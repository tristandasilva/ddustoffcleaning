import Footer from '../components/Footer';
import Navbar from '../components/Nav/Navbar';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import FormLayout from './quote-components/FormLayout';

export default function Quote() {
  return (
    <div>
      <div>
        <Navbar />
        <PageBanner text='Request A Quote' />
        <FormLayout />
      </div>
      <Footer showBackground={true} />
    </div>
  );
}
