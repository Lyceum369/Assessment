import React, { useState, useEffect } from 'react';

export default function IntroScreen({ onEnter }) {
  const [phase, setPhase] = useState(0); // 0=rings, 1=title, 2=subtitle, 3=ready

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="intro" onClick={phase >= 3 ? onEnter : undefined}>
      {/* Animated concentric rings */}
      <div className="intro__logo">
        <svg viewBox="0 0 200 200" className="intro__rings">
          <circle cx="100" cy="100" r="12" fill="#c9a84c" className="intro__core" />
          <circle cx="100" cy="100" r="24" fill="none" stroke="#c9a84c" strokeWidth="1.2" className="intro__ring intro__ring--1" />
          <circle cx="100" cy="100" r="38" fill="none" stroke="#c9a84c" strokeWidth="1" className="intro__ring intro__ring--2" />
          <circle cx="100" cy="100" r="54" fill="none" stroke="#c9a84c" strokeWidth="0.8" className="intro__ring intro__ring--3" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="#c9a84c" strokeWidth="0.6" className="intro__ring intro__ring--4" />
          <circle cx="100" cy="100" r="88" fill="none" stroke="#c9a84c" strokeWidth="0.5" className="intro__ring intro__ring--5" />
          <circle cx="100" cy="100" r="98" fill="none" stroke="#c9a84c" strokeWidth="0.4" className="intro__ring intro__ring--6" />
        </svg>
      </div>

      {/* Title */}
      <h1 className={`intro__title ${phase >= 1 ? 'intro--visible' : ''}`}>
        THE LYCEUM
      </h1>

      {/* Divider line */}
      <div className={`intro__divider ${phase >= 2 ? 'intro--visible' : ''}`} />

      {/* Subtitle */}
      <p className={`intro__subtitle ${phase >= 2 ? 'intro--visible' : ''}`}>
        ABSTRACT REASONING ASSESSMENT
      </p>

      {/* Enter button */}
      <button
        className={`intro__enter ${phase >= 3 ? 'intro--visible' : ''}`}
        onClick={onEnter}
      >
        Enter
      </button>
    </div>
  );
}
