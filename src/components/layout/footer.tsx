import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "/schedule", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/activities", label: "Activities" },
  { href: "/history", label: "History" },
  { href: "/join", label: "Join Us" },
];


export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="DSA Logo" width={64} height={64} className="transition-all"/>
              <div className="flex flex-col">
                <span className="font-headline text-2xl font-bold">DSA</span>
                <span className="text-xs text-foreground/70 -mt-1">(Dubrajpur Sports Association)</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-foreground/70">
              A cornerstone of community spirit and vibrant celebrations in Dubrajpur. Fostering unity and cultural heritage for generations.
            </p>
             <Link href="/history" className="mt-4 inline-block font-bold text-primary transition-colors hover:text-primary/80">
                Our Story!
            </Link>
            <div className="mt-4 flex items-center gap-4">
                <Link href="https://www.facebook.com/people/DSA/100092242809918/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/60 transition-colors hover:text-[#1877F2]">
                    <Facebook className="h-6 w-6" />
                </Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider text-foreground/80">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ashram+More,+Station+Road,+Dubrajpur,+West+Bengal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Ashram More, Station Road , Dubrajpur, India, West Bengal
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <a href="tel:08906479173" className="transition-colors hover:text-primary">
                  089064 79173
                </a>
              </li>
               <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:mydsa1979@gmail.com" className="transition-colors hover:text-primary">
                    mydsa1979@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider text-foreground/80">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-border/50 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <p className="text-center text-sm text-foreground/60 md:text-left">
                        &copy; {new Date().getFullYear()} Dubrajpur Sports Association. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
