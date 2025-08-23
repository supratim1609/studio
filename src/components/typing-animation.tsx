"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const memoizedTexts = useMemo(() => texts, [texts]);

  useEffect(() => {
    if (!memoizedTexts || memoizedTexts.length === 0) return;

    const handleTyping = () => {
      const currentString = memoizedTexts[textIndex];
      
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % memoizedTexts.length);
        }
      } else {
        if (charIndex < currentString.length) {
          setCurrentText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex, memoizedTexts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className={cn(className)}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
