
'use server';
/**
 * @fileOverview A flow for sending membership application emails.
 *
 * - sendMembershipEmail - A function that handles the membership application process.
 * - MembershipApplicationInput - The input type for the sendMembershipEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MembershipApplicationSchema = z.object({
  fullName: z.string().describe('The full name of the applicant.'),
  email: z.string().email().describe('The email address of the applicant.'),
  phone: z.string().describe('The phone number of the applicant.'),
  address: z.string().describe('The full address of the applicant.'),
  membershipType: z.enum(['annual', 'lifetime']).describe('The type of membership applied for.'),
});

export type MembershipApplicationInput = z.infer<typeof MembershipApplicationSchema>;


const sendMembershipEmailFlow = ai.defineFlow(
  {
    name: 'sendMembershipEmailFlow',
    inputSchema: MembershipApplicationSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // In a real application, you would integrate an email service here.
    // For example, using Nodemailer with a service like SendGrid, or calling a cloud function.
    // For now, we will just log the details to the console.
    
    const emailBody = `
      New Membership Application:

      Full Name: ${input.fullName}
      Email: ${input.email}
      Phone: ${input.phone}
      Address: ${input.address}
      Membership Type: ${input.membershipType}
    `;

    console.log("---- New Membership Application ----");
    console.log(`Sending email to supratimdhara0@gmail.com`);
    console.log(emailBody);
    console.log("------------------------------------");

    // This is where you would add your email sending logic.
    // For example:
    // await sendEmail({ to: 'supratimdhara0@gmail.com', subject: 'New Membership Application', body: emailBody });
  }
);

export async function sendMembershipEmail(input: MembershipApplicationInput): Promise<void> {
  return await sendMembershipEmailFlow(input);
}
