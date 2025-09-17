
"use client";

import React, { useState } from "react";
import { Shirt, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InteractiveImage } from "./interactive-image";
import Link from "next/link";
import { StaggeredTextAnimation } from "./staggered-text-animation";

export const TshirtAdvert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
             <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Click here for a surprise"
                className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-secondary text-secondary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center animate-attention-pulse"
              >
                <Shirt className="h-7 w-7" />
              </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Click here for a surprise!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl p-0">
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
        </DialogContent>
      </Dialog>
    </>
  );
};
