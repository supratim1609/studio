"use client";

import React, { useState, useEffect } from 'react';

type TimeUnitProps = {
  value: number;
  label: string;
  maxValue: number;
};

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label, maxValue }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / maxValue) * circumference;

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="relative h-28 w-28 md:h-32 md:w-32">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                        className="stroke-current text-foreground/10"
                        strokeWidth="5"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                    />
                    <circle
                        className="stroke-current text-accent"
                        strokeWidth="5"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-accent md:text-4xl">
                        {String(value).padStart(2, '0')}
                    </span>
                </div>
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest text-foreground/70 md:text-base">
                {label}
            </div>
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
    <div className="py-8 my-8 rounded-xl bg-background/50 backdrop-blur-sm w-full max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <TimeUnit value={timeLeft.days} label="Days" maxValue={365}/>
        <TimeUnit value={timeLeft.hours} label="Hours" maxValue={24}/>
        <TimeUnit value={timeLeft.minutes} label="Minutes" maxValue={60}/>
        <TimeUnit value={timeLeft.seconds} label="Seconds" maxValue={60}/>
      </div>
    </div>
  );
};
