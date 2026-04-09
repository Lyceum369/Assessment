import React from 'react';

export default function FeedbackScreen({ results, questions, timeTaken, onRedo, onNext }) {
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const formattedTime = minutes > 0
    ? `${minutes}m ${seconds}s`
    : `${seconds}s`;

  return (
    <div className="feedback">
      <div className="feedback__card">
        <div className="feedback__header">
          <div className="feedback__icon">
            <svg viewBox="0 0 48 48" width="48" height="48">
              <circle cx="24" cy="24" r="6" fill="#c9a84c" />
              <circle cx="24" cy="24" r="10" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.7" />
              <circle cx="24" cy="24" r="14" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
              <circle cx="24" cy="24" r="18" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.35" />
              <circle cx="24" cy="24" r="22" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
          <div>
            <div className="feedback__label">Abstract</div>
            <h2 className="feedback__title">Practice Questions Feedback</h2>
          </div>
        </div>

        <hr className="feedback__divider" />

        <p className="feedback__summary">
          You completed the practice questions in <strong>{formattedTime}</strong>.
        </p>

        <div className="feedback__results">
          {results.history.map((entry, i) => {
            const q = questions.find((qu) => qu.id === entry.questionId);
            return (
              <div
                key={entry.questionId}
                className={`feedback__item ${
                  entry.isCorrect ? 'feedback__item--correct' : 'feedback__item--incorrect'
                }`}
              >
                <span className="feedback__status-icon">
                  {entry.isCorrect ? (
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <circle cx="12" cy="12" r="11" fill="#4caf50" />
                      <polyline
                        points="6,12 10,17 18,7"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <circle cx="12" cy="12" r="11" fill="#e74c3c" />
                      <line x1="8" y1="8" x2="16" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="16" y1="8" x2="8" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
                <div className="feedback__item-body">
                  <strong>
                    Question {i + 1}: {entry.isCorrect ? 'Correct' : 'Incorrect'}
                  </strong>
                  {!entry.isCorrect && q?.feedback && (
                    <p className="feedback__explanation">{q.feedback}</p>
                  )}
                </div>
              </div>
            );
          })}

          {/* Show unanswered questions */}
          {questions
            .filter((q) => !results.history.find((h) => h.questionId === q.id))
            .map((q, i) => (
              <div key={q.id} className="feedback__item feedback__item--skipped">
                <span className="feedback__status-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <circle cx="12" cy="12" r="11" fill="#999" />
                    <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="feedback__item-body">
                  <strong>Question {results.history.length + i + 1}: Not Answered</strong>
                </div>
              </div>
            ))}
        </div>

        <div className="feedback__actions">
          <button className="btn btn--outline" onClick={onRedo}>
            Redo
          </button>
          <button className="btn btn--primary" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
