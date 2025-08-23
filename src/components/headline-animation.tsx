"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeadlineAnimationProps {
  texts: [string, string];
  className?: string;
  duration?: number;
}

export const HeadlineAnimation: React.FC<HeadlineAnimationProps> = ({
  texts,
  className,
  duration = 4000, // Time each text is visible
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (texts.length < 2) return;

    const interval = setInterval(() => {
      setIsFading(true);
      // Wait for fade out to complete before changing text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFading(false);
      }, 500); // This should match the transition duration
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  return (
    <span
      className={cn(
        "transition-opacity duration-500 ease-in-out",
        isFading ? "opacity-0" : "opacity-100",
        className
      )}
    >
      {texts[currentIndex]}
    </span>
  );
};
