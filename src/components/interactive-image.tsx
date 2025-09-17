
"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InteractiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  data_ai_hint?: string;
  className?: string;
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({
  src,
  alt,
  width = 800,
  height = 800,
  data_ai_hint,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 400 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [0, 1], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [0, 1], ['-10deg', '10deg']);

  const glareX = useTransform(mouseXSpring, [0, 1], ['100%', '-100%']);
  const glareY = useTransform(mouseYSpring, [0, 1], ['100%', '-100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={cn("relative h-full w-full overflow-hidden rounded-xl bg-card", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: 1.05,
        }}
        className="absolute inset-0 transition-transform duration-300"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          data-ai-hint={data_ai_hint}
        />
        {/* Glare Effect */}
        <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
                background: `radial-gradient(circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                opacity: useTransform(mouseYSpring, [0, 0.5, 1], [0, 1, 0]),
            }}
        />

        {/* Sheen Effect */}
        <motion.div 
            className="pointer-events-none absolute inset-[-100%] z-10"
            style={{
                x: glareX,
                y: glareY,
                background: 'linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.2) 50%, transparent 80%)',
                opacity: useTransform(mouseYSpring, [0, 0.5, 1], [0.1, 0.5, 0.1]),
            }}
        />

      </motion.div>
    </motion.div>
  );
};
