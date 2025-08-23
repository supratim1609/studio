
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
    const formData = new FormData();
    
    formData.append(GOOGLE_FORM_ENTRIES.fullName, validatedData.fullName);
    formData.append(GOOGLE_FORM_ENTRIES.email, validatedData.email);
    formData.append(GOOGLE_FORM_ENTRIES.phone, validatedData.phone);
    formData.append(GOOGLE_FORM_ENTRIES.address, validatedData.address);
    formData.append(GOOGLE_FORM_ENTRIES.membershipType, validatedData.membershipType);

    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      body: formData,
    });
    
    // Google Forms submission redirects with a 302 status on success.
    // We check if the response status is in the success range (2xx) or a redirect (3xx).
    if (response.ok || (response.status >= 300 && response.status < 400)) {
        return { success: true, message: 'Form submitted successfully.' };
    } else {
        console.error("Google Forms submission failed with status:", response.status, response.statusText);
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
