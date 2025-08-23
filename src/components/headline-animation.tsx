"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeadlineAnimationProps {
  texts: [string, string];
  className?: string;
}

export const HeadlineAnimation: React.FC<HeadlineAnimationProps> = ({
  texts,
  className,
}) => {
  const [step, setStep] = useState(0);
  const fullText = texts[0];
  const acronym = texts[1];

  useEffect(() => {
    const sequence = [
      // Step 0: Show full text
      { duration: 3000 },
      // Step 1: Highlight D
      { duration: 300 },
      // Step 2: Highlight S
      { duration: 300 },
      // Step 3: Highlight A
      { duration: 2000 },
      // Step 4: Fade out full text
      { duration: 500 },
      // Step 5: Show Acronym
      { duration: 3000 },
      // Step 6: Fade out Acronym
      { duration: 500 },
    ];

    const timer = setTimeout(() => {
      setStep((prevStep) => (prevStep + 1) % sequence.length);
    }, sequence[step].duration);

    return () => clearTimeout(timer);
  }, [step]);
  
  const isVisible = (s: number) => step >= 0 && step < 4;
  const isFading = step === 4 || step === 6;
  const showAcronym = step === 5;

  const renderFullText = () => {
    const parts = fullText.split(/(D|S|A)/g);
    let dCount = 0;
    let sCount = 0;
    let aCount = 0;

    return parts.map((part, index) => {
      let shouldHighlight = false;
      if (part === 'D' && dCount === 0) {
        shouldHighlight = step >= 1;
        dCount++;
      } else if (part === 'S' && sCount === 0) {
        shouldHighlight = step >= 2;
        sCount++;
      } else if (part === 'A' && aCount === 0) {
        shouldHighlight = step >= 3;
        aCount++;
      }

      return (
        <span
          key={index}
          className={cn(
            'transition-colors duration-300',
            shouldHighlight ? 'text-primary' : ''
          )}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <div className={cn("relative", className)}>
        <span
            className={cn(
                "transition-opacity duration-500 ease-in-out",
                isVisible(step) && !isFading ? 'opacity-100' : 'opacity-0'
            )}
        >
            {renderFullText()}
        </span>
        <span
            className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-in-out flex justify-center items-center",
                showAcronym && !isFading ? 'opacity-100' : 'opacity-0'
            )}
        >
            {acronym}
        </span>
    </div>
  );
};
