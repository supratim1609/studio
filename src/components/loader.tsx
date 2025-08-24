"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

const doorVariants = {
  initial: { height: "100%" },
  animate: {
    height: 0,
    transition: {
      duration: 1.2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const Loader = () => {
  const [loadingStep, setLoadingStep] = useState(0); // 0: initial, 1: text shown, 2: doors opening, 3: done
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const sequence = [
      () => setLoadingStep(1), // Show text
      () => setLoadingStep(2), // Hide text, start opening doors
      () => setLoadingStep(3), // Animation finished
    ];

    const timers = [
      setTimeout(sequence[0], 500), // Start after 500ms
      setTimeout(sequence[1], 2500), // Show text for 2s
      setTimeout(sequence[2], 3800), // Doors take 1.3s
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isClient]);
  
  if (!isClient || loadingStep === 3) {
    return null;
  }

  return (
    <AnimatePresence>
      {loadingStep < 3 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          {/* Doors */}
          <motion.div
            className="fixed top-0 left-0 w-full bg-primary"
            variants={doorVariants}
            initial="initial"
            animate={loadingStep >= 2 ? "animate" : "initial"}
            style={{ originY: 'top' }}
          />
           <motion.div
            className="fixed bottom-0 left-0 w-full bg-primary"
            variants={doorVariants}
            initial="initial"
            animate={loadingStep >= 2 ? "animate" : "initial"}
            style={{ originY: 'bottom' }}
          />

          {/* Text */}
          <AnimatePresence>
            {loadingStep === 1 && (
              <motion.h1
                className="relative z-10 font-headline text-6xl font-bold text-primary-foreground md:text-8xl"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                DSA
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
