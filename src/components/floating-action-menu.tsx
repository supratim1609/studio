
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DhakPlayer } from "./dhak-player";
import { TshirtAdvert } from "./tshirt-advert";

export const FloatingActionMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && <TshirtAdvert />}
            </AnimatePresence>
            <DhakPlayer />
        </motion.div>
    );
};
