'use client';

import { useEffect, useState } from 'react';
import services from '@/app/components/Services/services';
import ReCAPTCHA from 'react-google-recaptcha';

const QuotationForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [requestVerificationText, setRequestVerificationText] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    serviceRequested: '',
    numBathrooms: '',
    numBedrooms: '',
    hasPets: '',
    residenceType: '',
    squareFootage: '',
    carpetPercentage: '',
    additionalNotes: '',
  });

  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      serviceRequested: '',
      numBathrooms: '',
      numBedrooms: '',
      hasPets: '',
      residenceType: '',
      squareFootage: '',
      carpetPercentage: '',
      additionalNotes: '',
      recaptchaToken: '',
    });
  };

  useEffect(() => {
    // Update formData whenever recaptchaToken changes
    setFormData((prevFormData) => ({
      ...prevFormData,
      recaptchaToken: recaptchaToken,
    }));
  }, [recaptchaToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const siteKey = '6LeK7nUpAAAAAOc-mMIo5LlRKrpDD3LTCSpySe_f';
  const handleRecaptchaChange = (token) => {
    setIsVerified(true);
    setRecaptchaToken(() => {
      return token;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isVerified) {
      setRequestVerificationText('');
      setSending(true);
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setFormSent(true);
          clearForm();
        } else {
          alert('Failed to send email. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
      setSending(false);
    } else {
      setRequestVerificationText('Please verify that you are not a robot.');
    }
  };

  return (
    // Start Row
    <form onSubmit={handleSubmit} className='font-sans text-paragraph-blue'>
      <div className='form-row'>
        <label>
          First Name:*
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:*
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {/* End Row */}

      {/* Start Row */}
      <div className='form-row'>
        <label>
          Email Address:*
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:*
          <input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {/* End Row */}

      {/* Start Row */}
      <label className='form-row'>
        Street Address and Postal Code:*
        <input
          type='text'
          name='address'
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      {/* End Row */}

      {/* Start Row */}
      <div className='form-row'>
        <label>
          Type of Service Requested:*
          <select
            name='serviceRequested'
            value={formData.serviceRequested}
            onChange={handleChange}
            required
          >
            <option value=''>Select</option>
            {services.map(({ type, index }) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Number of Bathrooms:*
          <select
            name='numBathrooms'
            value={formData.numBathrooms}
            onChange={handleChange}
            required
          >
            <option value=''>Select</option>
            {[1, 2, 3, 4, 5].map((num) =>
              num != 5 ? (
                <option key={num} value={num}>
                  {num}
                </option>
              ) : (
                <option key={num} value={num}>
                  {num}+
                </option>
              )
            )}
          </select>
        </label>
        <label>
          Number of Bedrooms:*
          <select
            name='numBedrooms'
            value={formData.numBedrooms}
            onChange={handleChange}
            required
          >
            <option value=''>Select</option>
            {[1, 2, 3, 4, 5].map((num) =>
              num != 5 ? (
                <option key={num} value={num}>
                  {num}
                </option>
              ) : (
                <option key={num} value={num}>
                  {num}+
                </option>
              )
            )}
          </select>
        </label>
      </div>
      {/* End Row */}

      {/* Start Row */}
      <div className='form-row mt-10'>
        <label>
          Do you have any pets?*
          <label className='mt-2'>
            <input
              type='radio'
              name='hasPets'
              value='Yes'
              checked={formData.hasPets === 'Yes'}
              onChange={handleChange}
              required
            />{' '}
            Yes
          </label>
          <label>
            <input
              type='radio'
              name='hasPets'
              value='No'
              checked={formData.hasPets === 'No'}
              onChange={handleChange}
              required
            />{' '}
            No
          </label>
        </label>
        <label>
          What type of lodgment do you reside in?*
          <div className='flex flex-col md:flex-row md:gap-10 mt-2'>
            <div>
              <label>
                <input
                  type='radio'
                  name='residenceType'
                  value='House'
                  checked={formData.residenceType === 'House'}
                  onChange={handleChange}
                />{' '}
                House
              </label>
              <label>
                <input
                  type='radio'
                  name='residenceType'
                  value='Apartment/Condo'
                  checked={formData.residenceType === 'Apartment/Condo'}
                  onChange={handleChange}
                />{' '}
                Apartment/Condo
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio'
                  name='residenceType'
                  value='Townhouse'
                  checked={formData.residenceType === 'Townhouse'}
                  onChange={handleChange}
                />{' '}
                Townhouse
              </label>
              <label>
                <input
                  type='radio'
                  name='residenceType'
                  value='Other'
                  checked={formData.residenceType === 'Other'}
                  onChange={handleChange}
                />{' '}
                Other
              </label>
            </div>
          </div>
        </label>
      </div>
      {/* End Row */}

      {/* Start Row */}
      <div className='form-row'>
        <label>
          Approximate Square Footage:*
          <input
            type='number'
            name='squareFootage'
            value={formData.squareFootage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Approximate Percentage Carpet:*
          <input
            type='number'
            name='carpetPercentage'
            value={formData.carpetPercentage}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {/* End Row */}

      <label>
        Additional Notes:
        <textarea
          name='additionalNotes'
          value={formData.additionalNotes}
          onChange={handleChange}
        ></textarea>
      </label>
      <div className='mt-5 flex flex-col gap-2'>
        <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />
        <p className='text-red-600'>{requestVerificationText}</p>
      </div>
      {sending ? (
        <div className='sending'>Sending request...</div>
      ) : formSent ? (
        <div className='form-sent'>
          Request sent! We will be in touch with you shortly, thank you.
        </div>
      ) : (
        <button type='submit' className='w-full md:w-auto'>
          Submit
        </button>
      )}
    </form>
  );
};

export default QuotationForm;
