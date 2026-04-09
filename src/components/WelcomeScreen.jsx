import React from 'react';

export default function WelcomeScreen({ onNext }) {
  return (
    <div className="screen-center">
      <div className="info-card">
        <div className="info-card__header">
          <div className="info-card__icon">
            <svg viewBox="0 0 48 48" width="48" height="48">
              <circle cx="24" cy="24" r="6" fill="#c9a84c" />
              <circle cx="24" cy="24" r="10" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.7" />
              <circle cx="24" cy="24" r="14" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
              <circle cx="24" cy="24" r="18" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.35" />
              <circle cx="24" cy="24" r="22" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
          <h2 className="info-card__title">Abstract Reasoning Aptitude</h2>
        </div>

        <hr className="info-card__divider" />

        <div className="info-card__body">
          <p>
            Welcome to The Lyceum Assessment Platform. This evaluation measures
            your capacity for abstract reasoning and pattern recognition.
          </p>
          <p>
            This assessment must be completed in a single, uninterrupted session.
            Please ensure you are in a quiet environment and disable all
            notifications on your device before proceeding.
          </p>
          <p>
            Integrity monitoring is active throughout this assessment. Completion
            patterns and response behaviour are recorded and analysed.
          </p>
          <p>
            This assessment is optimised for all devices, though a larger screen
            is recommended for the best experience.
          </p>
        </div>

        <div className="info-card__actions">
          <button className="btn btn--primary btn--wide" onClick={onNext}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
