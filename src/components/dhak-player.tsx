
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export const DhakPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    audioRef.current = new Audio("/audio/dhak-beats.mp3");
    audioRef.current.loop = true;
    
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
                setIsPlaying(false);
            });
        }
        setIsPlaying(!isPlaying);
    }
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <motion.button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Dhak music" : "Play Dhak music"}
        className="h-16 w-16 rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? <Volume2 className="h-7 w-7" /> : <VolumeX className="h-7 w-7" />}
        <span className="sr-only">Toggle Sound</span>
    </motion.button>
  );
};
