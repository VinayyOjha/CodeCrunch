// import React from 'react'

// const Timer = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default Timer

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerHeroProps {
  targetDate: Date;
  onComplete?: () => void;
}

const TimerHero: React.FC<TimerHeroProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isActive, setIsActive] = useState<boolean>(true);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const target = targetDate.getTime( );
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if countdown is complete
      if (newTimeLeft.days === 0 && 
          newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && 
          newTimeLeft.seconds === 0) {
        setIsActive(false);
        if (onComplete) {
          onComplete();
        }
      }
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="mt-8 mb-12 timer-hero flex flex-col items-center gap-4 text-white/80 animate-in fade-in duration-500">
      <div className="timer-container flex gap-5 sm:gap-8 font-mono">
      <div className="time-block text-center bg-[#171717] border border-neutral-800 rounded-md p-3 min-w-[60px] sm:min-w-[75px] shadow-lg">
        <div className="time-number text-2xl sm:text-3xl">{formatNumber(timeLeft.days)}</div>
        <div className="time-label text-sm text-white/35">days</div>
      </div>
      
      <div className="time-block text-center bg-[#171717] border border-neutral-800 rounded-md p-3 min-w-[60px] sm:min-w-[75px] shadow-lg">
        <div className="time-number text-2xl sm:text-3xl">{formatNumber(timeLeft.hours)}</div>
        <div className="time-labe text-sm text-white/35">hrs</div>
      </div>
      
      <div className="time-block text-center bg-[#171717] border border-neutral-800 rounded-md p-3 min-w-[60px] sm:min-w-[75px] shadow-lg">
        <div className="time-number text-2xl sm:text-3xl">{formatNumber(timeLeft.minutes)}</div>
        <div className="time-labe text-sm text-white/35">min</div>
      </div>
      
      <div className="time-block text-center bg-[#171717] border border-neutral-800 rounded-md p-3 min-w-[60px] sm:min-w-[75px] shadow-lg">
        <div className="time-number text-2xl sm:text-3xl">{formatNumber(timeLeft.seconds)}</div>
        <div className="time-labe text-sm text-white/35">sec</div>
      </div>
      </div>
      
      {!isActive && (
      <div className="timer-complete">
        Time's up!
      </div>
      )}
    </div>
  );
};

export default TimerHero;

// Usage example:
// const targetDate = new Date('2024-12-31T23:59:59');
// <TimerHero 
//   targetDate={targetDate} 
//   onComplete={() => console.log('Timer completed!')} 
// />