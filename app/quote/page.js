import Footer from '../components/Footer';
import Navbar from '../components/Nav/Navbar';
import SectionTitle from '../components/SectionTitle';
import FormLayout from './quote-components/FormLayout';

export default function Quote() {
  return (
    <div>
      <div>
        <Navbar />
        <FormLayout />
      </div>
      <Footer showBackground={true} />
    </div>
  );
}
