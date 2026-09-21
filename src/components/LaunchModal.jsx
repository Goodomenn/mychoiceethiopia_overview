import React from 'react';
import { SUBSIDIARIES } from '../data/subsidiaries.js';

export default function LaunchModal({ modalKey, onClose }) {
  if (!modalKey) return null;
  const sub = SUBSIDIARIES[modalKey];
  if (!sub) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        {/* Paper texture overlay inside modal */}
        <div className="paper-texture-canvas" style={{ opacity: 0.35 }}></div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(217, 89, 61, 0.1)', color: 'var(--terracotta-600)', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '9999px' }}>
              {sub.badge}
            </span>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">✕</button>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.75rem', color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
            {sub.name}
          </h3>
          <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-700)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            {sub.desc}
          </p>

          <div style={{ background: 'rgba(237, 228, 213, 0.7)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--cream-300)', fontFamily: 'var(--font-typewriter)', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {sub.specs.map((sp, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>• {sp.k}</span>
                <strong style={{ color: 'var(--ink-900)' }}>{sp.v}</strong>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={sub.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.85rem',
                borderRadius: '0.75rem',
                backgroundColor: 'var(--ink-900)',
                color: 'var(--cream-50)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textDecoration: 'none'
              }}
            >
              <span>Launch Official Website</span>
              <span>↗</span>
            </a>

            <a
              href={sub.localUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.65rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--ink-800)',
                color: 'var(--ink-900)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '11px',
                textDecoration: 'none',
                background: 'transparent'
              }}
            >
              <span>Launch Local Development Instance (Dev Port) ⚙</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
