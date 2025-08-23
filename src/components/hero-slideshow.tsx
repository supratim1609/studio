
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  { src: "https://placehold.co/1800x1200.png", alt: "Durga Puja Pandal", data_ai_hint: "durga puja pandal", animation: "animate-ken-burns-top" },
  { src: "https://placehold.co/1800x1200.png", alt: "Devotees at Puja", data_ai_hint: "festival crowd", animation: "animate-ken-burns-bottom" },
  { src: "https://placehold.co/1800x1200.png", alt: "Durga Idol", data_ai_hint: "durga idol", animation: "animate-ken-burns-left" },
  { src: "https://placehold.co/1800x1200.png", alt: "Evening Aarti", data_ai_hint: "hindu ritual night", animation: "animate-ken-burns-right" },
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
    <div className="absolute inset-0 h-full w-full opacity-20">
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
