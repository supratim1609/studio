
'use server';

import { z } from 'zod';

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  membershipType: z.enum(["annual", "lifetime"]),
});

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScSaSyDljzLrVBBw1z8ugSeawnUaPuoy6S9dCGCZEuZ7H6Rag/formResponse";

const GOOGLE_FORM_ENTRIES = {
  fullName: "entry.1297920330",
  email: "entry.1887332742",
  phone: "entry.1818228303",
  address: "entry.1691283253",
  membershipType: "entry.1880424564",
};

export async function submitToGoogleForm(data: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(data);
    
    const params = new URLSearchParams();
    params.append(GOOGLE_FORM_ENTRIES.fullName, validatedData.fullName);
    params.append(GOOGLE_FORM_ENTRIES.email, validatedData.email);
    params.append(GOOGLE_FORM_ENTRIES.phone, validatedData.phone);
    params.append(GOOGLE_FORM_ENTRIES.address, validatedData.address);
    params.append(GOOGLE_FORM_ENTRIES.membershipType, validatedData.membershipType);

    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });
    
    // Google Forms submission usually results in a 200 OK status, even on the server.
    // The redirect (302) is what browsers follow. We'll consider any 2xx status a success.
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
