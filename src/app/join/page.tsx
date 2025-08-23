
import { MembershipForm } from "./membership-form";

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
                        Your support helps us continue our tradition of grand celebrations and community service. Apply for membership below.
                    </p>
                </div>
                
                <MembershipForm />
            </div>
        </div>
    </div>
  );
}
