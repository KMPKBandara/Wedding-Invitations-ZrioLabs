"use client";

import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function calculate(target: string): Countdown {
  const difference = Math.max(new Date(target).getTime() - Date.now(), 0);

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    finished: difference === 0,
  };
}

export function useCountdown(target: string): Countdown {
  const [value, setValue] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    setValue(calculate(target));
    const timer = window.setInterval(() => setValue(calculate(target)), 1_000);
    return () => window.clearInterval(timer);
  }, [target]);

  return value;
}
