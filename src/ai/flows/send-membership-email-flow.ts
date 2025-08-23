
'use server';
/**
 * @fileOverview A flow for sending membership application emails.
 *
 * - sendMembershipEmail - A function that handles the membership application process.
 * - MembershipApplicationInput - The input type for the sendMembershipEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import nodemailer from 'nodemailer';

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
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASS,
      },
    });

    const emailBody = `
      <h1>New Membership Application</h1>
      <p><strong>Full Name:</strong> ${input.fullName}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Phone:</strong> ${input.phone}</p>
      <p><strong>Address:</strong> ${input.address}</p>
      <p><strong>Membership Type:</strong> ${input.membershipType}</p>
    `;

    const mailOptions = {
      from: `DSA Membership <${process.env.EMAIL_FROM}>`,
      to: 'supratimdhara0@gmail.com',
      subject: 'New Membership Application Received',
      html: emailBody,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Membership application email sent successfully.");
    } catch (error) {
        console.error("Error sending email:", error);
        // We re-throw the error so the client knows something went wrong.
        throw new Error("Failed to send membership application email.");
    }
  }
);

export async function sendMembershipEmail(input: MembershipApplicationInput): Promise<void> {
  return await sendMembershipEmailFlow(input);
}
