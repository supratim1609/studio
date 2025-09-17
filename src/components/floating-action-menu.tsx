
"use client";

import React from "react";
import { motion } from "framer-motion";
import { DhakPlayer } from "./dhak-player";
import { TshirtAdvert } from "./tshirt-advert";

const menuVariants = {
  initial: {
    opacity: 1,
  },
  hover: {
    opacity: 1,
  },
};

const itemVariants = {
  initial: {
      opacity: 0,
      y: 0,
      x: 0,
      scale: 0.5,
      transition: { duration: 0.2, ease: "easeIn" } 
  },
  hover: {
      opacity: 1,
      y: -60,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
  },
};

export const FloatingActionMenu = () => {
    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
            variants={menuVariants}
            initial="initial"
            whileHover="hover"
        >
            <motion.div variants={itemVariants}>
                <TshirtAdvert />
            </motion.div>
            <DhakPlayer />
        </motion.div>
    );
};
