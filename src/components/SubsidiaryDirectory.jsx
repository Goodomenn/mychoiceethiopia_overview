import React from 'react';
import { SUBSIDIARIES } from '../data/subsidiaries.js';

export default function SubsidiaryDirectory({ currentDivision, onOpenModal }) {
  const cards = [
    { key: 'ela', division: 'agro' },
    { key: 'bricks', division: 'hospitality' },
    { key: 'catering', division: 'catering' },
    { key: 'mychoice', division: 'fleet' },
    { key: 'zfish', division: 'seafood' },
  ];

  const filtered = cards.filter(c => currentDivision === 'all' || c.division === currentDivision);

  return (
    <section id="subsidiary-grid" className="subsidiary-grid-section container">
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="section-subtitle">Corporate Architecture</span>
        <h2 className="section-title">Subsidiary Portals &amp; Ventures</h2>
      </div>

      <div className="subsidiaries-cards-row">
        {filtered.map(item => {
          const sub = SUBSIDIARIES[item.key];
          return (
            <div key={item.key} className="subsidiary-card">
              <div>
                <div className="sub-card-top">
                  <span className="sub-card-badge">{sub.badge}</span>
                  <span className="sub-card-loc">{sub.specs[3]?.v || 'Addis Ababa, Ethiopia'}</span>
                </div>
                <h3 className="sub-card-title">{sub.name}</h3>
                <p className="sub-card-desc">{sub.desc}</p>
                <div className="sub-card-specs">
                  {sub.specs.slice(0, 3).map((sp, idx) => (
                    <div key={idx} className="sub-spec-line">
                      <span>• {sp.k}</span>
                      <span style={{ fontWeight: 'bold' }}>{sp.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--cream-300)' }}>
                <button onClick={() => onOpenModal(item.key)} className="btn-portal-launch">
                  <span>Open Web Portal</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          );
        })}

        {/* Central Holding Desk Card */}
        {(currentDivision === 'all') && (
          <div className="subsidiary-card" style={{ background: 'rgba(237, 228, 213, 0.5)', borderStyle: 'dashed' }}>
            <div>
              <div className="sub-card-top">
                <span className="sub-card-badge" style={{ background: 'var(--cream-300)', color: 'var(--ink-800)' }}>Holding Desk</span>
                <span className="sub-card-loc">Bole HQ</span>
              </div>
              <h3 className="sub-card-title">Tekilay Ventures &amp; Governance</h3>
              <p className="sub-card-desc">
                Central corporate governance, legal compliance, consolidated procurement, capital allocation, and joint venture partnerships across the Horn of Africa.
              </p>
              <div className="sub-card-specs" style={{ background: 'var(--cream-100)' }}>
                <div className="sub-spec-line"><span>• Business License</span><span style={{ fontWeight: 'bold' }}>14/666/128419/2005</span></div>
                <div className="sub-spec-line"><span>• VAT Reg #</span><span style={{ fontWeight: 'bold' }}>#80692</span></div>
                <div className="sub-spec-line"><span>• SIGTAS Status</span><span style={{ fontWeight: 'bold' }}>Active &amp; Compliant</span></div>
              </div>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--cream-300)' }}>
              <a
                href="#unified-contact"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--ink-800)',
                  color: 'var(--ink-900)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '12px',
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Contact Holding Desk ➔
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
