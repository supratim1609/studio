
"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { InteractiveImage } from "./interactive-image";
import Link from "next/link";
import { StaggeredTextAnimation } from "./staggered-text-animation";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const SESSION_STORAGE_KEY = "dsa-tshirt-advert-shown";

const TshirtIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
);


export const TshirtAdvert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 2000); // 2-second delay
      return () => clearTimeout(timer);
    } else {
      setShowFloatingButton(true);
    }
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      setShowFloatingButton(true);
    }
  };
  
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <TooltipProvider>
      {showFloatingButton && (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Click here for a surprise"
                className="fixed bottom-6 left-6 z-50 h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center animate-color-cycle"
                >
                <TshirtIcon className="h-7 w-7" />
                </button>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>Click here for a surprise!</p>
            </TooltipContent>
        </Tooltip>
      )}

      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
            <DialogContent 
              className="max-w-4xl p-0"
              asChild
            >
              <motion.div
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <DialogHeader className="sr-only">
                  <DialogTitle>Get the Official DSA T-Shirt!</DialogTitle>
                  <DialogDescription>
                    A pop-up showing the official DSA t-shirt with an option to call to order.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[400px] md:h-full w-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
                      <InteractiveImage
                          src="/tshirt.webp"
                          alt="DSA Official T-Shirt"
                          data_ai_hint="tshirt design"
                      />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                      <StaggeredTextAnimation
                        text="Get the Official DSA T-Shirt!"
                        el="h2"
                        className="font-headline text-3xl font-bold md:text-4xl"
                      />
                    <p className="mt-4 text-lg text-foreground/70">
                      Wear your pride! This limited edition t-shirt features a unique design celebrating our club's heritage. Made from premium-quality cotton, it's perfect for events, sports, or casual wear. Show your support and become a part of the DSA legacy.
                    </p>
                      <Button asChild size="lg" className="mt-8 font-bold">
                        <Link href="tel:08906479173">
                            <Phone className="mr-2"/>
                            Call to Order
                        </Link>
                      </Button>
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
};
