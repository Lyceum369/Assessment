import React, { useId } from 'react';

/* ------------------------------------------------------------------ */
/*  Utility helpers                                                    */
/* ------------------------------------------------------------------ */

const toRad = (deg) => (deg * Math.PI) / 180;

function starPoints(cx, cy, outerR, innerR, n) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const angle = (i * Math.PI) / n - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

/* ------------------------------------------------------------------ */
/*  Shape renderers                                                    */
/* ------------------------------------------------------------------ */

function renderShape(config, colors) {
  const { shape, fill, rotation } = config;
  const { fg, stroke } = colors;
  const fillColor = fill === 'filled' ? fg : 'none';
  const strokeColor = fill === 'outline' ? stroke : 'none';
  const sw = 2.5;
  const rot = rotation || 0;
  const tf = rot ? `rotate(${rot}, 50, 50)` : undefined;

  switch (shape) {
    case 'circle':
      return <circle cx="50" cy="50" r="26" fill={fillColor} stroke={strokeColor} strokeWidth={sw} />;

    case 'hexagon': {
      const r = 26;
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = toRad(60 * i - 90);
        pts.push(`${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`);
      }
      return <polygon points={pts.join(' ')} fill={fillColor} stroke={strokeColor} strokeWidth={sw} />;
    }

    case 'triangle':
      return (
        <polygon
          points="50,22 78,74 22,74"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={sw}
          transform={tf}
        />
      );

    case 'square':
      return (
        <rect
          x="24" y="24" width="52" height="52"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={sw}
          transform={tf}
        />
      );

    case 'star':
      return (
        <polygon
          points={starPoints(50, 50, 28, 12, 5)}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={sw}
        />
      );

    case 'cross':
      return (
        <polygon
          points="38,18 62,18 62,38 82,38 82,62 62,62 62,82 38,82 38,62 18,62 18,38 38,38"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={sw}
        />
      );

    case 'arrow':
      return (
        <polygon
          points="32,25 76,50 32,75"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={sw}
          transform={tf}
        />
      );

    case 'x-mark': {
      const c = fill === 'filled' ? fg : stroke;
      return (
        <g stroke={c} strokeWidth="7" strokeLinecap="round" transform={tf}>
          <line x1="28" y1="28" x2="72" y2="72" />
          <line x1="72" y1="28" x2="28" y2="72" />
        </g>
      );
    }

    case 'pacman': {
      const r = 26;
      const half = 35;
      const x1 = 50 + r * Math.cos(toRad(half));
      const y1 = 50 + r * Math.sin(toRad(half));
      const x2 = 50 + r * Math.cos(toRad(-half));
      const y2 = 50 + r * Math.sin(toRad(-half));
      const d = `M 50 50 L ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2} Z`;
      return (
        <path
          d={d}
          fill={fillColor}
          stroke={fill === 'outline' ? strokeColor : 'none'}
          strokeWidth={sw}
          transform={tf}
        />
      );
    }

    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Background decorations                                             */
/* ------------------------------------------------------------------ */

function renderBackground(config, colors) {
  const bg = config.background;
  if (!bg) return null;
  const { fg } = colors;

  if (bg === 'dark-corners') {
    return (
      <g fill={fg}>
        <polygon points="2,2 30,2 2,30" />
        <polygon points="70,2 98,2 98,30" />
        <polygon points="98,70 98,98 70,98" />
        <polygon points="2,70 2,98 30,98" />
      </g>
    );
  }

  const cornerMap = {
    'dark-corner-tl': '2,2 35,2 2,35',
    'dark-corner-tr': '65,2 98,2 98,35',
    'dark-corner-br': '98,65 98,98 65,98',
    'dark-corner-bl': '2,65 2,98 35,98',
  };
  if (cornerMap[bg]) {
    return <polygon points={cornerMap[bg]} fill={fg} />;
  }

  if (bg === 'corner-lines') {
    return (
      <g stroke={fg} strokeWidth="1.2" opacity="0.7">
        {/* TL */}
        <line x1="2" y1="18" x2="18" y2="2" />
        <line x1="2" y1="12" x2="12" y2="2" />
        <line x1="2" y1="6" x2="6" y2="2" />
        <line x1="2" y1="24" x2="24" y2="2" />
        {/* TR */}
        <line x1="82" y1="2" x2="98" y2="18" />
        <line x1="88" y1="2" x2="98" y2="12" />
        <line x1="94" y1="2" x2="98" y2="6" />
        <line x1="76" y1="2" x2="98" y2="24" />
        {/* BL */}
        <line x1="2" y1="82" x2="18" y2="98" />
        <line x1="2" y1="88" x2="12" y2="98" />
        <line x1="2" y1="94" x2="6" y2="98" />
        <line x1="2" y1="76" x2="24" y2="98" />
        {/* BR */}
        <line x1="82" y1="98" x2="98" y2="82" />
        <line x1="88" y1="98" x2="98" y2="88" />
        <line x1="94" y1="98" x2="98" y2="94" />
        <line x1="76" y1="98" x2="98" y2="76" />
      </g>
    );
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  Corner dots                                                        */
/* ------------------------------------------------------------------ */

function renderDots(dots, dotColor) {
  if (!dots || dots.length === 0) return null;
  const pos = { tl: [12, 12], tr: [88, 12], br: [88, 88], bl: [12, 88] };
  return dots.map((d) => (
    <circle key={d} cx={pos[d][0]} cy={pos[d][1]} r="4.5" fill={dotColor} />
  ));
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ShapeCard({
  config,
  isMissing = false,
  isSelected = false,
  onClick,
  size = 'normal',
}) {
  const rawId = useId();
  const clipId = rawId.replace(/:/g, '');

  if (!config && !isMissing) return null;

  const isDark = config?.background === 'dark';
  const cardBg = isDark ? '#0a0e1a' : '#1a2035';
  const colors = {
    fg: isDark ? '#e8e0d0' : '#e8e0d0',
    stroke: isDark ? '#e8e0d0' : '#e8e0d0',
    dot: isDark ? '#e8e0d0' : '#e8e0d0',
    border: isDark ? '#252d42' : '#2a3450',
  };

  const isHalf = config?.fill === 'half';
  const scaleMap = { small: 0.6, medium: 1, large: 1.3 };
  const sf = config?.size ? (scaleMap[config.size] || 1) : 1;

  const cardClass = [
    'shape-card',
    `shape-card--${size}`,
    isMissing ? 'shape-card--missing' : '',
    isSelected ? 'shape-card--selected' : '',
    onClick ? 'shape-card--clickable' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClass} onClick={onClick}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Card rect */}
        <rect
          x="2" y="2" width="96" height="96"
          fill={cardBg}
          stroke={colors.border}
          strokeWidth="1.5"
          rx="4"
        />

        {isMissing ? (
          <>
            <rect
              x="4" y="4" width="92" height="92"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeDasharray="6 4"
              rx="3"
              opacity="0.5"
            />
            <text
              x="50" y="58"
              textAnchor="middle"
              fontSize="40"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              fill="#c9a84c"
              opacity="0.6"
            >
              ?
            </text>
          </>
        ) : (
          <>
            {renderBackground(config, colors)}
            {renderDots(config.dots, colors.dot)}

            {isHalf && (
              <defs>
                <clipPath id={clipId}>
                  <rect
                    x="-200" y="-200" width="250" height="400"
                    transform={`rotate(${config.rotation || 0}, 50, 50)`}
                  />
                </clipPath>
              </defs>
            )}

            <g transform={sf !== 1 ? `translate(50,50) scale(${sf}) translate(-50,-50)` : undefined}>
              {isHalf ? (
                <>
                  {renderShape({ ...config, fill: 'outline', rotation: 0 }, colors)}
                  <g clipPath={`url(#${clipId})`}>
                    {renderShape({ ...config, fill: 'filled', rotation: 0 }, colors)}
                  </g>
                </>
              ) : (
                renderShape(config, colors)
              )}
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
