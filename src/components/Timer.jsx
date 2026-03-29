import React, { useEffect, useRef } from 'react';

export default function Timer({ seconds, onExpired, running = true }) {
  const prevRef = useRef(seconds);

  useEffect(() => {
    prevRef.current = seconds;
  }, [seconds]);

  useEffect(() => {
    if (seconds <= 0 && onExpired) {
      onExpired();
    }
  }, [seconds, onExpired]);

  const mins = Math.floor(Math.max(0, seconds) / 60);
  const secs = Math.max(0, seconds) % 60;
  const display = `${mins}:${secs.toString().padStart(2, '0')}`;
  const isLow = seconds <= 15;

  return (
    <div className={`timer ${isLow ? 'timer--low' : ''}`}>
      {display}
    </div>
  );
}
