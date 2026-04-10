import React from 'react';

export default function InstructionsScreen({ onPrevious, onStart }) {
  return (
    <div className="screen-center">
      <div className="info-card">
        <div className="info-card__header">
          <div className="info-card__icon">
            <svg viewBox="0 0 48 48" width="48" height="48">
              <polygon points="24,10 30,22 18,22" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
              <circle cx="17" cy="32" r="6" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
              <rect x="26" y="26" width="12" height="12" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="info-card__label">Assessment</div>
            <h2 className="info-card__title">Test Instructions</h2>
          </div>
        </div>

        <hr className="info-card__divider" />

        <div className="info-card__body">
          <p>
            You will be presented with a series of abstract patterns. Each question
            displays a sequence of symbols with one missing element. Your task is to
            identify the rule governing the pattern and select the symbol that
            correctly completes the series.
          </p>
          <p>
            This assessment contains <strong>35 questions</strong>. There is no
            time limit. Difficulty adapts based on your performance.
          </p>
          <p>
            You will receive feedback after each response. Once submitted, answers
            cannot be changed.
          </p>
          <p>Recommended materials:</p>
          <ul>
            <li>Pen</li>
            <li>Paper</li>
          </ul>
        </div>

        <div className="info-card__actions info-card__actions--split">
          <button className="btn btn--outline" onClick={onPrevious}>
            Back
          </button>
          <button className="btn btn--primary" onClick={onStart}>
            Begin Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
