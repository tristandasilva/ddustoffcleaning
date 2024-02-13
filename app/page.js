import Navbar from './components/Nav/Navbar';
import Link from 'next/link';
import StyledButton from './components/StyledButton';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div className='hero-section'>
          <div className='overlay'>
            <div className='md:ml-48 xl:ml-52 md:mr-0 mt-20 xl:mt-24 mx-5 text-center sm:text-start flex flex-col items-center sm:items-start max-w-[550px]'>
              <h1 className='text-[48px] xl:text-[52px] leading-tight'>
                The only cleaning service you&lsquo;ll need
              </h1>
              <p className='font-sans text-gray-700 text-[18px] mt-3 mb-8'>
                Providing a wide array of convenient cleaning services in the
                Ottawa-Gatineau area.
              </p>
              <StyledButton path='/quote' text='Request A Quote' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
