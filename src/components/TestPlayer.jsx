import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import ShapeCard from './ShapeCard';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import FeedbackScreen from './FeedbackScreen';
import { AdaptiveEngine } from '../engine/adaptive';
import allQuestions from '../data/questions';

const TEST_DURATION = 120; // 2 minutes

export default function TestPlayer() {
  const engineRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Initialize engine once
  if (!engineRef.current) {
    engineRef.current = new AdaptiveEngine(allQuestions, {
      startDifficulty: 2,
      totalQuestions: allQuestions.length,
    });
  }
  const engine = engineRef.current;

  const [currentQuestion, setCurrentQuestion] = useState(() => engine.getNextQuestion());
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(TEST_DURATION);
  const [testComplete, setTestComplete] = useState(false);
  const [stepStatuses, setStepStatuses] = useState({});
  const [isPractice] = useState(true); // Practice mode for now

  // Timer countdown
  useEffect(() => {
    if (testComplete) return;
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
  }, [testComplete]);

  const handleTimerExpired = useCallback(() => {
    setTestComplete(true);
  }, []);

  const handleSelectOption = useCallback((index) => {
    setSelectedOption(index);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedOption === null || !currentQuestion) return;

    // Record the answer
    const isCorrect = engine.recordAnswer(
      currentQuestion.id,
      selectedOption,
      currentQuestion.correctIndex
    );

    // Update step status
    setStepStatuses((prev) => ({
      ...prev,
      [questionIndex]: isCorrect ? 'correct' : 'incorrect',
    }));

    // Get next question
    const next = engine.getNextQuestion();
    if (!next) {
      setTestComplete(true);
      return;
    }

    setCurrentQuestion(next);
    setQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
  }, [selectedOption, currentQuestion, questionIndex, engine]);

  const handlePrevious = useCallback(() => {
    // In adaptive mode, no going back (simplified for prototype)
  }, []);

  const handleRedo = useCallback(() => {
    engineRef.current = new AdaptiveEngine(allQuestions, {
      startDifficulty: 2,
      totalQuestions: allQuestions.length,
    });
    startTimeRef.current = Date.now();
    setCurrentQuestion(engineRef.current.getNextQuestion());
    setQuestionIndex(0);
    setSelectedOption(null);
    setTimeRemaining(TEST_DURATION);
    setTestComplete(false);
    setStepStatuses({});
  }, []);

  const timeTaken = useMemo(() => {
    return TEST_DURATION - timeRemaining;
  }, [timeRemaining]);

  // ---------- RENDER ----------

  if (testComplete) {
    return (
      <FeedbackScreen
        results={engine.getResults()}
        questions={allQuestions}
        timeTaken={timeTaken}
        onRedo={handleRedo}
        onNext={() => alert('More questions coming soon!')}
      />
    );
  }

  if (!currentQuestion) {
    return <div className="test-player__empty">No questions available.</div>;
  }

  return (
    <div className="test-player">
      {/* Header bar */}
      <div className="test-player__header">
        <ProgressBar
          total={allQuestions.length}
          current={questionIndex}
          statuses={stepStatuses}
        />
        <Timer
          seconds={timeRemaining}
          onExpired={handleTimerExpired}
        />
      </div>

      {/* Main content */}
      <div className="test-player__content">
        <div className="test-player__card">
          {/* Sequence row */}
          <div className="test-player__sequence-wrapper">
            <div className="test-player__sequence">
              {currentQuestion.sequence.map((card, i) => (
                <ShapeCard
                  key={i}
                  config={card.missing ? null : card}
                  isMissing={!!card.missing}
                  size="normal"
                />
              ))}
            </div>
          </div>

          {/* Answer options */}
          <div className="test-player__options">
            {currentQuestion.options.map((opt, i) => (
              <ShapeCard
                key={i}
                config={opt}
                isSelected={selectedOption === i}
                onClick={() => handleSelectOption(i)}
                size="option"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="test-player__nav">
        {questionIndex > 0 && (
          <button className="btn btn--outline" onClick={handlePrevious}>
            Previous
          </button>
        )}
        <button
          className="btn btn--primary"
          onClick={handleNext}
          disabled={selectedOption === null}
        >
          Next
        </button>
      </div>
    </div>
  );
}
