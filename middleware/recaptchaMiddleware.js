// middleware/recaptchaMiddleware.js

import axios from 'axios';

const verifyRecaptcha = async (req, res, next) => {
  const formData = req.body;

  if (!formData.recaptchaToken) {
    return res.status(400).json({ error: 'reCAPTCHA token is missing' });
  }
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;

  const options = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  try {
    const response = await axios.post(
      verificationUrl,
      {
        secret: secretKey,
        response: formData.recaptchaToken,
      },
      options
    );
    const { success } = response.data;

    if (success) {
      next();
    } else {
      res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default verifyRecaptcha;
