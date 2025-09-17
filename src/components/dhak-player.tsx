
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const DhakPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    audioRef.current = new Audio("/audio/dhak-beats.mp3");
    audioRef.current.loop = true;
    
    // Attempt to play audio automatically
    audioRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.warn("Dhak music autoplay was prevented by the browser.");
        setIsPlaying(false);
    });

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
    <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Dhak music" : "Play Dhak music"}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center"
      >
        {isPlaying ? <Volume2 className="h-7 w-7" /> : <VolumeX className="h-7 w-7" />}
        <span className="sr-only">Toggle Sound</span>
    </button>
  );
};
