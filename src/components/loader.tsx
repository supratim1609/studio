
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      boxShadow: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const leftDoorVariant = {
    initial: { x: 0 },
    animate: { 
        x: "-100%",
        transition: {
            duration: 1.0,
            ease: [0.87, 0, 0.13, 1],
            delay: 0.2
        }
    }
};

const rightDoorVariant = {
    initial: { x: 0 },
    animate: { 
        x: "100%",
        transition: {
            duration: 1.0,
            ease: [0.87, 0, 0.13, 1],
            delay: 0.2
        }
    }
};

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    const sequence = [
      () => setLoadingStep(1), // Show text
      () => setLoadingStep(2), // Hide text, start opening doors
      () => onLoadingComplete(), // Animation finished, notify parent
    ];

    const timers = [
      setTimeout(sequence[0], 100),   // Start after 100ms
      setTimeout(sequence[1], 1200),  // Show text for 1.1s
      setTimeout(sequence[2], 2200),  // Doors take ~1s
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">
        {/* Doors */}
        <motion.div
        className="fixed top-0 left-0 h-full w-1/2 bg-primary z-20"
        variants={leftDoorVariant}
        initial="initial"
        animate={loadingStep >= 2 ? "animate" : "initial"}
        />
        <motion.div
        className="fixed top-0 right-0 h-full w-1/2 bg-primary z-20"
        variants={rightDoorVariant}
        initial="initial"
        animate={loadingStep >= 2 ? "animate" : "initial"}
        />

        {/* Text */}
        <AnimatePresence>
        {loadingStep === 1 && (
            <motion.h1
            className="relative z-30 font-headline text-6xl font-bold text-primary-foreground md:text-8xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
                textShadow: "0 0 15px hsla(var(--primary-foreground), 0.5)",
            }}
            >
            DSA
            </motion.h1>
        )}
        </AnimatePresence>
    </div>
  );
};
