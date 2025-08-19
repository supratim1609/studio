import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MembershipForm } from "./membership-form";
import { DonationForm } from "./donation-form";
import { Handshake, Heart } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto flex min-h-[calc(100dvh-10rem)] items-center justify-center px-4 py-16 sm:py-24">
            <div className="w-full max-w-2xl">
                 <div className="mx-auto max-w-2xl text-center mb-12">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        Become a Part of Our Family
                    </h1>
                    <p className="mt-4 text-lg text-foreground/70">
                        Your support helps us continue our tradition of grand celebrations and community service. Choose how you'd like to contribute.
                    </p>
                </div>
                
                <Tabs defaultValue="membership" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="membership" className="gap-2">
                           <Handshake className="h-4 w-4"/> Membership
                        </TabsTrigger>
                        <TabsTrigger value="donation" className="gap-2">
                            <Heart className="h-4 w-4"/> Donate
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="membership">
                       <MembershipForm />
                    </TabsContent>
                    <TabsContent value="donation">
                        <DonationForm />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
  );
}
