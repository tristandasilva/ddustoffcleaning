import Footer from '../components/Footer';
import Navbar from '../components/navigation/Navbar';
import PageBanner from '../components/PageBanner';
import FormLayout from '../components/quotation/FormLayout';

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
