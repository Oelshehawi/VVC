'use server';
import { z } from 'zod';
var postmark = require('postmark');

export const sendEmail = async (formData: FormData) => {
  const formDataObject = {
    name: formData.get('name'),
    email: formData.get('email'),
    number: formData.get('number'),
    details: formData.get('details'),
  };

  const formSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: 'Email is Invalid' }),
    number: z.string().min(1, { message: 'Number is required' }),
    details: z.string().min(1, { message: 'Details are required' }),
  });

  const requiredSchema = formSchema.partial().required();
  const result = requiredSchema.safeParse(formDataObject);

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((error) => error.message)
      .join('\n');
    return { message: `${errorMessages}` };
  }

  let { name, email, number, details } = result.data;
  let client = new postmark.ServerClient(process.env.POSTMARK_API_KEY as string);

  try {
    await client.sendEmailWithTemplate({
      From: 'adam@vancouverventcleaning.ca',
      To: 'adam@vancouverventcleaning.ca',
      TemplateAlias: 'estimate-email',
      TemplateModel: {
        name: name ? (name as string) : 'No name provided',
        email: email ? (email as string) : 'No email provided',
        number: number ? (number as string) : 'No number provided',
        details: details ? (details as string) : 'No details provided',
      },
      MessageStream: 'client-website-emails',
      ReplyTo: email as string,
    });
    return { message: 'Email sent successfully' };
  } catch (error) {
    return { message: 'Failed to send Email' };
  }
}; 