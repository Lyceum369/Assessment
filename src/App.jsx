import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InstructionsScreen from './components/InstructionsScreen';
import TestPlayer from './components/TestPlayer';

const SCREENS = { welcome: 0, instructions: 1, test: 2 };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.welcome);

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
        <span className="app__section-label">
          Abstract Reasoning Aptitude
          <span className="app__section-dot"> &middot; </span>
          {screen === SCREENS.welcome ? 'General' : 'Abstract'}
        </span>
      </header>

      <main className="app__main">
        {screen === SCREENS.welcome && (
          <WelcomeScreen onNext={() => setScreen(SCREENS.instructions)} />
        )}
        {screen === SCREENS.instructions && (
          <InstructionsScreen
            onPrevious={() => setScreen(SCREENS.welcome)}
            onStart={() => setScreen(SCREENS.test)}
          />
        )}
        {screen === SCREENS.test && <TestPlayer onComplete={() => setScreen(SCREENS.welcome)} />}
      </main>

      {screen !== SCREENS.test && (
        <footer className="app__footer">
          &copy; 2026 Assessment Platform. All rights reserved.
        </footer>
      )}
    </div>
  );
}
