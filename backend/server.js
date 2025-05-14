import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import { createServer } from 'net';

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Function to find an available port
const findAvailablePort = async (startPort) => {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Port is in use, try the next port
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
      }
    });
    server.listen(startPort, () => {
      server.close(() => {
        resolve(startPort);
      });
    });
  });
};

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log('Error verifying email transporter:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Dear ${name},</p>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Ameer Hamza</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server with dynamic port
const startServer = async () => {
  try {
    const defaultPort = parseInt(process.env.PORT) || 5000;
    const port = await findAvailablePort(defaultPort);
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      // Update the frontend API URL if needed
      if (port !== defaultPort) {
        console.log(`Note: Frontend API URL should be updated to use port ${port}`);
      }
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer(); 