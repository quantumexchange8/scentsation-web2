const express = require("express");
const axios = require('axios');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const secretKey = process.env.RECAPTCHA_SECRET_KEY;

const app = express();
app.use(bodyParser.json());
// Middleware
app.use(cors());

const verifyRecaptcha = async (token) => {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );
    // If reCAPTCHA validation is successful and the score is above threshold
    return response.data.success;
    };    

// Configure Nodemailer with Mailtrap
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Route to send email
app.post("/contact-us", async (req, res) => {
  const { recaptchaToken, name, email, userType, message } = req.body;
  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
  }
  // Debugging incoming data
  console.log("Received data:", req.body);

  const mailOptions = {
    from: process.env.EMAIL_FROM, // Sender's email
    to: process.env.EMAIL_TO, // Receiver's email
    subject: "New Contact Form Submission from Scentsation Website",
    text: `Name: ${name}\nEmail: ${email}\nUser Type: ${userType}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      return res.status(500).json({ error: error.message });
    }
    console.log("Email sent:", info); // Log successful email info
    res.status(200).json({ message: "Email sent successfully" });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
