
"use client";

import React, { useState, useRef, useEffect } from "react";
import { DhakIcon } from "./icons/dhak-icon";
import { cn } from "@/lib/utils";

export const DhakPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    audioRef.current = new Audio("/audio/dhak-beats.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Lowered volume slightly

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
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Dhak music" : "Play Dhak music"}
        className={cn(
            "relative h-16 w-16 rounded-full border-2 border-primary/20 bg-background/80 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "flex items-center justify-center group"
        )}
      >
        <DhakIcon className={cn("h-8 w-8 text-primary transition-all duration-300", isPlaying && "scale-110")} />
        
        {/* Pulsing glow effect */}
        {isPlaying && (
           <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-slow -z-10" />
        )}
        
        {/* Mute indicator */}
        <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-8 bg-primary/70 origin-center transition-all duration-300",
            isPlaying ? "scale-x-0 opacity-0 rotate-45" : "scale-x-100 opacity-100 rotate-[135deg]"
        )} />
        
        <span className="sr-only">Toggle Sound</span>
      </button>
    </div>
  );
};
