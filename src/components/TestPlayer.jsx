import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import ShapeCard from './ShapeCard';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import FeedbackScreen from './FeedbackScreen';
import { AdaptiveEngine } from '../engine/adaptive';
import allQuestions from '../data/questions';

const TEST_DURATION = 120; // 2 minutes
const TOTAL_QUESTIONS = allQuestions.length;

export default function TestPlayer() {
  const engineRef = useRef(null);

  if (!engineRef.current) {
    engineRef.current = new AdaptiveEngine(allQuestions, {
      startDifficulty: 1,
      totalQuestions: TOTAL_QUESTIONS,
    });
  }
  const engine = engineRef.current;

  const [currentQuestion, setCurrentQuestion] = useState(() => engine.getNextQuestion());
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(TEST_DURATION);
  const [testComplete, setTestComplete] = useState(false);
  const [stepStatuses, setStepStatuses] = useState({});

  // Timer
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

  const submitAndAdvance = useCallback(() => {
    if (selectedOption === null || !currentQuestion) return;

    const isCorrect = engine.recordAnswer(
      currentQuestion.id,
      selectedOption,
      currentQuestion.correctIndex
    );

    setStepStatuses((prev) => ({
      ...prev,
      [questionIndex]: isCorrect ? 'correct' : 'incorrect',
    }));

    const next = engine.getNextQuestion();
    if (!next) {
      setTestComplete(true);
      return;
    }

    setCurrentQuestion(next);
    setQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
  }, [selectedOption, currentQuestion, questionIndex, engine]);

  const handleFinish = useCallback(() => {
    if (selectedOption !== null && currentQuestion) {
      engine.recordAnswer(
        currentQuestion.id,
        selectedOption,
        currentQuestion.correctIndex
      );
      setStepStatuses((prev) => ({
        ...prev,
        [questionIndex]: selectedOption === currentQuestion.correctIndex ? 'correct' : 'incorrect',
      }));
    }
    setTestComplete(true);
  }, [selectedOption, currentQuestion, questionIndex, engine]);

  const handleRedo = useCallback(() => {
    engineRef.current = new AdaptiveEngine(allQuestions, {
      startDifficulty: 1,
      totalQuestions: TOTAL_QUESTIONS,
    });
    setCurrentQuestion(engineRef.current.getNextQuestion());
    setQuestionIndex(0);
    setSelectedOption(null);
    setTimeRemaining(TEST_DURATION);
    setTestComplete(false);
    setStepStatuses({});
  }, []);

  const timeTaken = useMemo(() => TEST_DURATION - timeRemaining, [timeRemaining]);
  const isLastQuestion = questionIndex === TOTAL_QUESTIONS - 1;

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
      <div className="test-player__header">
        <ProgressBar
          total={TOTAL_QUESTIONS}
          current={questionIndex}
          statuses={stepStatuses}
        />
        <Timer seconds={timeRemaining} onExpired={handleTimerExpired} />
      </div>

      <div className="test-player__content">
        <div className="test-player__card">
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

          <div className="test-player__options">
            {currentQuestion.options.map((opt, i) => (
              <ShapeCard
                key={`${currentQuestion.id}-opt-${i}`}
                config={opt}
                isSelected={selectedOption === i}
                onClick={() => handleSelectOption(i)}
                size="option"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="test-player__nav">
        {questionIndex > 0 && (
          <button className="btn btn--outline" onClick={() => {}}>
            Previous
          </button>
        )}
        {isLastQuestion ? (
          <button
            className="btn btn--primary"
            onClick={handleFinish}
            disabled={selectedOption === null}
          >
            Finish
          </button>
        ) : (
          <button
            className="btn btn--primary"
            onClick={submitAndAdvance}
            disabled={selectedOption === null}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
