import { EPassForm } from "./e-pass-form";

export default function EPassPage() {
  return (
    <div className="bg-muted/30">
      <div className="container mx-auto flex min-h-[calc(100dvh-10rem)] items-center justify-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-2xl">
            <div className="mx-auto max-w-2xl text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                    Request Your E-Pass
                </h1>
                <p className="mt-4 text-lg text-foreground/70">
                    Get your digital pass for seamless entry to all events. Fill out the form below to receive your E-Pass via email.
                </p>
            </div>
            <EPassForm />
        </div>
      </div>
    </div>
  );
}
