import React from 'react';
import TestPlayer from './components/TestPlayer';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__logo">
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="#4ecdc4" />
            <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">A</text>
          </svg>
          <span className="app__logo-text">Assessment</span>
        </div>
        <span className="app__section-label">Abstract</span>
      </header>
      <main className="app__main">
        <TestPlayer />
      </main>
    </div>
  );
}
