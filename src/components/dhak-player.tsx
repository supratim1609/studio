"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DhakPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // This effect will run once on the client after the component mounts.
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.5; // Set a subtle volume
    }

    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(error => {
            console.error("Audio playback failed:", error);
            // Autoplay was prevented, user will have to click the button.
            setIsPlaying(false);
        });
      }
      // Clean up event listener after first interaction
      window.removeEventListener("click", playAudio);
      window.removeEventListener("keydown", playAudio);
    };

    // Add event listeners to trigger audio play on first user interaction
    window.addEventListener("click", playAudio);
    window.addEventListener("keydown", playAudio);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("keydown", playAudio);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/dhak-beats.mp3" loop />
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-2 bg-background/50 backdrop-blur-sm"
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
