"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, UserPlus } from "lucide-react";
import React from "react";

const MAX_GUESTS = 4;

const guestSchema = z.object({
  name: z.string().min(2, "Guest name must be at least 2 characters."),
});

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number."),
  guestCount: z.string().refine(val => !isNaN(parseInt(val)), { message: "Invalid guest count" }),
  guests: z.array(guestSchema).optional(),
});

export function EPassForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      guestCount: "0",
      guests: [],
    },
  });

  const guestCount = parseInt(form.watch("guestCount") || "0");

  React.useEffect(() => {
    const currentGuests = form.getValues("guests") || [];
    if (currentGuests.length !== guestCount) {
      const newGuests = Array.from({ length: guestCount }, (_, i) => 
        currentGuests[i] || { name: "" }
      );
      form.setValue("guests", newGuests);
    }
  }, [guestCount, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "E-Pass Request Successful!",
      description: `Your E-Pass for ${parseInt(values.guestCount) + 1} person(s) has been sent to ${values.email}.`,
      variant: "default",
    });
    form.reset();
  }

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <UserPlus className="h-6 w-6 text-primary"/>
            <span>Your Details</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Anjali Roy" {...field} />
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
                      <Input placeholder="anjali.roy@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    name="guestCount"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Number of Additional Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            {[...Array(MAX_GUESTS + 1)].map((_, i) => (
                                <SelectItem key={i} value={String(i)}>
                                {i === 0 ? "Just Me" : `${i} Guest${i > 1 ? 's' : ''}`}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                 />
            </div>

            {guestCount > 0 && (
              <div className="space-y-4 rounded-lg border bg-secondary/50 p-4">
                 <h3 className="font-headline text-lg font-semibold">Guest Details</h3>
                {Array.from({ length: guestCount }).map((_, index) => (
                    <FormField
                    key={index}
                    control={form.control}
                    name={`guests.${index}.name`}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Guest {index + 1} Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder={`Full name of guest ${index + 1}`} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                ))}
              </div>
            )}
            
            <Button type="submit" className="w-full font-bold" size="lg">
              Get My E-Pass <ArrowRight className="ml-2"/>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
