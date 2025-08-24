
"use client";

import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
             <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative mb-4 block cursor-pointer break-inside-avoid overflow-hidden rounded-xl shadow-lg">
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
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
                <div className="relative w-full aspect-video">
                  <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                  <DialogDescription className="sr-only">
                    A larger view of the {image.alt} image.
                  </DialogDescription>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    data-ai-hint={image.data_ai_hint}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
