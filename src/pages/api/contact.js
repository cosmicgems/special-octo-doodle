import sgMail from '@sendgrid/mail';
import connectDB from '../../../lib/connectDB'
import Message from '../../../lib/models/contact';
import nodemailer from 'nodemailer'

const { SENDGRID_API_KEY, EMAIL_TO } = process.env;

function isValidPhoneNumber(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handleData(req, res) {
  if (req.method === 'POST') {
    
    console.log(req.body);
    const { name, email, phone, message} = req.body;
    // Validate form fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!isValidPhoneNumber(phone)) {
      return res.status(400).json({ message: 'Invalid phone number.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address.' });
    }

    // Additional validation for name and message fields
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({ message: 'Name must be between 2 and 100 characters.' });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({ message: 'Message must be between 10 and 1000 characters.' });
    }

    try {
      // Store data in MongoDB
      await connectDB();
      const form = new Message({
        name,
        email,
        phone,
        message,
      });
      await form.save();

      
        // const transporter = nodemailer.createTransport({
        //     service: 'Gmail', // e.g., 'Gmail', 'Outlook', etc.
        //     auth: {
        //     user: EMAIL_TO,
        //     pass: EMAIL_PASSWORD,
        //     },
        // });

        // const mailOptions = {
        //     from: email,
        //     to: EMAIL_TO,
        //     subject: 'Looks Like Someone Wants to Work w/You!',
        //     text: `You received a new message from ${name}.\n\nPhone Number: ${phone}\n\nMessage: ${message}`,
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //   if (error) {
        //     console.error('Error:', error);
        //   } else {
        //     console.log('Email sent:', info.response);
        //   }
        // });

        
      sgMail.setApiKey(SENDGRID_API_KEY);

      const msg = {
        to: EMAIL_TO, // Change this to the recipient's email address
        from: 'maliekjdavis24@gmail.com',
        subject: 'Looks Like Someone Wants to Work w/You!',
        text: `You have received a new message from ${name}.\n\nPhone Number: ${phone}\n\nEmail: ${email}\n\nMessage: ${message}`,
      };
      console.log(msg);

      const messageSent =  await sgMail.send(msg);
      console.log(messageSent);
      

      res.status(200).json({ message: 'Data stored and notification sent successfully.' }, messageSent);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred while handling the data.' });
    }
  } else {
    res.status(404).json({ message: 'Invalid request method.' });
  }
}
