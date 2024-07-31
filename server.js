// server.js
/*
var cors = require('cors')

require('dotenv').config(); // Ensure this is at the top of the file

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors())

// Configure body-parser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json())

// Serve static files
app.use(express.static(path.join(__dirname)));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS  // Use environment variable
    }
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Use environment variable
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.send('Message sent successfully');
    });
});




// Configure CORS to allow requests from your GitHub Pages domain
app.use(cors({
  origin: 'https://ayushkatiyar13.github.io'
}));

// Other middleware (e.g., bodyParser, static files)
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Define your routes
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/










const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Ensure this is at the top of the file

const app = express();

// Configure CORS to allow requests from your GitHub Pages domain
app.use(cors({
  origin: 'https://ayushkatiyar13.github.io'
}));

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Ensure these are set in your environment
        pass: process.env.EMAIL_PASS  // Ensure these are set in your environment
    }
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body);
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Ensure this is set correctly
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.send('Message sent successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


