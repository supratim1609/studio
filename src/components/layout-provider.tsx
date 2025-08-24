
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "./loader";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is a failsafe to ensure loading screen doesn't stick forever.
    const timeout = setTimeout(() => {
        if (isLoading) {
            setIsLoading(false);
        }
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
