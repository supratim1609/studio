
"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const images = [
  { src: "/slideshow1.webp", alt: "Durga Puja Pandal", data_ai_hint: "durga idol", orientation: "landscape" },
  { src: "/slideshow8.webp", alt: "Indian Dance Performance", data_ai_hint: "indian dance", orientation: "landscape" },
  { src: "/slideshow7.webp", alt: "Cultural Dance", data_ai_hint: "indian dance", orientation: "portrait" },
  { src: "/600x400.webp", alt: "Community Event", data_ai_hint: "indian community", orientation: "landscape" },
  { src: "/slideshow2.webp", alt: "Festival Lights", data_ai_hint: "festival lights", orientation: "landscape" },
  { src: "/slideshow5.webp", alt: "Artistic Pandal", data_ai_hint: "artistic pandal", orientation: "portrait" },
  { src: "/slideshow4.webp", alt: "Rituals", data_ai_hint: "hindu ritual", orientation: "portrait" },
  { src: "/slideshow3.webp", alt: "Crowd at Puja", data_ai_hint: "festival crowd", orientation: "landscape" },
  { src: "/holi.webp", alt: "Holi Celebration", data_ai_hint: "holi festival", orientation: "landscape" },
  { src: "/durga_pujo.webp", alt: "Durga Idol Close-up", data_ai_hint: "durga idol", orientation: "landscape" },
  { src: "/kite.webp", alt: "Kite Festival", data_ai_hint: "kite festival", orientation: "landscape" },
  { src: "/football.webp", alt: "Football Match", data_ai_hint: "football game", orientation: "landscape" },
  { src: "/dance.webp", alt: "Dance Class", data_ai_hint: "dance class", orientation: "landscape" },
  { src: "/cricket.webp", alt: "Cricket Match", data_ai_hint: "cricket match", orientation: "landscape" },
  { src: "/karate.webp", alt: "Karate Demonstration", data_ai_hint: "karate class", orientation: "landscape" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    }
  },
};

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };
  
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            A visual tapestry of devotion, culture, and joy from our past celebrations. Relive the unforgettable moments.
          </p>
        </div>

        <motion.div 
          className="columns-2 gap-4 pt-16 md:columns-3 lg:columns-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={imageVariants}
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-4 block cursor-pointer break-inside-avoid overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="h-auto w-full transform transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.data_ai_hint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
          <DialogContent 
            className="max-w-5xl w-full p-0 overflow-hidden" 
            data-orientation={selectedImage.orientation}
          >
            <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
            <DialogDescription className="sr-only">
                A larger view of the {selectedImage.alt} image.
            </DialogDescription>
            
            <div className="relative w-full aspect-video">
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    data-ai-hint={selectedImage.data_ai_hint}
                />
            </div>

            <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev} 
                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 border-none text-white hover:text-white"
            >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous Image</span>
            </Button>
            <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext} 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 border-none text-white hover:text-white"
            >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next Image</span>
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
