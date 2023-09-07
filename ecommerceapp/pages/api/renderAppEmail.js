import EmailTemplate from './appEmail';
import { renderEmail } from 'react-html-email';
require('dotenv').config();

const nodemailer = require('nodemailer');
const emailConfig = {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

export default async function handler(req, res) {
  try {
    const {
      appDate,
      appTime,
      email,
      firstName,
      lastName,
      phone,
      ring,
      storeLocation,
    } = req.body;

    const emailInstance = (
      <EmailTemplate
        appDate={appDate}
        appTime={appTime}
        email={email}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        ring={ring}
        storeLocation={storeLocation}
      />
    );

    const emailHTML = renderEmail(emailInstance);

    const mailOptions = {
      from: emailConfig.user,
      to: email,
      subject: 'Appointment Confirmation',
      html: emailHTML,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
