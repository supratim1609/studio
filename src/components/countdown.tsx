"use client";

import React, { useState, useEffect } from 'react';

type TimeUnitProps = {
  value: number;
  label: string;
};

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center">
            <p className="font-headline text-4xl md:text-6xl font-semibold tracking-tighter text-primary">
                {String(value).padStart(2, '0')}
            </p>
            <p className="text-sm md:text-base font-light uppercase tracking-widest text-foreground/70">{label}</p>
        </div>
    );
};

type CountdownProps = {
  targetDate: string;
};

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, isClient]);
  
  if (!isClient) {
    return <div className="py-8 my-8" />;
  }


  return (
    <div className="py-8 my-8 rounded-xl bg-background/30 backdrop-blur-sm border border-white/10 shadow-lg w-full max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};
