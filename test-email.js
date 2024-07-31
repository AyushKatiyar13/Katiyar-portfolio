const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.EMAIL_USER,   // Receiver address (same as sender for testing)
    subject: 'Test Email',
    text: 'This is a test email from Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
