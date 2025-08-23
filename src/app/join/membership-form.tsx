
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import React from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number."),
  address: z.string().min(10, "Address must be at least 10 characters."),
  membershipType: z.enum(["annual", "lifetime"], { required_error: "Please select a membership type."}),
});

// These are the real entry IDs from the provided Google Form
const GOOGLE_FORM_ENTRIES = {
  fullName: "entry.1297920330",
  email: "entry.1887332742",
  phone: "entry.1818228303",
  address: "entry.1691283253",
  membershipType: "entry.1880424564",
};

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScSaSyDljzLrVBBw1z8ugSeawnUaPuoy6S9dCGCZEuZ7H6Rag/formResponse";

export function MembershipForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append(GOOGLE_FORM_ENTRIES.fullName, values.fullName);
    formData.append(GOOGLE_FORM_ENTRIES.email, values.email);
    formData.append(GOOGLE_FORM_ENTRIES.phone, values.phone);
    formData.append(GOOGLE_FORM_ENTRIES.address, values.address);
    formData.append(GOOGLE_FORM_ENTRIES.membershipType, values.membershipType);

    try {
       await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Important: 'no-cors' mode is required for Google Forms
      });

      toast({
        title: "Application Submitted!",
        description: `Thank you, ${values.fullName}. Your application has been received.`,
        variant: "default",
      });
      form.reset();
    } catch (error) {
       toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full shadow-xl mt-6">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Join the Association</CardTitle>
        <CardDescription>Fill in your details to apply for a DSA membership.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
                <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Sourav Ganguly" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input placeholder="sourav.g@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input placeholder="9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Address</FormLabel>
                    <FormControl>
                        <Input placeholder="Your street, city, pin code" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="membershipType"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Membership Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a membership plan" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="annual">Annual Membership</SelectItem>
                                <SelectItem value="lifetime">Lifetime Membership</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full font-bold" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                    </>
                ) : (
                    <>
                    Submit Application
                    <ArrowRight className="ml-2"/>
                    </>
                )}
                </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
