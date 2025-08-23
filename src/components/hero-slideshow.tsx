
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  { src: "/slideshow1.webp", alt: "Durga Puja Pandal", data_ai_hint: "durga puja pandal", animation: "animate-ken-burns-top" },
  { src: "/slideshow3.webp", alt: "Devotees at Puja", data_ai_hint: "festival crowd", animation: "animate-ken-burns-bottom" },
  { src: "/slideshow7.webp", alt: "Durga Idol", data_ai_hint: "durga idol", animation: "animate-ken-burns-left" },
  { src: "/slideshow4.webp", alt: "Evening Aarti", data_ai_hint: "hindu ritual night", animation: "animate-ken-burns-right" },
  { src: "/slideshow5.webp", alt: "Durga Puja Pandal", data_ai_hint: "durga puja pandal", animation: "animate-ken-burns-top" },
  { src: "/slideshow6.webp", alt: "Devotees at Puja", data_ai_hint: "festival crowd", animation: "animate-ken-burns-bottom" },
  { src: "/slideshow8.webp", alt: "Durga Idol", data_ai_hint: "durga idol", animation: "animate-ken-burns-left" },
];

const SLIDE_DURATION = 10000; // 10 seconds per slide

export const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full opacity-95">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          data-ai-hint={image.data_ai_hint}
          fill
          objectFit="cover"
          className={cn(
            'absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out',
            'origin-center',
            index === currentIndex ? `opacity-100 ${image.animation}` : 'opacity-0'
          )}
          style={{ animationDuration: `${SLIDE_DURATION + 2000}ms` }}
        />
      ))}
    </div>
  );
};
