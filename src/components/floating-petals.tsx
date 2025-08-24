
"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const NUM_PETALS = 20;

const Petal = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const randomX = isClient ? Math.random() * window.innerWidth : 0;
    const randomY = isClient ? -50 - Math.random() * window.innerHeight : 0;
    const randomDuration = 10 + Math.random() * 10;
    const randomDelay = Math.random() * 5;
    const randomRotate = Math.random() * 360;
    
    if (!isClient) return null;

    return (
        <motion.div
            initial={{ x: randomX, y: randomY, rotate: randomRotate, opacity: 0 }}
            animate={{
                y: window.innerHeight + 100,
                x: [randomX, randomX + (Math.random() - 0.5) * 200, randomX],
                rotate: randomRotate + (Math.random() - 0.5) * 720,
                opacity: [0, 0.4 + Math.random() * 0.4, 0]
            }}
            transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Infinity,
                ease: "linear",
            }}
            className="absolute pointer-events-none"
        >
             <svg
                width={16 + Math.random() * 16}
                height={16 + Math.random() * 16}
                viewBox="0 0 50 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
             >
                <path d="M29.5879 1.25998C27.913 -0.419994 25.1381 -0.419994 23.4632 1.25998L1.65709 23.0661C-2.40428 27.1275 1.54784 34.0205 7.15174 34.0205H45.8993C51.5032 34.0205 55.4553 27.1275 51.394 23.0661L29.5879 1.25998Z" fill="#FF9933" fillOpacity={0.2 + Math.random() * 0.3}/>
                <path d="M26.5186 21.0102L5.80916 41.7196C4.13426 43.3945 6.90916 43.3945 8.58406 41.7196L29.2935 21.0102C27.9333 22.3705 27.8788 22.316 26.5186 21.0102Z" fill="#800000" fillOpacity={0.1 + Math.random() * 0.2}/>
            </svg>
        </motion.div>
    )
}


export const FloatingPetals = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {Array.from({ length: NUM_PETALS }).map((_, i) => (
                <Petal key={i} />
            ))}
        </div>
    );
};
