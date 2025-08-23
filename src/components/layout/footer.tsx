import Link from "next/link";
import { AlpanaIcon } from "../icons/alpana";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
            <AlpanaIcon className="h-6 w-6 text-primary" />
            <span>DSA '25</span>
          </Link>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Dubrajpur Sports Association. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook" className="text-foreground/60 transition-colors hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-foreground/60 transition-colors hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-foreground/60 transition-colors hover:text-primary">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
