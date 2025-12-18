'use client';
import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
}

export default function CountdownTimer({ initialMinutes = 10 }: CountdownTimerProps) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div className="bg-primary text-primary-foreground font-bold text-xl px-4 py-1 rounded-md flex items-center gap-2 tabular-nums">
      <Timer className="h-5 w-5"/>
      <span>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}
