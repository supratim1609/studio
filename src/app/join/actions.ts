
'use server';

import { z } from 'zod';

// Schema for Membership Form
const membershipFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  membershipType: z.enum(["annual", "lifetime"]),
});

const GOOGLE_MEMBERSHIP_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScSaSyDljzLrVBBw1z8ugSeawnUaPuoy6S9dCGCZEuZ7H6Rag/formResponse";

const GOOGLE_MEMBERSHIP_FORM_ENTRIES = {
  fullName: "entry.1297920330",
  email: "entry.1887332742",
  phone: "entry.1818228303",
  address: "entry.1691283253",
  membershipType: "entry.1880424564",
};

export async function submitMembershipToGoogleForm(data: z.infer<typeof membershipFormSchema>) {
  try {
    const validatedData = membershipFormSchema.parse(data);
    
    const params = new URLSearchParams();
    params.append(GOOGLE_MEMBERSHIP_FORM_ENTRIES.fullName, validatedData.fullName);
    params.append(GOOGLE_MEMBERSHIP_FORM_ENTRIES.email, validatedData.email);
    params.append(GOOGLE_MEMBERSHIP_FORM_ENTRIES.phone, validatedData.phone);
    params.append(GOOGLE_MEMBERSHIP_FORM_ENTRIES.address, validatedData.address);
    params.append(GOOGLE_MEMBERSHIP_FORM_ENTRIES.membershipType, validatedData.membershipType);

    const response = await fetch(GOOGLE_MEMBERSHIP_FORM_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });
    
    if (response.ok) {
        return { success: true, message: 'Form submitted successfully.' };
    } else {
        const responseText = await response.text();
        console.error("Google Forms submission failed with status:", response.status, responseText);
        return { success: false, message: 'Submission failed. Please try again.' };
    }

  } catch (error: any) {
    console.error("Error in server action:", error);
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Invalid data provided.' };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}


// Schema for Donation Form
const donationFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  donationAmount: z.string(),
});

const GOOGLE_DONATION_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd7gTzGvWp9J8t_5nQu4cnsjM3a03eGCHsL3YyJkvv7nFEXhQ/formResponse";

const GOOGLE_DONATION_FORM_ENTRIES = {
    fullName: "entry.1009533351",
    email: "entry.1146950857",
    donationAmount: "entry.1706689405",
};

export async function submitDonationToGoogleForm(data: z.infer<typeof donationFormSchema>) {
  try {
    const validatedData = donationFormSchema.parse(data);
    
    const params = new URLSearchParams();
    params.append(GOOGLE_DONATION_FORM_ENTRIES.fullName, validatedData.fullName);
    params.append(GOOGLE_DONATION_FORM_ENTRIES.email, validatedData.email);
    params.append(GOOGLE_DONATION_FORM_ENTRIES.donationAmount, validatedData.donationAmount);

    const response = await fetch(GOOGLE_DONATION_FORM_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });
    
    if (response.ok) {
        return { success: true, message: 'Donation form submitted successfully.' };
    } else {
        const responseText = await response.text();
        console.error("Google Forms (Donation) submission failed with status:", response.status, responseText);
        return { success: false, message: 'Donation submission failed. Please try again.' };
    }

  } catch (error: any) {
    console.error("Error in donation server action:", error);
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Invalid data provided for donation.' };
    }
    return { success: false, message: 'An unexpected error occurred during donation submission.' };
  }
}
