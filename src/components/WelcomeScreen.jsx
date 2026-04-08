import React from 'react';

export default function WelcomeScreen({ onNext }) {
  return (
    <div className="screen-center">
      <div className="info-card">
        <div className="info-card__header">
          <div className="info-card__icon">
            <svg viewBox="0 0 48 48" width="48" height="48">
              <polygon points="24,6 30,18 18,18" fill="#555" stroke="#555" strokeWidth="1" />
              <circle cx="16" cy="30" r="7" fill="none" stroke="#555" strokeWidth="2" />
              <rect x="28" y="23" width="14" height="14" fill="none" stroke="#555" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="info-card__title">Abstract Reasoning Aptitude</h2>
        </div>

        <hr className="info-card__divider" />

        <div className="info-card__body">
          <p>
            Before you begin, please note that this assessment should be completed in one
            sitting.
          </p>
          <p>
            Please ensure you will not be interrupted during the assessment. We recommend
            disabling notifications on your device.
          </p>
          <p>
            Advanced checks are built into the assessment to monitor your completion and
            detect the potential use of AI.
          </p>
          <p>
            You can complete this assessment on a mobile device, but you may prefer to
            complete it on a device with a large screen.
          </p>
        </div>

        <div className="info-card__actions">
          <button className="btn btn--primary btn--wide" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
