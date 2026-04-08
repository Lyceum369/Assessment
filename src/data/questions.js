/**
 * Question bank – Abstract Aptitude Test
 *
 * Card config:
 *   shape      : circle | hexagon | triangle | square | star | cross | arrow | x-mark | pacman
 *   fill       : filled | outline
 *   background : dark | dark-corners | dark-corner-tl/tr/bl/br | corner-lines
 *   dots       : ['tl','tr','bl','br']   (corner dot positions)
 *   rotation   : 0/90/180/270            (degrees CW – for arrow, triangle, pacman)
 *   missing    : true                    (the "?" placeholder)
 */

const questions = [
  /* ================================================================
     Q1 – Shape + shading alternation   (difficulty 1)
     Shapes cycle [circle, star, triangle, square], fill alternates.
     ================================================================ */
  {
    id: 'q1',
    difficulty: 1,
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
      { shape: 'square', fill: 'outline' },
      { shape: 'square', fill: 'filled' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'circle', fill: 'filled' },
    ],
    correctIndex: 1,
    feedback:
      'Both the shape and shading of the symbols change from one symbol to the next. Please look at what option would follow the existing pattern.',
  },

  /* ================================================================
     Q2 – Light/dark symbol pairs   (difficulty 3)
     Cross on dark-corners alternates with triangle/arrow.
     ================================================================ */
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
      { shape: 'arrow', fill: 'outline', background: 'dark-corners' },
      { shape: 'arrow', fill: 'outline' },
    ],
    correctIndex: 3,
    feedback:
      'The shape of the symbol changes from one to the next. The sequence has one large, light symbol followed by one dark, small symbol.',
  },

  /* ================================================================
     Q3 – Rotation with corner dots   (difficulty 4)
     Shapes cycle [circle, hexagon, triangle]. Corner dots rotate.
     ================================================================ */
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
      { shape: 'circle', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'triangle', fill: 'filled', dots: ['bl', 'br'] },
      { shape: 'circle', fill: 'filled', dots: ['tl', 'bl'] },
      { shape: 'circle', fill: 'filled', dots: ['br', 'tr'] },
    ],
    correctIndex: 1,
    feedback:
      'The series is based on two symbols of the same size. Each circular symbol rotates by 90° and the shaded corner for both symbols also rotates by 90° from one symbol to the next.',
  },

  /* ================================================================
     Q4 – Star / Square shading cycle   (difficulty 1)
     Shapes alternate star/square. Fill cycles [O, F, F].
     ================================================================ */
  {
    id: 'q4',
    difficulty: 1,
    sequence: [
      { shape: 'star', fill: 'outline' },
      { shape: 'square', fill: 'filled' },
      { shape: 'star', fill: 'filled' },
      { shape: 'square', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { missing: true },
      { shape: 'star', fill: 'outline' },
      { shape: 'square', fill: 'filled' },
      { shape: 'star', fill: 'filled' },
    ],
    options: [
      { shape: 'square', fill: 'outline' },
      { shape: 'circle', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'square', fill: 'filled' },
      { shape: 'star', fill: 'filled' },
    ],
    correctIndex: 3,
    feedback:
      'Shapes alternate between star and square. The fill follows a repeating cycle of outline, filled, filled.',
  },

  /* ================================================================
     Q5 – Shape pairs outline → filled   (difficulty 2)
     Each shape appears twice: outline then filled. Cycle: cross, star, x.
     ================================================================ */
  {
    id: 'q5',
    difficulty: 2,
    sequence: [
      { shape: 'cross', fill: 'outline' },
      { shape: 'cross', fill: 'filled' },
      { missing: true },
      { shape: 'star', fill: 'filled' },
      { shape: 'x-mark', fill: 'outline' },
      { shape: 'x-mark', fill: 'filled' },
    ],
    options: [
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'outline' },
      { shape: 'cross', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { shape: 'star', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'Each shape appears as a pair: first outline then filled. The shapes cycle: cross, star, x-mark.',
  },

  /* ================================================================
     Q6 – Pac-man 90° rotation   (difficulty 1)
     Pac-man rotates 90° CCW each step. 4-step cycle.
     ================================================================ */
  {
    id: 'q6',
    difficulty: 1,
    sequence: [
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { shape: 'pacman', fill: 'filled', rotation: 270 },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'pacman', fill: 'filled', rotation: 90 },
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { missing: true },
    ],
    options: [
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { shape: 'pacman', fill: 'filled', rotation: 270 },
      { shape: 'pacman', fill: 'filled', rotation: 90 },
      { shape: 'pacman', fill: 'filled', rotation: 45 },
    ],
    correctIndex: 2,
    feedback:
      'The pac-man shape rotates 90° counter-clockwise each step, completing a full cycle every 4 steps.',
  },

  /* ================================================================
     Q7 – X / Cross alternation with rotating dots on dark bg  (difficulty 4)
     ================================================================ */
  {
    id: 'q7',
    difficulty: 4,
    sequence: [
      { shape: 'x-mark', fill: 'outline', background: 'dark', dots: ['tl', 'tr', 'br'] },
      { shape: 'cross', fill: 'outline', background: 'dark', dots: ['tl', 'tr', 'bl'] },
      { missing: true },
      { shape: 'cross', fill: 'outline', background: 'dark', dots: ['tl', 'bl', 'br'] },
      { shape: 'x-mark', fill: 'outline', background: 'dark', dots: ['tl', 'tr', 'bl', 'br'] },
      { shape: 'cross', fill: 'outline', background: 'dark', dots: ['tl', 'tr', 'bl', 'br'] },
    ],
    options: [
      { shape: 'x-mark', fill: 'outline', background: 'dark', dots: ['tl', 'tr'] },
      { shape: 'cross', fill: 'outline', background: 'dark', dots: ['tr', 'bl'] },
      { shape: 'x-mark', fill: 'outline', background: 'dark', dots: ['tr', 'bl', 'br'] },
      { shape: 'cross', fill: 'outline', background: 'dark', dots: ['tl', 'bl', 'br'] },
      { shape: 'x-mark', fill: 'outline', background: 'dark', dots: ['bl', 'br'] },
    ],
    correctIndex: 2,
    feedback:
      'Shapes alternate between X and cross. The dot pattern rotates 90° each step — the missing dot moves clockwise.',
  },

  /* ================================================================
     Q8 – Pac-man with dots, size/fill + rotation  (difficulty 5)
     ================================================================ */
  {
    id: 'q8',
    difficulty: 5,
    sequence: [
      { shape: 'pacman', fill: 'filled', rotation: 315, dots: ['tl', 'tr'] },
      { shape: 'pacman', fill: 'filled', rotation: 225, dots: ['tr'] },
      { shape: 'pacman', fill: 'filled', rotation: 0, dots: ['tl', 'tr'] },
      { shape: 'pacman', fill: 'outline', rotation: 0, dots: ['bl'] },
      { shape: 'pacman', fill: 'outline', rotation: 270, dots: ['bl'] },
      { shape: 'pacman', fill: 'filled', rotation: 225, dots: ['bl', 'br'] },
      { missing: true },
      { shape: 'pacman', fill: 'outline', rotation: 0, dots: ['br'] },
      { shape: 'pacman', fill: 'outline', rotation: 180, dots: ['br'] },
    ],
    options: [
      { shape: 'pacman', fill: 'filled', rotation: 0, dots: ['bl'] },
      { shape: 'pacman', fill: 'filled', rotation: 225, dots: ['bl', 'br'] },
      { shape: 'pacman', fill: 'outline', rotation: 270, dots: ['bl'] },
      { shape: 'pacman', fill: 'filled', rotation: 0, dots: ['bl', 'br'] },
      { shape: 'pacman', fill: 'filled', rotation: 180, dots: ['br'] },
    ],
    correctIndex: 3,
    feedback:
      'Multiple properties cycle simultaneously: the pac-man rotates, fill alternates in groups (filled/outline), and the corner dots rotate.',
  },

  /* ================================================================
     Q9 – Circle/Square with decreasing dark frame  (difficulty 3)
     Shapes alternate circle/square. Background darkens then lightens.
     ================================================================ */
  {
    id: 'q9',
    difficulty: 3,
    sequence: [
      { shape: 'circle', fill: 'outline', background: 'dark-corners' },
      { shape: 'square', fill: 'outline', background: 'dark-corners' },
      { shape: 'circle', fill: 'outline', background: 'dark-corner-tl' },
      { shape: 'square', fill: 'outline' },
      { shape: 'circle', fill: 'outline', background: 'dark-corners' },
      { shape: 'square', fill: 'outline', background: 'dark-corner-tl' },
      { shape: 'circle', fill: 'outline' },
      { missing: true },
      { shape: 'circle', fill: 'outline', background: 'dark-corners' },
    ],
    options: [
      { shape: 'circle', fill: 'outline', background: 'dark-corners' },
      { shape: 'square', fill: 'outline', background: 'dark-corners' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'square', fill: 'outline' },
      { shape: 'square', fill: 'outline', background: 'dark-corner-tl' },
    ],
    correctIndex: 3,
    feedback:
      'Shapes alternate between circle and square. The dark frame follows a repeating cycle that decreases then resets.',
  },

  /* ================================================================
     Q10 – White shapes on dark bg, simple 3-cycle  (difficulty 1)
     Triangle, circle, square on dark cards.
     ================================================================ */
  {
    id: 'q10',
    difficulty: 1,
    sequence: [
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { missing: true },
    ],
    options: [
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
    ],
    correctIndex: 0,
    feedback:
      'Shapes cycle in a repeating sequence: triangle, circle, square. All appear as white shapes on dark cards.',
  },

  /* ================================================================
     Q11 – Stars with rotating corner shading  (difficulty 3)
     All stars, fill alternates. Dark corner triangle rotates 90° CW.
     ================================================================ */
  {
    id: 'q11',
    difficulty: 3,
    sequence: [
      { shape: 'star', fill: 'outline', background: 'dark-corner-bl' },
      { shape: 'star', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'star', fill: 'outline', background: 'dark-corner-tr' },
      { missing: true },
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'filled', background: 'dark-corner-bl' },
      { shape: 'star', fill: 'outline', background: 'dark-corner-br' },
    ],
    options: [
      { shape: 'star', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { shape: 'star', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'star', fill: 'filled', background: 'dark-corners' },
    ],
    correctIndex: 0,
    feedback:
      'All symbols are stars. Fill alternates outline/filled. The dark corner triangle rotates 90° clockwise each step.',
  },

  /* ================================================================
     Q12 – Triangle/Pac-man with progressive dark bg  (difficulty 3)
     Shapes alternate pac-man/triangle. Background darkens.
     ================================================================ */
  {
    id: 'q12',
    difficulty: 3,
    sequence: [
      { missing: true },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark-corner-br' },
      { shape: 'triangle', fill: 'filled', background: 'dark-corners' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark-corners' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
    ],
    options: [
      { shape: 'triangle', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark-corner-tl' },
    ],
    correctIndex: 1,
    feedback:
      'Shapes alternate pac-man and triangle. The background progressively darkens from left to right.',
  },

  /* ================================================================
     Q13 – Mixed shapes 3-group pattern  (difficulty 4)
     Groups of 3: (star, X-shape, pac-man). Fill alternates.
     ================================================================ */
  {
    id: 'q13',
    difficulty: 4,
    sequence: [
      { shape: 'star', fill: 'outline' },
      { shape: 'arrow', fill: 'filled' },
      { shape: 'pacman', fill: 'outline', rotation: 180 },
      { shape: 'star', fill: 'filled' },
      { shape: 'triangle', fill: 'outline', rotation: 180 },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'star', fill: 'outline' },
      { shape: 'triangle', fill: 'filled' },
      { missing: true },
    ],
    options: [
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { shape: 'pacman', fill: 'outline', rotation: 90 },
      { shape: 'pacman', fill: 'outline', rotation: 180 },
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
    ],
    correctIndex: 2,
    feedback:
      'The sequence uses groups of 3 shapes. Each group starts with a star followed by two other shapes. The fill alternates outline/filled throughout.',
  },

  /* ================================================================
     Q14 – Shapes with corner hatching, 3-cycle  (difficulty 2)
     Shapes cycle [star, circle, triangle]. First group has corner-lines.
     ================================================================ */
  {
    id: 'q14',
    difficulty: 2,
    sequence: [
      { shape: 'star', fill: 'filled', background: 'corner-lines' },
      { missing: true },
      { shape: 'triangle', fill: 'filled', background: 'corner-lines' },
      { shape: 'star', fill: 'filled', background: 'corner-lines' },
      { shape: 'circle', fill: 'filled' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'star', fill: 'filled' },
      { shape: 'circle', fill: 'filled' },
    ],
    options: [
      { shape: 'circle', fill: 'filled' },
      { shape: 'star', fill: 'filled', background: 'corner-lines' },
      { shape: 'circle', fill: 'filled', background: 'corner-lines' },
      { shape: 'triangle', fill: 'filled', background: 'corner-lines' },
      { shape: 'circle', fill: 'outline' },
    ],
    correctIndex: 2,
    feedback:
      'Shapes cycle: star, circle, triangle. The first group has diagonal corner lines, the second group does not.',
  },

  /* ================================================================
     Q15 – Alternating pac-man + rotating directional shape  (difficulty 2)
     Even positions = pac-man. Odd positions rotate: up-tri, right-arrow,
     down-tri, left-arrow.
     ================================================================ */
  {
    id: 'q15',
    difficulty: 2,
    sequence: [
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 0, background: 'dark' },
      { shape: 'triangle', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark' },
      { missing: true },
      { shape: 'pacman', fill: 'filled', rotation: 0, background: 'dark' },
    ],
    options: [
      { shape: 'arrow', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 0, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark' },
    ],
    correctIndex: 0,
    feedback:
      'Even positions always show a pac-man. Odd positions show a shape that rotates 90° clockwise each time: up-triangle, right-arrow, down-triangle, left-arrow.',
  },
];

export default questions;
