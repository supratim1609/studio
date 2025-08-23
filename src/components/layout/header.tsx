"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/history", label: "History" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Our Team" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = cn(
    "sticky top-0 z-50 w-full transition-all duration-300",
    isScrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-sm" : "bg-transparent"
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-24 items-center justify-between">
        <div className="flex-shrink-0">
           <Link href="/" className="flex items-center gap-3 font-headline text-2xl font-bold w-fit">
              <Image src="/logo.png" alt="DSA Logo" width={60} height={60} className="bg-primary-foreground p-1 rounded-full transition-all hover:ring-4 hover:ring-primary/50"/>
            </Link>
        </div>
       
        <nav className="hidden items-center justify-center gap-6 lg:gap-8 md:flex flex-1">
          {navLinks.map((link) => (
             <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-foreground",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                pathname === link.href ? "text-foreground font-bold" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-shrink-0 justify-end items-center gap-4 md:hidden">
             <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </button>
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col">
                <div className="flex flex-col gap-8 pt-8">
                    <Link href="/" className="flex items-center gap-3 font-headline text-xl font-bold" onClick={() => setIsOpen(false)}>
                        <Image src="/logo.png" alt="DSA Logo" width={60} height={60} className="bg-primary-foreground p-1 rounded-full"/>
                    </Link>
                    <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary font-bold" : "text-foreground/80"
                        )}
                        >
                        {link.label}
                        </Link>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
