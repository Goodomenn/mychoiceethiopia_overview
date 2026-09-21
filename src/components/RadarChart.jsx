import React from 'react';

export default function RadarChart({ labels, values, baselines, title }) {
  const size = 320;
  const center = size / 2;
  const radius = 110;
  const numPoints = labels.length;
  const angleStep = (Math.PI * 2) / numPoints;

  // Function to convert value (0-10) and index into (x, y) coordinates
  const getCoordinates = (value, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 10) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Build polygon points string
  const getPolygonPoints = (vals) => {
    return vals.map((val, idx) => {
      const { x, y } = getCoordinates(val, idx);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  };

  const subsidiaryPolygon = getPolygonPoints(values);
  const baselinePolygon = getPolygonPoints(baselines);

  // Background concentric polygons (levels 2, 4, 6, 8, 10)
  const levels = [2, 4, 6, 8, 10];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '340px', margin: '0 auto' }}>
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
        {/* Concentric Grid Levels */}
        {levels.map((level) => {
          const points = labels.map((_, idx) => {
            const { x, y } = getCoordinates(level, idx);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
          }).join(' ');
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="rgba(25, 47, 53, 0.12)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis Spokes from Center */}
        {labels.map((label, idx) => {
          const { x, y } = getCoordinates(10, idx);
          // Label position slightly outside radius
          const labelAngle = idx * angleStep - Math.PI / 2;
          const labelDist = radius + 22;
          const lx = center + labelDist * Math.cos(labelAngle);
          const ly = center + labelDist * Math.sin(labelAngle) + 4;

          return (
            <g key={label}>
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(25, 47, 53, 0.14)"
                strokeWidth="1"
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                fontSize="10"
                fontFamily="Space Mono, monospace"
                fill="#192F35"
                fontWeight="700"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Sector Baseline Polygon (Dashed Sage Green) */}
        <polygon
          points={baselinePolygon}
          fill="rgba(120, 141, 121, 0.15)"
          stroke="#788D79"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Subsidiary Score Polygon (Warm Terracotta) */}
        <polygon
          points={subsidiaryPolygon}
          fill="rgba(217, 89, 61, 0.22)"
          stroke="#D9593D"
          strokeWidth="2"
        />

        {/* Points for Subsidiary */}
        {values.map((val, idx) => {
          const { x, y } = getCoordinates(val, idx);
          return (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r="3.5"
              fill="#D9593D"
              stroke="#FAF7F0"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>

      {/* Radar Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem', fontSize: '11px', fontFamily: 'Courier Prime, monospace' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#D9593D', borderRadius: '2px' }}></span>
          <span style={{ color: '#192F35', fontWeight: 'bold' }}>{title || 'Subsidiary Score'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '2px', borderTop: '2px dashed #788D79' }}></span>
          <span style={{ color: '#788D79' }}>Sector Baseline</span>
        </div>
      </div>
    </div>
  );
}
