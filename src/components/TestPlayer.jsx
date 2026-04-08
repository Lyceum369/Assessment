import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import ShapeCard from './ShapeCard';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import FeedbackScreen from './FeedbackScreen';
import { AdaptiveEngine } from '../engine/adaptive';
import allQuestions from '../data/questions';

const TEST_DURATION = 480; // 8 minutes for 15 questions

export default function TestPlayer({ onComplete }) {
  const engineRef = useRef(null);
  const totalQuestions = allQuestions.length;

  if (!engineRef.current) {
    engineRef.current = new AdaptiveEngine(allQuestions, {
      startDifficulty: 1,
      totalQuestions,
    });
  }
  const engine = engineRef.current;

  const [currentQuestion, setCurrentQuestion] = useState(() => engine.getNextQuestion());
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(TEST_DURATION);
  const [testComplete, setTestComplete] = useState(false);
  const [stepStatuses, setStepStatuses] = useState({});

  // Per-question feedback state
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackResult, setFeedbackResult] = useState(null); // { isCorrect, correctIndex, feedback }

  // Pause timer during feedback
  const timerPaused = showFeedback;

  // Timer
  useEffect(() => {
    if (testComplete || timerPaused) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setTestComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [testComplete, timerPaused]);

  const handleTimerExpired = useCallback(() => {
    setTestComplete(true);
  }, []);

  const handleSelectOption = useCallback(
    (index) => {
      if (showFeedback) return; // lock selection during feedback
      setSelectedOption(index);
    },
    [showFeedback]
  );

  // Submit answer → show inline feedback
  const handleSubmit = useCallback(() => {
    if (selectedOption === null || !currentQuestion || showFeedback) return;

    const isCorrect = engine.recordAnswer(
      currentQuestion.id,
      selectedOption,
      currentQuestion.correctIndex
    );

    setStepStatuses((prev) => ({
      ...prev,
      [questionIndex]: isCorrect ? 'correct' : 'incorrect',
    }));

    setFeedbackResult({
      isCorrect,
      correctIndex: currentQuestion.correctIndex,
      feedback: currentQuestion.feedback,
    });
    setShowFeedback(true);
  }, [selectedOption, currentQuestion, questionIndex, engine, showFeedback]);

  // Advance to next question after reading feedback
  const handleContinue = useCallback(() => {
    const next = engine.getNextQuestion();
    if (!next) {
      setTestComplete(true);
      return;
    }
    setCurrentQuestion(next);
    setQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
    setShowFeedback(false);
    setFeedbackResult(null);
  }, [engine]);

  const handleFinish = useCallback(() => {
    if (selectedOption !== null && currentQuestion && !showFeedback) {
      engine.recordAnswer(
        currentQuestion.id,
        selectedOption,
        currentQuestion.correctIndex
      );
      setStepStatuses((prev) => ({
        ...prev,
        [questionIndex]:
          selectedOption === currentQuestion.correctIndex ? 'correct' : 'incorrect',
      }));
    }
    setTestComplete(true);
  }, [selectedOption, currentQuestion, questionIndex, engine, showFeedback]);

  const handleRedo = useCallback(() => {
    engineRef.current = new AdaptiveEngine(allQuestions, {
      startDifficulty: 1,
      totalQuestions,
    });
    setCurrentQuestion(engineRef.current.getNextQuestion());
    setQuestionIndex(0);
    setSelectedOption(null);
    setTimeRemaining(TEST_DURATION);
    setTestComplete(false);
    setStepStatuses({});
    setShowFeedback(false);
    setFeedbackResult(null);
  }, [totalQuestions]);

  const timeTaken = useMemo(() => TEST_DURATION - timeRemaining, [timeRemaining]);
  const isLastQuestion = questionIndex === totalQuestions - 1;

  // ---------- RENDER ----------

  if (testComplete) {
    return (
      <FeedbackScreen
        results={engine.getResults()}
        questions={allQuestions}
        timeTaken={timeTaken}
        onRedo={handleRedo}
        onNext={onComplete}
      />
    );
  }

  if (!currentQuestion) {
    return <div className="test-player__empty">No questions available.</div>;
  }

  return (
    <div className="test-player">
      <div className="test-player__header">
        <ProgressBar
          total={totalQuestions}
          current={questionIndex}
          statuses={stepStatuses}
        />
        <Timer seconds={timeRemaining} onExpired={handleTimerExpired} />
      </div>

      {/* Difficulty indicator */}
      <div className="test-player__difficulty">
        Difficulty: {engine.currentDifficulty} / 5
      </div>

      <div className="test-player__content">
        <div className="test-player__card">
          {/* Sequence row */}
          <div className="test-player__sequence-wrapper">
            <div className="test-player__sequence">
              {currentQuestion.sequence.map((card, i) => (
                <ShapeCard
                  key={`${currentQuestion.id}-seq-${i}`}
                  config={card.missing ? null : card}
                  isMissing={!!card.missing}
                  size="normal"
                />
              ))}
            </div>
          </div>

          {/* Answer options */}
          <div className="test-player__options">
            {currentQuestion.options.map((opt, i) => {
              let optionClass = '';
              if (showFeedback) {
                if (i === feedbackResult.correctIndex) {
                  optionClass = 'shape-card--correct';
                } else if (i === selectedOption && !feedbackResult.isCorrect) {
                  optionClass = 'shape-card--wrong';
                }
              }
              return (
                <div key={`${currentQuestion.id}-opt-${i}`} className={optionClass}>
                  <ShapeCard
                    config={opt}
                    isSelected={!showFeedback && selectedOption === i}
                    onClick={() => handleSelectOption(i)}
                    size="option"
                  />
                </div>
              );
            })}
          </div>

          {/* Inline feedback banner */}
          {showFeedback && (
            <div
              className={`test-player__inline-feedback ${
                feedbackResult.isCorrect
                  ? 'test-player__inline-feedback--correct'
                  : 'test-player__inline-feedback--incorrect'
              }`}
            >
              <div className="test-player__inline-feedback-icon">
                {feedbackResult.isCorrect ? (
                  <svg viewBox="0 0 24 24" width="28" height="28">
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
                  <svg viewBox="0 0 24 24" width="28" height="28">
                    <circle cx="12" cy="12" r="11" fill="#e74c3c" />
                    <line x1="8" y1="8" x2="16" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="8" x2="8" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <div className="test-player__inline-feedback-text">
                <strong>
                  {feedbackResult.isCorrect ? 'Correct!' : 'Incorrect'}
                </strong>
                {feedbackResult.feedback && (
                  <p>{feedbackResult.feedback}</p>
                )}
                {!feedbackResult.isCorrect && (
                  <p className="test-player__inline-feedback-hint">
                    The correct answer is highlighted in green above.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="test-player__nav">
        {!showFeedback ? (
          <>
            {isLastQuestion ? (
              <button
                className="btn btn--primary"
                onClick={handleSubmit}
                disabled={selectedOption === null}
              >
                Finish
              </button>
            ) : (
              <button
                className="btn btn--primary"
                onClick={handleSubmit}
                disabled={selectedOption === null}
              >
                Submit
              </button>
            )}
          </>
        ) : (
          <button
            className="btn btn--primary"
            onClick={isLastQuestion ? () => setTestComplete(true) : handleContinue}
          >
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
