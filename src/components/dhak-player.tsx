"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DhakPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Initialize audioRef with the audio element from the DOM
    if (document) {
      audioRef.current = document.getElementById("dhak-audio") as HTMLAudioElement;
       if (audioRef.current) {
        audioRef.current.volume = 0.5;
       }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // We only try to play if the component is mounted on the client
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false); // Ensure state is correct on failure
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <audio
        id="dhak-audio"
        ref={audioRef}
        src="/audio/dhak-beats.mp3"
        loop
        preload="auto"
      />
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full border-2 border-primary/20 bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          <span className="sr-only">Toggle Sound</span>
        </Button>
      </div>
    </>
  );
};
