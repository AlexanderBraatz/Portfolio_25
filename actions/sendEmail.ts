'use server';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
const senderEmail = formData.get('senderEmail');
const message = formData.get('message');

if (!validateString(senderEmail, 500)){
    return {error:"Invalid sender email"}
}
if (!validateString(message, 5000)){
    return {error:"Invalid sender message"}
}

console.log(senderEmail)
console.log(message)

try {
    await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'alex_braatz@icloud.com',
    subject: 'message from contact form',
    reply_to: senderEmail as string, // we have made sure its a sting but TS cant follow our logic 
    text: message as string + " sent to you from: " + senderEmail as string
	});
} catch(error : unknown) {
console.log(getErrorMessage(error))
   return { error : getErrorMessage(error)}

}
};
