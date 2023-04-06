import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: true,
});

const EMAIL_TO = process.env.EMAIL_TO;

const getMessageHtml = (confirmationMessage, data) => `
  <div style="background-color: #f2f2f2; border: 1px solid #ccc; border-radius: 10px; padding: 20px; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
    <p style="font-size: 20px; font-weight: bold; margin-top: 0;">${confirmationMessage}</p>
    <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;" />
    <p style="margin-bottom: 10px;"><strong>Name:</strong> ${data.name}</p>
    <p style="margin-bottom: 10px;"><strong>Email:</strong> ${data.email}</p>
    <p style="margin-bottom: 20px;"><strong>Message:</strong> ${data.message}</p>
    <p style="font-size: 12px; color: #666; margin-bottom: 0;">This message was sent from the contact form on www.oezer.me</p>
  </div>
`;

export default async function handler(req, res) {
  const messages = [    {      to: req.body.email,      subject: 'Message Received',      body: getMessageHtml('Thank you for contacting us. We have received your message and will get back to you shortly.', req.body),    },    {      to: EMAIL_TO,      subject: 'New Contact Message',      body: getMessageHtml('A new message has been received through the contact form on your website.', req.body),    },  ];

  try {
    await Promise.all(
      messages.map((message) =>
        transporter.sendMail({
          from: process.env.SMTP_USERNAME,
          to: message.to,
          subject: message.subject,
          html: message.body,
        })
      )
    );

    res.status(200).send(`
      <p>Thanks for your submission!</p>
      <form action="/contact" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>

        <label for="message">Message:</label>
        <textarea name="message" id="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending message');
  }
}
