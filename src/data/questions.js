/**
 * Question bank – The Lyceum Abstract Aptitude Assessment
 *
 * Card config:
 *   shape      : circle | hexagon | triangle | square | star | cross | arrow | x-mark | pacman
 *   fill       : filled | outline | half   (half = split fill, clipped by rotation angle)
 *   size       : small | medium | large    (shape scale inside the card; omit = medium)
 *   background : dark | dark-corners | dark-corner-tl/tr/bl/br | corner-lines
 *   dots       : ['tl','tr','bl','br']     (corner dot positions)
 *   rotation   : 0/90/180/270/etc          (degrees CW – shape direction or half-fill angle)
 *   missing    : true                      (the "?" placeholder)
 *
 * Question-level:
 *   layout     : 'grid'                   (renders 9 items as 3×3 matrix instead of row)
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
      { missing: true },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
    ],
    options: [
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline', background: 'dark' },
      { shape: 'circle', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'The shapes repeat in a simple cycle: triangle, circle, square. Position 5 in the cycle is circle.',
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
      { shape: 'arrow', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', background: 'dark' },
      { shape: 'arrow', fill: 'outline', rotation: 180, background: 'dark' },
      { shape: 'triangle', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'filled', rotation: 180 },
    ],
    correctIndex: 0,
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
      { missing: true },
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
      { shape: 'arrow', fill: 'outline', background: 'dark-corners' },
    ],
    options: [
      { shape: 'arrow', fill: 'outline', background: 'dark-corners' },
      { shape: 'triangle', fill: 'outline', background: 'dark-corners' },
      { shape: 'arrow', fill: 'filled', background: 'dark-corners' },
      { shape: 'arrow', fill: 'outline' },
      { shape: 'cross', fill: 'outline', background: 'dark-corners' },
    ],
    correctIndex: 0,
    feedback:
      'Cross with dark corners appears at every even position. Odd positions alternate between triangle-outline and arrow with dark corners. Position 4 is an odd slot after triangle, so it is arrow with dark corners.',
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
      { missing: true },
      { shape: 'triangle', fill: 'outline', rotation: 180 },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'star', fill: 'outline' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'pacman', fill: 'outline', rotation: 180 },
    ],
    options: [
      { shape: 'star', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'arrow', fill: 'filled' },
      { shape: 'triangle', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'Groups of 3: each group starts with a star. Fill alternates outline/filled throughout. Position 4 starts a new group, so it is star-filled.',
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
      { missing: true },
      { shape: 'square', fill: 'outline', background: 'dark-corner-tr' },
      { shape: 'triangle', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'hexagon', fill: 'outline', background: 'dark-corner-bl' },
      { shape: 'square', fill: 'filled', background: 'dark-corner-tl' },
    ],
    options: [
      { shape: 'hexagon', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'hexagon', fill: 'outline', background: 'dark-corner-tl' },
      { shape: 'hexagon', fill: 'filled', background: 'dark-corner-br' },
      { shape: 'triangle', fill: 'filled', background: 'dark-corner-tl' },
      { shape: 'square', fill: 'filled', background: 'dark-corner-tl' },
    ],
    correctIndex: 0,
    feedback:
      'Three properties change simultaneously. Shapes cycle: triangle, hexagon, square. Fill alternates: filled, outline. The dark corner rotates clockwise: TL → TR → BR → BL. Position 5 is hexagon-filled-TL.',
  },

  /* ================================================================
     Q16 – Triangle/arrow rotation with single moving corner dot (D3)
     Shapes alternate triangle/arrow, both rotate 90° CW each step.
     A single dot rotates through corners: TL → TR → BR → BL.
     ================================================================ */
  {
    id: 'q16',
    difficulty: 3,
    sequence: [
      { shape: 'triangle', fill: 'filled', rotation: 0, dots: ['tl'] },
      { shape: 'arrow', fill: 'filled', rotation: 90, dots: ['tr'] },
      { shape: 'triangle', fill: 'filled', rotation: 180, dots: ['br'] },
      { shape: 'arrow', fill: 'filled', rotation: 270, dots: ['bl'] },
      { shape: 'triangle', fill: 'filled', rotation: 0, dots: ['tl'] },
      { shape: 'arrow', fill: 'filled', rotation: 90, dots: ['tr'] },
      { shape: 'triangle', fill: 'filled', rotation: 180, dots: ['br'] },
      { missing: true },
    ],
    options: [
      { shape: 'arrow', fill: 'filled', rotation: 270, dots: ['bl'] },
      { shape: 'arrow', fill: 'filled', rotation: 270, dots: ['tr'] },
      { shape: 'triangle', fill: 'filled', rotation: 270, dots: ['bl'] },
      { shape: 'arrow', fill: 'outline', rotation: 270, dots: ['bl'] },
      { shape: 'arrow', fill: 'filled', rotation: 180, dots: ['bl'] },
    ],
    correctIndex: 0,
    feedback:
      'Two patterns interleave. Shapes alternate: triangle, arrow. Both rotate 90° clockwise each step. The single dot moves through corners: TL → TR → BR → BL, repeating.',
  },

  /* ================================================================
     Q17 – Cross/x-mark on dark with fill cycling              (D2)
     Shapes alternate cross/x-mark, all on dark background.
     Fill alternates: filled, outline, filled, outline…
     ================================================================ */
  {
    id: 'q17',
    difficulty: 2,
    sequence: [
      { missing: true },
      { shape: 'x-mark', fill: 'outline', background: 'dark' },
      { shape: 'cross', fill: 'filled', background: 'dark' },
      { shape: 'x-mark', fill: 'outline', background: 'dark' },
      { shape: 'cross', fill: 'filled', background: 'dark' },
      { shape: 'x-mark', fill: 'outline', background: 'dark' },
      { shape: 'cross', fill: 'filled', background: 'dark' },
      { shape: 'x-mark', fill: 'outline', background: 'dark' },
    ],
    options: [
      { shape: 'cross', fill: 'filled', background: 'dark' },
      { shape: 'cross', fill: 'outline', background: 'dark' },
      { shape: 'x-mark', fill: 'filled', background: 'dark' },
      { shape: 'x-mark', fill: 'outline', background: 'dark' },
      { shape: 'cross', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'Shapes alternate cross/x-mark. Fill alternates filled/outline. All on dark. Working backwards from position 2 (x-mark outline), position 1 is cross filled.',
  },

  /* ================================================================
     Q18 – Tri/sq/circle cycle with light-then-dark phases     (D3)
     3-shape cycle: triangle, square, circle. First group on light,
     second group on dark, third group on light again.
     ================================================================ */
  {
    id: 'q18',
    difficulty: 3,
    sequence: [
      { shape: 'triangle', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
      { shape: 'circle', fill: 'filled' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
      { missing: true },
    ],
    options: [
      { shape: 'circle', fill: 'filled' },
      { shape: 'circle', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'square', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'Shapes cycle in groups of three: triangle, square, circle. The background alternates every group: light, dark, light. The missing card is the third in the light group.',
  },

  /* ================================================================
     Q19 – Arrow/triangle pure directional rotation on dark    (D2)
     Alternating arrow/triangle, both on dark.
     Direction rotates 90° CW: 0 → 90 → 180 → 270.
     ================================================================ */
  {
    id: 'q19',
    difficulty: 2,
    sequence: [
      { shape: 'arrow', fill: 'outline', rotation: 0, background: 'dark' },
      { shape: 'triangle', fill: 'outline', rotation: 90, background: 'dark' },
      { shape: 'arrow', fill: 'outline', rotation: 180, background: 'dark' },
      { missing: true },
      { shape: 'arrow', fill: 'outline', rotation: 0, background: 'dark' },
      { shape: 'triangle', fill: 'outline', rotation: 90, background: 'dark' },
      { shape: 'arrow', fill: 'outline', rotation: 180, background: 'dark' },
      { shape: 'triangle', fill: 'outline', rotation: 270, background: 'dark' },
    ],
    options: [
      { shape: 'triangle', fill: 'outline', rotation: 270, background: 'dark' },
      { shape: 'triangle', fill: 'outline', rotation: 180, background: 'dark' },
      { shape: 'arrow', fill: 'outline', rotation: 270, background: 'dark' },
      { shape: 'triangle', fill: 'filled', rotation: 270, background: 'dark' },
      { shape: 'triangle', fill: 'outline', rotation: 0, background: 'dark' },
    ],
    correctIndex: 0,
    feedback:
      'Shapes alternate: arrow, triangle. Direction rotates 90° clockwise each step: 0° → 90° → 180° → 270°. Position 4 is triangle at 270°.',
  },

  /* ================================================================
     Q20 – 4-shape cycle on dark with fill alternation          (D2)
     Shapes cycle: hexagon, circle, square, triangle – all on dark.
     Fill alternates: filled, outline, filled, outline…
     ================================================================ */
  {
    id: 'q20',
    difficulty: 2,
    sequence: [
      { shape: 'hexagon', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { shape: 'triangle', fill: 'outline', background: 'dark' },
      { shape: 'hexagon', fill: 'filled', background: 'dark' },
      { shape: 'circle', fill: 'outline', background: 'dark' },
      { shape: 'square', fill: 'filled', background: 'dark' },
      { missing: true },
    ],
    options: [
      { shape: 'triangle', fill: 'outline', background: 'dark' },
      { shape: 'triangle', fill: 'filled', background: 'dark' },
      { shape: 'hexagon', fill: 'outline', background: 'dark' },
      { shape: 'circle', fill: 'outline', background: 'dark' },
      { shape: 'triangle', fill: 'outline' },
    ],
    correctIndex: 0,
    feedback:
      'Four shapes cycle in order: hexagon, circle, square, triangle. Fill alternates: filled, outline. All on dark backgrounds. The next card continues both patterns.',
  },

  /* ================================================================
     Q21 – 3-shape cycle with mid-sequence missing             (D1)
     Shapes cycle: star(filled), square(filled), circle(outline).
     The missing element is in position 4 (middle of the row).
     ================================================================ */
  {
    id: 'q21',
    difficulty: 1,
    sequence: [
      { shape: 'star', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
      { shape: 'circle', fill: 'outline' },
      { missing: true },
      { shape: 'square', fill: 'filled' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
      { shape: 'circle', fill: 'outline' },
    ],
    options: [
      { shape: 'star', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'circle', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
    ],
    correctIndex: 0,
    feedback:
      'Three shapes repeat in a fixed cycle: star (filled), square (filled), circle (outline). Position 4 restarts the cycle with star (filled).',
  },

  /* ================================================================
     Q22 – Pacman/triangle alternation with 90° CW rotation    (D3)
     Shapes alternate pacman/triangle. Each rotates 90° CW per
     appearance: 0° → 90° → 180° → 270°.
     ================================================================ */
  {
    id: 'q22',
    difficulty: 3,
    sequence: [
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { shape: 'triangle', fill: 'filled', rotation: 0 },
      { shape: 'pacman', fill: 'filled', rotation: 90 },
      { shape: 'triangle', fill: 'filled', rotation: 90 },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'triangle', fill: 'filled', rotation: 180 },
      { missing: true },
      { shape: 'triangle', fill: 'filled', rotation: 270 },
    ],
    options: [
      { shape: 'pacman', fill: 'filled', rotation: 270 },
      { shape: 'pacman', fill: 'filled', rotation: 180 },
      { shape: 'pacman', fill: 'filled', rotation: 90 },
      { shape: 'triangle', fill: 'filled', rotation: 270 },
      { shape: 'pacman', fill: 'outline', rotation: 270 },
    ],
    correctIndex: 0,
    feedback:
      'Shapes alternate: pacman, triangle. Each shape rotates 90° clockwise with every appearance: 0° → 90° → 180° → 270°. The missing pacman is at 270°.',
  },

  /* ================================================================
     Q23 – ABBA shape pattern: star/cross symmetry             (D3)
     Shapes follow an ABBA pattern: star, cross, cross, star.
     Stars are always outline. Crosses alternate: filled, outline.
     ================================================================ */
  {
    id: 'q23',
    difficulty: 3,
    sequence: [
      { shape: 'star', fill: 'outline' },
      { shape: 'cross', fill: 'filled' },
      { shape: 'cross', fill: 'outline' },
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'outline' },
      { shape: 'cross', fill: 'filled' },
      { missing: true },
      { shape: 'star', fill: 'outline' },
    ],
    options: [
      { shape: 'cross', fill: 'outline' },
      { shape: 'cross', fill: 'filled' },
      { shape: 'star', fill: 'outline' },
      { shape: 'star', fill: 'filled' },
      { shape: 'cross', fill: 'filled', background: 'dark' },
    ],
    correctIndex: 0,
    feedback:
      'Shapes follow a symmetric ABBA pattern: star, cross, cross, star. Stars are always outline. Crosses alternate fill each pair: filled, outline. The missing cross is outline.',
  },

  /* ================================================================
     Q24 – Pacman rotation on dark, missing at position 1      (D4)
     All pacman shapes on dark backgrounds, rotating 90° CW.
     The missing element is the FIRST card – requires backward
     deduction from the visible pattern.
     ================================================================ */
  {
    id: 'q24',
    difficulty: 4,
    sequence: [
      { missing: true },
      { shape: 'pacman', fill: 'filled', rotation: 90, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 270, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 0, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 90, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 180, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 270, background: 'dark' },
    ],
    options: [
      { shape: 'pacman', fill: 'filled', rotation: 0, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 90, background: 'dark' },
      { shape: 'pacman', fill: 'outline', rotation: 0, background: 'dark' },
      { shape: 'pacman', fill: 'filled', rotation: 0 },
      { shape: 'pacman', fill: 'filled', rotation: 270, background: 'dark' },
    ],
    correctIndex: 0,
    feedback:
      'The pacman rotates 90° clockwise each step: 0° → 90° → 180° → 270°, repeating. All on dark backgrounds. Working backwards from position 2 (90°), position 1 must be 0°.',
  },

  /* ================================================================
     Q25 – Triangle rotation with clockwise dot, mid-missing   (D2)
     Triangle rotates 90° CW each step. A single dot also moves
     clockwise through corners: TL → TR → BR → BL.
     Missing element is in the middle of the sequence.
     ================================================================ */
  {
    id: 'q25',
    difficulty: 2,
    sequence: [
      { shape: 'triangle', fill: 'outline', rotation: 0, dots: ['tl'] },
      { shape: 'triangle', fill: 'outline', rotation: 90, dots: ['tr'] },
      { shape: 'triangle', fill: 'outline', rotation: 180, dots: ['br'] },
      { shape: 'triangle', fill: 'outline', rotation: 270, dots: ['bl'] },
      { missing: true },
      { shape: 'triangle', fill: 'outline', rotation: 90, dots: ['tr'] },
      { shape: 'triangle', fill: 'outline', rotation: 180, dots: ['br'] },
      { shape: 'triangle', fill: 'outline', rotation: 270, dots: ['bl'] },
    ],
    options: [
      { shape: 'triangle', fill: 'outline', rotation: 0, dots: ['tl'] },
      { shape: 'triangle', fill: 'outline', rotation: 0, dots: ['tr'] },
      { shape: 'triangle', fill: 'outline', rotation: 90, dots: ['tl'] },
      { shape: 'triangle', fill: 'outline', rotation: 0, dots: ['br'] },
      { shape: 'triangle', fill: 'outline', rotation: 270, dots: ['tl'] },
    ],
    correctIndex: 0,
    feedback:
      'The triangle rotates 90° clockwise each step. The single dot also moves clockwise: TL → TR → BR → BL. Both patterns reset after four steps, so position 5 matches position 1.',
  },

  /* ================================================================
     Q26 – Half-filled circles/squares with rotating split       (D3)
     Shapes alternate circle/square. Both use half-fill.
     The split angle rotates 90° CW each step: 0 → 90 → 180 → 270.
     ================================================================ */
  {
    id: 'q26',
    difficulty: 3,
    sequence: [
      { shape: 'circle', fill: 'half', rotation: 0 },
      { shape: 'square', fill: 'half', rotation: 90 },
      { shape: 'circle', fill: 'half', rotation: 180 },
      { shape: 'square', fill: 'half', rotation: 270 },
      { shape: 'circle', fill: 'half', rotation: 0 },
      { shape: 'square', fill: 'half', rotation: 90 },
      { shape: 'circle', fill: 'half', rotation: 180 },
      { missing: true },
    ],
    options: [
      { shape: 'square', fill: 'half', rotation: 270 },
      { shape: 'square', fill: 'half', rotation: 90 },
      { shape: 'circle', fill: 'half', rotation: 270 },
      { shape: 'square', fill: 'filled' },
      { shape: 'square', fill: 'half', rotation: 0 },
    ],
    correctIndex: 0,
    feedback:
      'Shapes alternate: circle, square. Both use half-fill. The split angle rotates 90° clockwise each step: 0° → 90° → 180° → 270°.',
  },

  /* ================================================================
     Q27 – Size progression with shape cycle                     (D2)
     Shapes cycle: circle, square, triangle. Each group goes
     small → medium → large. All filled.
     ================================================================ */
  {
    id: 'q27',
    difficulty: 2,
    sequence: [
      { shape: 'circle', fill: 'filled', size: 'small' },
      { shape: 'circle', fill: 'filled', size: 'medium' },
      { shape: 'circle', fill: 'filled', size: 'large' },
      { shape: 'square', fill: 'filled', size: 'small' },
      { shape: 'square', fill: 'filled', size: 'medium' },
      { shape: 'square', fill: 'filled', size: 'large' },
      { shape: 'triangle', fill: 'filled', size: 'small' },
      { shape: 'triangle', fill: 'filled', size: 'medium' },
      { missing: true },
    ],
    options: [
      { shape: 'triangle', fill: 'filled', size: 'large' },
      { shape: 'triangle', fill: 'filled', size: 'small' },
      { shape: 'triangle', fill: 'outline', size: 'large' },
      { shape: 'circle', fill: 'filled', size: 'large' },
      { shape: 'triangle', fill: 'filled', size: 'medium' },
    ],
    correctIndex: 0,
    feedback:
      'Shapes change in groups of three: circle, square, triangle. Within each group, size grows: small → medium → large.',
  },

  /* ================================================================
     Q28 – 3×3 grid: shape by column, fill by row               (D4)
     Columns share the same shape. Rows share the same fill.
     Row 1 = filled, Row 2 = outline, Row 3 = half.
     Col 1 = circle, Col 2 = square, Col 3 = triangle.
     ================================================================ */
  {
    id: 'q28',
    difficulty: 4,
    layout: 'grid',
    sequence: [
      { shape: 'circle', fill: 'filled' },
      { shape: 'square', fill: 'filled' },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'circle', fill: 'outline' },
      { shape: 'square', fill: 'outline' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'circle', fill: 'half', rotation: 0 },
      { shape: 'square', fill: 'half', rotation: 0 },
      { missing: true },
    ],
    options: [
      { shape: 'triangle', fill: 'half', rotation: 0 },
      { shape: 'triangle', fill: 'filled' },
      { shape: 'triangle', fill: 'outline' },
      { shape: 'square', fill: 'half', rotation: 0 },
      { shape: 'circle', fill: 'half', rotation: 0 },
    ],
    correctIndex: 0,
    feedback:
      'A 3×3 grid. Columns share shape: circle, square, triangle. Rows share fill: filled, outline, half. The missing cell is triangle with half-fill.',
  },

  /* ================================================================
     Q29 – 3×3 grid: shape + fill + size (three variables)       (D5)
     Rows = shape (circle, square, triangle).
     Columns = fill (filled, outline, half).
     Size increases left-to-right (small, medium, large).
     ================================================================ */
  {
    id: 'q29',
    difficulty: 5,
    layout: 'grid',
    sequence: [
      { shape: 'circle', fill: 'filled', size: 'small' },
      { shape: 'circle', fill: 'outline', size: 'medium' },
      { shape: 'circle', fill: 'half', rotation: 0, size: 'large' },
      { shape: 'square', fill: 'filled', size: 'small' },
      { shape: 'square', fill: 'outline', size: 'medium' },
      { shape: 'square', fill: 'half', rotation: 0, size: 'large' },
      { shape: 'triangle', fill: 'filled', size: 'small' },
      { shape: 'triangle', fill: 'outline', size: 'medium' },
      { missing: true },
    ],
    options: [
      { shape: 'triangle', fill: 'half', rotation: 0, size: 'large' },
      { shape: 'triangle', fill: 'half', rotation: 0, size: 'small' },
      { shape: 'triangle', fill: 'filled', size: 'large' },
      { shape: 'circle', fill: 'half', rotation: 0, size: 'large' },
      { shape: 'triangle', fill: 'outline', size: 'large' },
    ],
    correctIndex: 0,
    feedback:
      'Three simultaneous patterns in a 3×3 grid. Rows share shape (circle, square, triangle). Columns share fill (filled, outline, half). Size increases left to right (small, medium, large).',
  },

  /* ================================================================
     Q30 – Half-fill on dark with size and shape alternation     (D4)
     Shapes alternate hexagon/circle on dark. Half-fill rotates
     90° each step. Size alternates small/large.
     ================================================================ */
  {
    id: 'q30',
    difficulty: 4,
    sequence: [
      { shape: 'hexagon', fill: 'half', rotation: 0, size: 'small', background: 'dark' },
      { shape: 'circle', fill: 'half', rotation: 90, size: 'large', background: 'dark' },
      { shape: 'hexagon', fill: 'half', rotation: 180, size: 'small', background: 'dark' },
      { shape: 'circle', fill: 'half', rotation: 270, size: 'large', background: 'dark' },
      { shape: 'hexagon', fill: 'half', rotation: 0, size: 'small', background: 'dark' },
      { shape: 'circle', fill: 'half', rotation: 90, size: 'large', background: 'dark' },
      { missing: true },
      { shape: 'circle', fill: 'half', rotation: 270, size: 'large', background: 'dark' },
    ],
    options: [
      { shape: 'hexagon', fill: 'half', rotation: 180, size: 'small', background: 'dark' },
      { shape: 'hexagon', fill: 'half', rotation: 180, size: 'large', background: 'dark' },
      { shape: 'circle', fill: 'half', rotation: 180, size: 'small', background: 'dark' },
      { shape: 'hexagon', fill: 'half', rotation: 90, size: 'small', background: 'dark' },
      { shape: 'hexagon', fill: 'filled', size: 'small', background: 'dark' },
    ],
    correctIndex: 0,
    feedback:
      'Four patterns interleave: shapes alternate hexagon/circle, half-fill rotates 90° each step, size alternates small/large, all on dark backgrounds.',
  },
];

export default questions;
