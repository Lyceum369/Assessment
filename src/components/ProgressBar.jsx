import React from 'react';

export default function ProgressBar({ total, current, statuses }) {
  return (
    <div className="progress-bar">
      {Array.from({ length: total }, (_, i) => {
        const status = statuses[i] || 'upcoming';
        const isCurrent = i === current;

        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="progress-bar__line" />}
            <span
              className={[
                'progress-bar__step',
                isCurrent ? 'progress-bar__step--current' : '',
                status === 'correct' ? 'progress-bar__step--correct' : '',
                status === 'incorrect' ? 'progress-bar__step--incorrect' : '',
                status === 'skipped' ? 'progress-bar__step--skipped' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {status === 'correct' ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="4,12 10,18 20,6" />
                </svg>
              ) : (
                <span>{i + 1}</span>
              )}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}
