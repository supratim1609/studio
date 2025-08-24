
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation, MotionValue, useMotionValue, useTransform } from "framer-motion";

const NUM_PETALS = 20;

const Petal = ({ x, y, rotate, opacity }: { x: MotionValue, y: MotionValue, rotate: MotionValue, opacity: MotionValue }) => {
  return (
    <motion.div
      style={{ x, y, rotate, opacity }}
      className="absolute"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <path
          d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
      </svg>
    </motion.div>
  );
};


export const FloatingPetals = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
    };

    if (!isClient) return null;

    return (
        <div onMouseMove={handleMouseMove} className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {Array.from({ length: NUM_PETALS }).map((_, i) => {
                const randomX = Math.random() * window.innerWidth;
                const randomY = -50 - Math.random() * window.innerHeight;
                const randomDuration = 10 + Math.random() * 10;
                const randomDelay = Math.random() * 5;
                const randomRotate = Math.random() * 360;
                const randomOpacity = 0.4 + Math.random() * 0.4;
                
                const x = useMotionValue(randomX);
                const y = useMotionValue(randomY);
                const rotate = useMotionValue(randomRotate);
                const opacity = useMotionValue(randomOpacity);

                const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
                const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

                return (
                    <motion.div
                        key={i}
                        initial={{ x: randomX, y: randomY, rotate: randomRotate, opacity: 0 }}
                        animate={{
                            y: window.innerHeight + 100,
                            x: [randomX, randomX + (Math.random() - 0.5) * 200, randomX],
                            rotate: randomRotate + (Math.random() - 0.5) * 720,
                            opacity: [0, randomOpacity, randomOpacity, 0]
                        }}
                        transition={{
                            duration: randomDuration,
                            delay: randomDelay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            x: useTransform(() => x.get() + parallaxX.get()),
                            y: useTransform(() => y.get() + parallaxY.get()),
                        }}
                        className="absolute"
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
            })}
        </div>
    );
};
