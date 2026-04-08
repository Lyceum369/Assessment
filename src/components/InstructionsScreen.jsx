import React from 'react';

export default function InstructionsScreen({ onPrevious, onStart }) {
  return (
    <div className="screen-center">
      <div className="info-card">
        <div className="info-card__header">
          <div className="info-card__icon">
            <svg viewBox="0 0 48 48" width="48" height="48">
              <circle cx="24" cy="24" r="20" fill="#e6f5ec" stroke="#4ecdc4" strokeWidth="2" />
              <polygon points="24,12 30,22 18,22" fill="none" stroke="#555" strokeWidth="1.5" />
              <circle cx="18" cy="30" r="5" fill="none" stroke="#555" strokeWidth="1.5" />
              <rect x="26" y="26" width="10" height="10" fill="none" stroke="#555" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="info-card__label">Abstract</div>
            <h2 className="info-card__title">Instructions</h2>
          </div>
        </div>

        <hr className="info-card__divider" />

        <div className="info-card__body">
          <p>
            This task involves identifying the correct symbol and pattern that completes
            the series.
          </p>
          <p>
            In the following examples, you have <strong>2 minutes</strong> to answer{' '}
            <strong>4 questions</strong>.
          </p>
          <p>Recommended materials:</p>
          <ul>
            <li>Pen</li>
            <li>Paper</li>
          </ul>
        </div>

        <div className="info-card__actions info-card__actions--split">
          <button className="btn btn--outline" onClick={onPrevious}>
            Previous
          </button>
          <button className="btn btn--primary" onClick={onStart}>
            Examples
          </button>
        </div>
      </div>
    </div>
  );
}
