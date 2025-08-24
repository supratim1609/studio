
"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  }, [selectedImageIndex]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  }, [selectedImageIndex]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, handleNext, handlePrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 75) { // Min swipe distance
      handleNext();
    } else if (touchEnd - touchStart > 75) {
      handlePrev();
    }
  };

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

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

        <div className="columns-2 gap-4 pt-16 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImageIndex(index)}
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
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
          <DialogContent 
            className="max-w-5xl w-full p-0 overflow-hidden" 
            data-orientation={selectedImage.orientation}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
            <DialogDescription className="sr-only">
              A larger view of the {selectedImage.alt} image. Use arrow keys to navigate.
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
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 hover:bg-background/80"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 hover:bg-background/80"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
