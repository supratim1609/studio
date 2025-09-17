
"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface InteractiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  data_ai_hint?: string;
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({
  src,
  alt,
  width = 800,
  height = 800,
  data_ai_hint,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative h-full w-full overflow-hidden rounded-xl"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.05 : 1,
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
      </motion.div>
      <motion.div
        style={{
            x: mouseXSpring.get() * 40,
            y: mouseYSpring.get() * 40,
            opacity: isHovered ? 1 : 0,
        }}
        className="pointer-events-none absolute inset-[-20%] z-10 transition-opacity duration-300"
        dangerouslySetInnerHTML={{
          __html: `<div style="position: absolute; inset: 0; background: radial-gradient(circle at ${mouseX.get()*100 + 50}% ${mouseY.get()*100 + 50}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 40%);"></div>`
        }}
      />
    </motion.div>
  );
};
