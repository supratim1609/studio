"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { AlpanaIcon } from "../icons/alpana";
import { Button } from "@/components/ui/button";

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
      <div className="container flex h-20 items-center justify-center">
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
             <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary",
                pathname === link.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
                    <AlpanaIcon className="h-6 w-6 text-primary" />
                    <span>DSA '25</span>
                </Link>
            </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex flex-col gap-8 pt-8">
                <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold" onClick={() => setIsOpen(false)}>
                   <AlpanaIcon className="h-6 w-6 text-primary" />
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
              <div className="mt-auto flex flex-col gap-4 py-4">
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
