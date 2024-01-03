import mail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = await req.body;

    const message = `
      Name: ${body?.name}\r\n
      Phone Number: ${body?.phoneNumber}\r\n
      Email: ${body?.email}\r\n
      Message: ${body?.details}
    `;

    const data = {
      to: 'adam@vancouverventcleaning.ca',
      from: 'no-reply@vancouverventcleaning.ca',
      replyTo: body?.email,
      subject: 'A New Quote Request Has Arrived!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };

    try {
      await mail.send(data);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}