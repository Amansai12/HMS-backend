
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saiaman88888@gmail.com',
    pass: 'qvwp qpts fisi ansl', 
  },
});

// Email sending function
const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: '"Hostelio" <saiaman88888@gmail.com>',
      to,
      subject,
      text, // plain text
      html, // HTML version (optional)
    });
    
  } catch (error) {
    console.error('Email failed:', error);
  }
};

module.exports = sendEmail;