/**
 * Question bank – The Lyceum Abstract Aptitude Assessment
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
     Q1 – Simple 3-shape cycle on dark backgrounds   (difficulty 1)
     Shapes cycle: triangle → circle → square, all filled on dark.
     ================================================================ */
  {
    id: 'q1',
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
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'square', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'The shapes repeat in a simple cycle: triangle, circle, square. After triangle, the next shape is always circle.',
  },

  /* ================================================================
     Q2 – Shape + fill alternation   (difficulty 1)
     Shapes cycle [circle, star, triangle, square], fill alternates
     filled/outline throughout.
     ================================================================ */
  {
    id: 'q2',
    difficulty: 1,
    sequence: [
      { missing: true },
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
      { shape: 'circle', fill: 'filled' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
    ],
    correctIndex: 1,
    feedback:
      'Shapes cycle: circle, star, triangle, square. Fill alternates: filled, outline, filled, outline. Position 0 is circle-filled.',
  },

  /* ================================================================
     Q3 – Pac-man 90° rotation   (difficulty 1)
     Pac-man rotates 90° counter-clockwise each step.
     ================================================================ */
  {
    id: 'q3',
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
      { shape: 'pacman', fill: 'outline', rotation: 270 },
    ],
    correctIndex: 2,
    feedback:
      'The pac-man rotates 90° counter-clockwise each step. After facing right (0°), it next faces upward (270°).',
  },

  /* ================================================================
     Q4 – Constant circle + alternating dark shapes   (difficulty 2)
     Inspired by real Saville Q1. Circle-outline at every other
     position; dark positions alternate star-filled and x-mark-filled.
     ================================================================ */
  {
    id: 'q4',
    difficulty: 2,
    sequence: [
      { shape: 'circle', fill: 'outline' },
      { shape: 'star', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'x-mark', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'star', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline' },
      { missing: true },
      { shape: 'circle', fill: 'outline' },
    ],
    options: [
      { shape: 'star', fill: 'outline' },
      { shape: 'x-mark', fill: 'outline' },
      { shape: 'x-mark', fill: 'filled', background: 'dark' },
      { shape: 'star', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
    ],
    correctIndex: 2,
    feedback:
      'Circle-outline appears at every other position. The dark positions alternate between star and x-mark. After star, the next dark shape is x-mark.',
  },

  /* ================================================================
     Q5 – Shape pairs: outline then filled   (difficulty 2)
     Each shape appears twice: first outline then filled.
     Cycle: cross, star, x-mark.
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
      { shape: 'cross', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { shape: 'x-mark', fill: 'outline' },
      { shape: 'cross', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'Each shape appears as a pair: first outline then filled. The shapes cycle: cross, star, x-mark. The missing card is star-outline.',
  },

  /* ================================================================
     Q6 – Pac-man + rotating directional shape   (difficulty 2)
     Inspired by real Saville Q2 (screenshot 5). Even positions =
     pac-man alternating 180/0. Odd positions = directional shapes
     rotating CW: up-tri, right-arrow, down-tri, left-arrow.
     ================================================================ */
  {
    id: 'q6',
    difficulty: 2,
    sequence: [
      { shape: 'pacman', fill: 'outline', rotation: 0 },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'outline', rotation: 270 },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'outline', rotation: 0 },
      { shape: 'triangle', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'pacman', fill: 'outline', rotation: 270 },
      { missing: true },
    ],
    options: [
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'outline', rotation: 180 },
      { shape: 'arrow', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'pacman', fill: 'outline', rotation: 0 },
    ],
    correctIndex: 2,
    feedback:
      'Even positions show pac-man (alternating right/up). Odd positions show directional shapes rotating 90° clockwise: up-triangle, right-arrow, down-triangle, left-arrow.',
  },

  /* ================================================================
     Q7 – Four-shape cycle with fill pattern   (difficulty 2)
     Inspired by real Saville Q3 (screenshot 4). Shapes cycle:
     triangle, cross, hexagon, star. Fill follows a pattern.
     ================================================================ */
  {
    id: 'q7',
    difficulty: 2,
    sequence: [
      { shape: 'triangle', fill: 'filled' },
      { shape: 'cross', fill: 'outline' },
      { shape: 'hexagon', fill: 'filled' },
      { shape: 'star', fill: 'filled' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'cross', fill: 'outline' },
      { shape: 'hexagon', fill: 'filled' },
      { missing: true },
      { shape: 'triangle', fill: 'filled' },
    ],
    options: [
      { shape: 'cross', fill: 'outline' },
      { shape: 'hexagon', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { shape: 'cross', fill: 'filled' },
    ],
    correctIndex: 2,
    feedback:
      'Shapes cycle: triangle, cross, hexagon, star. The fill follows a repeating pattern. Each shape keeps its own fill rule across repetitions — star alternates filled/outline.',
  },

  /* ================================================================
     Q8 – Cross / shape alternation with dark corners   (difficulty 3)
     Cross-dark-corners at even positions. Odd positions alternate
     triangle-outline and arrow-dark-corners.
     ================================================================ */
  {
    id: 'q8',
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
      'Cross with dark corners appears at every even position. Odd positions alternate between triangle-outline and arrow with dark corners.',
  },

  /* ================================================================
     Q9 – Stars with rotating dark corner   (difficulty 3)
     All stars; fill alternates outline/filled. The dark corner
     triangle rotates 90° clockwise: bl → br → tr → tl → none.
     ================================================================ */
  {
    id: 'q9',
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
      'All shapes are stars. Fill alternates outline/filled. The dark corner rotates 90° clockwise each step: bottom-left → bottom-right → top-right → top-left → none.',
  },

  /* ================================================================
     Q10 – Arrow/triangle direction rotation on dark   (difficulty 3)
     Inspired by real Saville Q3 (screenshot 1). Shapes alternate
     arrow and triangle on dark bg. Both rotate 90° CW each pair.
     ================================================================ */
  {
    id: 'q10',
    difficulty: 3,
    sequence: [
      { shape: 'arrow', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'triangle', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'arrow', fill: 'filled', rotation: 180, background: 'dark' },
      { missing: true },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
    ],
    options: [
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'triangle', fill: 'outline', background: 'dark' },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
    ],
    correctIndex: 1,
    feedback:
      'Shapes alternate between arrow and triangle, all on dark backgrounds. Both rotate 180° every two steps: left-facing pair, then right-facing pair, repeating.',
  },

  /* ================================================================
     Q11 – Triangle/circle/square with fill + background   (difficulty 3)
     Inspired by real Saville Q2 (screenshot 2). Shapes cycle
     tri/circle/square. Fill alternates, background shifts.
     ================================================================ */
  {
    id: 'q11',
    difficulty: 3,
    sequence: [
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { missing: true },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
    ],
    options: [
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'outline' },
      { shape: 'triangle', fill: 'outline' },
    ],
    correctIndex: 2,
    feedback:
      'Shapes cycle: triangle, circle, square. The first group appears on dark backgrounds; the next starts with an outline triangle (contrast shift). Position 2 completes the first group: square-filled-dark.',
  },

  /* ================================================================
     Q12 – Pac-man/triangle with progressive darkening   (difficulty 3)
     Shapes alternate pac-man and triangle. Background darkens
     progressively from left to right.
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
    correctIndex: 2,
    feedback:
      'Shapes alternate pac-man (facing left) and triangle. The background progressively darkens from left to right: no background → corner → corners → fully dark.',
  },

  /* ================================================================
     Q13 – X / Cross with rotating dots on dark   (difficulty 4)
     Shapes alternate x-mark and cross on dark backgrounds.
     Dots rotate — the missing dot moves clockwise each step.
     ================================================================ */
  {
    id: 'q13',
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
      'Shapes alternate x-mark and cross, all on dark backgrounds. The dot pattern has one missing corner that rotates clockwise each step.',
  },

  /* ================================================================
     Q14 – Mixed shapes in 3-group pattern   (difficulty 4)
     Groups of 3: each starts with star, followed by two shapes.
     Fill alternates outline/filled throughout.
     ================================================================ */
  {
    id: 'q14',
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
      'The sequence has groups of 3 shapes. Each group starts with a star. Fill alternates outline/filled throughout the entire sequence.',
  },

  /* ================================================================
     Q15 – Multi-variable: shape cycle + fill + dark corner   (difficulty 5)
     Shapes cycle [triangle, hexagon, square]. Fill cycles
     [filled, outline, filled]. Background corner rotates CW.
     Three variables change simultaneously.
     ================================================================ */
  {
    id: 'q15',
    difficulty: 5,
    sequence: [
      { shape: 'triangle', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'hexagon', fill: 'outline', background: 'dark-corner-tr' },
      { shape: 'square', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'triangle', fill: 'outline', background: 'dark-corner-bl' },
      { shape: 'hexagon', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'square', fill: 'outline', background: 'dark-corner-tr' },
      { shape: 'triangle', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'hexagon', fill: 'outline', background: 'dark-corner-bl' },
      { missing: true },
    ],
    options: [
      { shape: 'square', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'square', fill: 'outline', background: 'dark-corner-tl' },
      { shape: 'triangle', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'square', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'hexagon', fill: 'filled', background: 'dark-corner-tl' },
    ],
    correctIndex: 0,
    feedback:
      'Three properties change simultaneously. Shapes cycle: triangle, hexagon, square. Fill alternates: filled, outline, filled, outline. The dark corner rotates clockwise: TL → TR → BR → BL, repeating.',
  },
];

export default questions;
