
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { submitDonationToGoogleForm } from "./actions";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  donationAmount: z.string().refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, "Please enter a valid amount"),
});

const donationOptions = ["501", "1001", "2501", "5001"];

export function DonationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [customAmount, setCustomAmount] = React.useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      donationAmount: "",
    },
  });

  const handleAmountChange = (value: string) => {
    form.setValue("donationAmount", value);
    if (!donationOptions.includes(value)) {
        setCustomAmount(value);
    } else {
        setCustomAmount("");
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitDonationToGoogleForm(values);

      if (!result.success) {
        throw new Error(result.message);
      }

      toast({
        title: "Thank You for Your Generous Intent!",
        description: `${values.fullName}, your contribution of ₹${values.donationAmount} is deeply appreciated. Please proceed with payment.`,
        variant: "default",
      });
      form.reset();
      setCustomAmount("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full shadow-xl mt-6">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Support Our Celebration</CardTitle>
        <CardDescription>Your contribution helps us make this Puja a grand success. Every donation matters.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Mithun Chakraborty" {...field} />
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
                        <Input placeholder="mithun.c@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

             <FormField
                control={form.control}
                name="donationAmount"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel>Select Donation Amount (₹)</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={handleAmountChange}
                        value={field.value}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                            {donationOptions.map(amount => (
                                <FormItem key={amount} className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <Button asChild variant={field.value === amount ? 'default' : 'outline'} className="w-full">
                                            <label className="flex items-center gap-2 cursor-pointer w-full justify-center p-4">
                                                <RadioGroupItem value={amount} className="sr-only" />
                                                ₹{amount}
                                            </label>
                                        </Button>
                                    </FormControl>
                                </FormItem>
                            ))}
                             <FormItem className="flex items-center space-x-3 space-y-0 md:col-span-1">
                                <FormControl>
                                     <Input 
                                        type="number" 
                                        placeholder="Custom"
                                        className={cn("h-full text-center p-4", form.getValues('donationAmount') === customAmount && customAmount !== "" && "border-primary ring-2 ring-primary")}
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value);
                                            form.setValue('donationAmount', e.target.value);
                                        }}
                                     />
                                </FormControl>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
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
                  Proceed to Donate <ArrowRight className="ml-2"/>
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
