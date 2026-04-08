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
          <svg viewBox="0 0 36 36" width="30" height="30">
            <circle cx="18" cy="18" r="4" fill="#c9a84c" />
            <circle cx="18" cy="18" r="7" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.9" />
            <circle cx="18" cy="18" r="10" fill="none" stroke="#c9a84c" strokeWidth="0.7" opacity="0.7" />
            <circle cx="18" cy="18" r="13" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.5" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
            <circle cx="18" cy="18" r="17.5" fill="none" stroke="#c9a84c" strokeWidth="0.4" opacity="0.3" />
          </svg>
          <span className="app__logo-text">The Lyceum</span>
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
          &copy; 2026 The Lyceum. All rights reserved.
        </footer>
      )}
    </div>
  );
}
