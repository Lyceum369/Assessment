/**
 * Adaptive difficulty engine.
 *
 * - Starts at a base difficulty (default 2).
 * - Correct answer  → difficulty + 1  (max 5).
 * - Incorrect answer → difficulty - 1  (min 1).
 * - Picks the next unused question closest to current difficulty.
 */

export class AdaptiveEngine {
  constructor(questionPool, { startDifficulty = 2, totalQuestions = null } = {}) {
    this.pool = [...questionPool];
    this.difficulty = startDifficulty;
    this.usedIds = new Set();
    this.history = [];
    this.totalQuestions = totalQuestions || questionPool.length;
  }

  /** Pick the next question from the pool. Returns null when done. */
  getNextQuestion() {
    if (this.history.length >= this.totalQuestions) return null;

    const unused = this.pool.filter((q) => !this.usedIds.has(q.id));
    if (unused.length === 0) return null;

    // Sort by closeness to current difficulty, then by id for stability
    unused.sort((a, b) => {
      const da = Math.abs(a.difficulty - this.difficulty);
      const db = Math.abs(b.difficulty - this.difficulty);
      if (da !== db) return da - db;
      return a.difficulty - b.difficulty;
    });

    const question = unused[0];
    this.usedIds.add(question.id);
    return question;
  }

  /** Record an answer and adjust difficulty. */
  recordAnswer(questionId, selectedIndex, correctIndex) {
    const isCorrect = selectedIndex === correctIndex;
    this.history.push({ questionId, selectedIndex, correctIndex, isCorrect });

    if (isCorrect) {
      this.difficulty = Math.min(5, this.difficulty + 1);
    } else {
      this.difficulty = Math.max(1, this.difficulty - 1);
    }

    return isCorrect;
  }

  getResults() {
    const correct = this.history.filter((h) => h.isCorrect).length;
    return {
      total: this.history.length,
      correct,
      incorrect: this.history.length - correct,
      score: this.history.length > 0 ? Math.round((correct / this.history.length) * 100) : 0,
      history: this.history,
    };
  }

  get currentDifficulty() {
    return this.difficulty;
  }

  get questionsAnswered() {
    return this.history.length;
  }
}
