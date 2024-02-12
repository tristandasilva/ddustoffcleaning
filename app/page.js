import Navbar from './components/Nav/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div className='hero-section'>
          <div className='overlay'>
            <div className='pl-48 pt-20'>
              <h1 className='text-[48px] max-w-[550px]'>
                The only cleaning service you&lsquo;ll need
              </h1>
              <p className='font-sans max-w-[400px] text-gray-700 text-[18px] mt-1 mb-6'>
                Providing a wide array of convenient cleaning services in the
                Ottawa-Gatineau area.
              </p>
              <button>
                <Link href='/quote'>Request A Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
