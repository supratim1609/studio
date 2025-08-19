"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DhakPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && hasInteracted) {
      audioRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.error("Audio autoplay failed:", error);
      });
    }
  }, [hasInteracted]);
  
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.muted = isMuted;
    }
  }, [isMuted]);


  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!hasInteracted) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/dhak-beats.mp3" loop autoPlay muted={isMuted} />
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-2 bg-background/50 backdrop-blur-sm"
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          <span className="sr-only">Toggle Sound</span>
        </Button>
      </div>
    </>
  );
};
