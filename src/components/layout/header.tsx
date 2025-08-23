"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
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
      <div className="container flex h-20 items-center justify-between">
         <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
                <Image src="/logo.png" alt="DSA Logo" width={40} height={40} className="invert"/>
                <span className="hidden sm:inline-block">DSA '25</span>
            </Link>
        </div>
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
             <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-foreground",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                pathname === link.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
             <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col">
                <div className="flex flex-col gap-8 pt-8">
                    <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold" onClick={() => setIsOpen(false)}>
                        <Image src="/logo.png" alt="DSA Logo" width={40} height={40} className="invert"/>
                        <span>DSA '25</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground/80"
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
