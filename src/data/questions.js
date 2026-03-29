/**
 * Question bank for the Abstract Aptitude Test.
 *
 * Each question has:
 *   id          – unique identifier
 *   difficulty  – 1 (easiest) to 5 (hardest)
 *   sequence    – ordered array of card configs (one will be { missing: true })
 *   options     – 5 answer choices
 *   correctIndex – index into options[] for the right answer
 *   feedback    – explanation shown after practice mode
 *
 * Card config shape:
 *   { shape, fill, background?, dots?, missing? }
 */

const questions = [
  // ------------------------------------------------------------------
  // Q1 – Shape + Shading alternation  (Difficulty 2)
  // Pattern: shapes cycle [circle, star, triangle, square]
  //          fill alternates [filled, outline, filled, outline …]
  // The ? is at position 0.  Next card is filled circle → position 0
  // must be outline square.
  // ------------------------------------------------------------------
  {
    id: 'q1',
    difficulty: 2,
    sequence: [
      { missing: true },
      { shape: 'circle', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'square', fill: 'outline' },
      { shape: 'circle', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'square', fill: 'outline' },
    ],
    options: [
      { shape: 'star', fill: 'outline' },
      { shape: 'square', fill: 'outline' },   // correct
      { shape: 'square', fill: 'filled' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'circle', fill: 'filled' },
    ],
    correctIndex: 1,
    feedback:
      'Both the shape and shading of the symbols change from one symbol to the next. Please look at what option would follow the existing pattern.',
  },

  // ------------------------------------------------------------------
  // Q2 – Light / Dark symbol pairs  (Difficulty 3)
  // Pattern: positions alternate cross(dark-corners) with
  //          triangle(white) or arrow(dark-corners).
  //          Non-cross shapes at even indices cycle: triangle, arrow.
  //          "One large, light symbol followed by one dark, small symbol."
  // The ? is at position 7 → arrow on dark-corners.
  // ------------------------------------------------------------------
  {
    id: 'q2',
    difficulty: 3,
    sequence: [
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
      { shape: 'arrow', fill: 'outline', background: 'dark-corners' },
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
      { missing: true },
    ],
    options: [
      { shape: 'triangle', fill: 'outline', background: 'dark-corner-tl' },
      { shape: 'x-mark', fill: 'outline' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'arrow', fill: 'outline', background: 'dark-corners' }, // correct
      { shape: 'arrow', fill: 'outline' },
    ],
    correctIndex: 3,
    feedback:
      'The shape of the symbol changes from one to the next. The sequence has one large, light symbol followed by one dark, small symbol. Please look carefully to see which symbol is missing.',
  },

  // ------------------------------------------------------------------
  // Q3 – Rotation pattern with corner dots  (Difficulty 4)
  // Pattern: shapes cycle [circle, hexagon, triangle].
  //          Corner dots rotate 90° clockwise each step.
  //          First 3 cards: 4 dots. After the transition the dot count
  //          drops as the shaded corner overlaps a dot position.
  // The ? is at position 3 → circle with 2 bottom dots.
  // ------------------------------------------------------------------
  {
    id: 'q3',
    difficulty: 4,
    sequence: [
      { shape: 'circle', fill: 'filled', dots: ['tl', 'tr', 'bl', 'br'] },
      { shape: 'hexagon', fill: 'filled', dots: ['tl', 'tr', 'bl', 'br'] },
      { shape: 'triangle', fill: 'filled', dots: ['tl', 'tr', 'bl', 'br'] },
      { missing: true },
      { shape: 'hexagon', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'triangle', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'circle', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'hexagon', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'triangle', fill: 'filled', dots: ['bl', 'br'] },
    ],
    options: [
      { shape: 'hexagon', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'circle', fill: 'filled', dots: ['bl', 'br'] },   // correct
      { shape: 'triangle', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'circle', fill: 'filled', dots: ['tl', 'bl'] },
      { shape: 'circle', fill: 'filled', dots: ['br', 'tr'] },
    ],
    correctIndex: 1,
    feedback:
      'The series is based on two symbols of the same size. Each circular symbol rotates by 90° and the shaded corner for both symbols also rotates by 90° from one symbol to the next. Please look carefully to find the missing symbol.',
  },
];

export default questions;
