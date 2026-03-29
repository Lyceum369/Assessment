import React from 'react';

function generateStarPoints(cx, cy, outerR, innerR, points) {
  const coords = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    coords.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return coords.join(' ');
}

function renderShape(shape, fill, isOnDarkBg) {
  const fillColor = fill === 'filled' ? '#1a1a1a' : 'none';
  const strokeColor = isOnDarkBg ? '#1a1a1a' : '#1a1a1a';
  const shapeStroke = fill === 'outline' ? strokeColor : 'none';
  const sw = 2.5;

  switch (shape) {
    case 'circle':
      return (
        <circle
          cx="50" cy="50" r="26"
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    case 'hexagon': {
      const r = 26;
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        pts.push(`${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`);
      }
      return (
        <polygon
          points={pts.join(' ')}
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    }
    case 'triangle':
      return (
        <polygon
          points="50,22 78,74 22,74"
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    case 'square':
      return (
        <rect
          x="24" y="24" width="52" height="52"
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    case 'star':
      return (
        <polygon
          points={generateStarPoints(50, 50, 28, 12, 5)}
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    case 'cross':
      return (
        <polygon
          points="38,18 62,18 62,38 82,38 82,62 62,62 62,82 38,82 38,62 18,62 18,38 38,38"
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    case 'arrow':
      return (
        <polygon
          points="32,22 76,50 32,78"
          fill={fillColor}
          stroke={shapeStroke}
          strokeWidth={sw}
        />
      );
    case 'x-mark': {
      const color = fill === 'filled' ? '#1a1a1a' : '#1a1a1a';
      return (
        <g stroke={color} strokeWidth="6" strokeLinecap="round">
          <line x1="28" y1="28" x2="72" y2="72" />
          <line x1="72" y1="28" x2="28" y2="72" />
        </g>
      );
    }
    default:
      return null;
  }
}

function renderDarkCorners(variant) {
  if (variant === 'dark-corners') {
    return (
      <g>
        <polygon points="2,2 30,2 2,30" fill="#1a1a1a" />
        <polygon points="70,2 98,2 98,30" fill="#1a1a1a" />
        <polygon points="98,70 98,98 70,98" fill="#1a1a1a" />
        <polygon points="2,70 2,98 30,98" fill="#1a1a1a" />
      </g>
    );
  }
  if (variant === 'dark-corner-tl') {
    return <polygon points="2,2 40,2 2,40" fill="#1a1a1a" />;
  }
  if (variant === 'dark-corner-br') {
    return <polygon points="98,60 98,98 60,98" fill="#1a1a1a" />;
  }
  return null;
}

function renderDots(dots) {
  if (!dots || dots.length === 0) return null;
  const positions = {
    tl: [12, 12],
    tr: [88, 12],
    br: [88, 88],
    bl: [12, 88],
  };
  return dots.map((d) => (
    <circle
      key={d}
      cx={positions[d][0]}
      cy={positions[d][1]}
      r="4.5"
      fill="#1a1a1a"
    />
  ));
}

export default function ShapeCard({
  config,
  isMissing = false,
  isSelected = false,
  onClick,
  size = 'normal',
}) {
  if (!config && !isMissing) return null;

  const cardClass = [
    'shape-card',
    `shape-card--${size}`,
    isMissing ? 'shape-card--missing' : '',
    isSelected ? 'shape-card--selected' : '',
    onClick ? 'shape-card--clickable' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const isOnDarkBg = config?.background === 'dark-corners';

  return (
    <div className={cardClass} onClick={onClick}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Card background */}
        <rect
          x="2" y="2" width="96" height="96"
          fill="white"
          stroke="#bbb"
          strokeWidth="1.5"
          rx="4"
        />

        {isMissing ? (
          <>
            <rect
              x="4" y="4" width="92" height="92"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeDasharray="6 4"
              rx="3"
            />
            <text
              x="50" y="58"
              textAnchor="middle"
              fontSize="40"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              fill="#999"
            >
              ?
            </text>
          </>
        ) : (
          <>
            {/* Dark corner backgrounds */}
            {config.background && renderDarkCorners(config.background)}

            {/* Corner dots */}
            {renderDots(config.dots)}

            {/* Central shape */}
            {renderShape(config.shape, config.fill, isOnDarkBg)}
          </>
        )}
      </svg>
    </div>
  );
}
