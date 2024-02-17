/* eslint-disable import/no-anonymous-default-export */
// pages/api/sendEmail

import nodemailer from 'nodemailer';
import verifyRecaptcha from '@/middleware/recaptchaMiddleware';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const formData = req.body;
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'catstestingdev@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: 'DDust Website',
        to: `tristan.dasilva98@gmail.com`,
        subject: `New Quote Request`,
        html: `<div>
        <p><strong>First name: </strong> ${formData.firstName}</p>
        <p><strong>Last name: </strong> ${formData.lastName}</p>
        <p><strong>Email: </strong> ${formData.email}</p>
        <p><strong>Phone: </strong> ${formData.phoneNumber}</p>
        <p><strong>Address: </strong> ${formData.address}</p>
        <p><strong>Service requested: </strong> ${formData.serviceRequested}</p>
        <p><strong>Num. bathrooms: </strong> ${formData.numBathrooms}</p>
        <p><strong>Num. bedrooms: </strong> ${formData.numBedrooms}</p>
        <p><strong>Pets: </strong> ${formData.hasPets} </p>
        <p><strong>Residence type: </strong> ${formData.residenceType}</p>
        <p><strong>Square ft.: </strong> ${formData.squareFootage}</p>
        <p><strong>Percentage carpet: </strong> ${formData.carpetPercentage}</p>
        <p><strong>Additional notes: </strong> ${formData.additionalNotes}</p>
      </div>`,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
};

export default function (req, res) {
  verifyRecaptcha(req, res, () => {
    handler(req, res); // Pass control to the route handler
  });
}
