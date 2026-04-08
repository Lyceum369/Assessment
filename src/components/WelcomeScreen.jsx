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
