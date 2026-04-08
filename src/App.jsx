import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import WelcomeScreen from './components/WelcomeScreen';
import InstructionsScreen from './components/InstructionsScreen';
import TestPlayer from './components/TestPlayer';

const SCREENS = { intro: 0, welcome: 1, instructions: 2, test: 3 };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.intro);

  const showChrome = screen !== SCREENS.intro;

  return (
    <div className="app">
      {showChrome && (
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
            Abstract Reasoning
            <span className="app__section-dot"> &middot; </span>
            Assessment
          </span>
        </header>
      )}

      <main className="app__main">
        {screen === SCREENS.intro && (
          <IntroScreen onEnter={() => setScreen(SCREENS.welcome)} />
        )}
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

      {showChrome && screen !== SCREENS.test && (
        <footer className="app__footer">
          &copy; 2026 The Lyceum. All rights reserved.
        </footer>
      )}
    </div>
  );
}
