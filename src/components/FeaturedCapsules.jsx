import React from 'react';

export default function FeaturedCapsules({ onOpenModal }) {
  return (
    <section id="featured-portals" className="featured-section container">
      <div className="section-head-row">
        <div>
          <span className="section-subtitle">Core Ecosystem</span>
          <h2 className="section-title">FEATURED SUBSIDIARIES</h2>
        </div>
        <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-600)' }}>
          Click any capsule to preview portal
        </span>
      </div>

      <div className="capsules-grid">
        {/* Capsule 1: Ela Trading */}
        <div onClick={() => onOpenModal('ela')} className="capsule-card">
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" alt="Arabica Coffee" />
          <div className="capsule-gradient"></div>
          <div className="capsule-top-badge">
            <span className="badge-tag">Agro Export</span>
            <span className="badge-arrow">01 ↗</span>
          </div>
          <div className="capsule-bottom-info">
            <span className="capsule-name">Ela Trading PLC</span>
            <span className="capsule-sub">Specialty Coffee &amp; Sesame</span>
            <span className="capsule-meta" style={{ color: 'var(--sage-300)' }}>Yirgacheffe • Humera</span>
          </div>
        </div>

        {/* Capsule 2: Bricks Lounge with Line-Art Doodle Overlay */}
        <div onClick={() => onOpenModal('bricks')} className="capsule-card">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" alt="Bricks Gourmet Burger" />
          <div className="capsule-gradient"></div>
          {/* Overlay Line Art Doodle */}
          <div className="capsule-doodle-layer">
            <svg width="48" height="64" viewBox="0 0 48 64" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M24 4 C24 16, 20 20, 24 32 C28 44, 20 52, 24 60" strokeDasharray="2 2" />
              <circle cx="24" cy="8" r="4" />
              <path d="M16 24 Q24 20 32 24" />
              <path d="M14 36 Q24 32 34 36" />
            </svg>
          </div>
          <div className="capsule-top-badge">
            <span className="badge-tag">Hospitality</span>
            <span className="badge-arrow">02 ↗</span>
          </div>
          <div className="capsule-bottom-info">
            <span className="capsule-name">Bricks Lounge</span>
            <span className="capsule-sub">Mixology &amp; Artisan Dining</span>
            <span className="capsule-meta" style={{ color: 'var(--terracotta-400)' }}>Addis Ababa Nightlife</span>
          </div>
        </div>

        {/* Capsule 3: Zfish Aquatic with Bold Stencil Overlay */}
        <div onClick={() => onOpenModal('zfish')} className="capsule-card">
          <img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80" alt="Zfish Aquatic Catch" />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(17, 33, 38, 0.35)' }}></div>
          <div className="capsule-stencil-overlay">
            <h3 className="capsule-stencil-text">
              SEAFOOD<br />SEAFOOD<br />SEAFOOD<br />SEAFOOD
            </h3>
          </div>
          <div className="capsule-gradient"></div>
          <div className="capsule-top-badge">
            <span className="badge-tag">Aquatics</span>
            <span className="badge-arrow">03 ↗</span>
          </div>
          <div className="capsule-bottom-info">
            <span className="capsule-name">Zfish Aquatic</span>
            <span className="capsule-sub">Wild-Caught &amp; Cold-Chain</span>
            <span className="capsule-meta" style={{ color: 'var(--sage-300)' }}>HACCP Global Supply</span>
          </div>
        </div>

        {/* Capsule 4: Ela Catering Services */}
        <div onClick={() => onOpenModal('catering')} className="capsule-card">
          <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" alt="Diplomatic Banquet Platters" />
          <div className="capsule-gradient"></div>
          <div className="capsule-top-badge">
            <span className="badge-tag">Banqueting</span>
            <span className="badge-arrow">04 ↗</span>
          </div>
          <div className="capsule-bottom-info">
            <span className="capsule-name">Ela Catering</span>
            <span className="capsule-sub">Diplomatic &amp; Corporate</span>
            <span className="capsule-meta" style={{ color: 'var(--amber-400)' }}>1,000+ Covers / Day</span>
          </div>
        </div>

        {/* Capsule 5: MyChoice Expeditions & Fleet */}
        <div onClick={() => onOpenModal('mychoice')} className="capsule-card">
          <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" alt="Land Cruiser 4x4 Fleet" />
          <div className="capsule-gradient"></div>
          <div className="capsule-top-badge">
            <span className="badge-tag">Fleet &amp; Tours</span>
            <span className="badge-arrow">05 ↗</span>
          </div>
          <div className="capsule-bottom-info">
            <span className="capsule-name">MyChoice Ethiopia</span>
            <span className="capsule-sub">UN/NGO Fleet &amp; Expeditions</span>
            <span className="capsule-meta" style={{ color: 'var(--sage-300)' }}>17 Professional Drivers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
