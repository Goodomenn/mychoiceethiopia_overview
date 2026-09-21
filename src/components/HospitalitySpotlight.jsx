import React from 'react';

export default function HospitalitySpotlight({ onOpenModal }) {
  return (
    <section id="hospitality-dining" className="asymmetric-section container">
      <div style={{ marginBottom: '2rem' }}>
        <span className="section-subtitle">Nightlife • Fine Dining • Institutional Food Service</span>
        <h2 className="section-title">HOSPITALITY, DINING &amp; BANQUETING</h2>
      </div>

      <div className="asymmetric-grid">
        {/* Left: Typewriter Menu + Folding Chair Doodle */}
        <div className="asymmetric-col-content" style={{ order: 2 }}>
          <div className="typewriter-menu-list">
            
            {/* Item 1 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--terracotta-500)' }}>BRICKS</span>
                  CRAFT BOTANICAL MIXOLOGY &amp; COCKTAILS
                </h3>
                <span className="menu-item-stat" style={{ color: 'var(--ink-900)' }}>SIGNATURE</span>
              </div>
              <p className="menu-item-sub">infused Ethiopian highland spirits, Japanese yuzu, hibiscus reduction, house bitters</p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--terracotta-500)' }}>BRICKS</span>
                  POST-OAK SMOKED BEEF BRISKET &amp; BURGERS
                </h3>
                <span className="menu-item-stat">14-HR SMOKE</span>
              </div>
              <p className="menu-item-sub">slow-smoked prime cut beef, pickled jalapeño relish, house milk brioche</p>
              <div className="menu-item-actions">
                <button onClick={() => onOpenModal('bricks')} className="menu-link-btn">Launch Bricks Lounge Portal ↗</button>
                <span>•</span>
                <span style={{ color: 'var(--ink-600)' }}>Bole Sub-City, Addis Ababa</span>
              </div>
            </div>

            {/* Item 3 */}
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--cream-300)' }}>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--sage-600)' }}>CATERING</span>
                  DIPLOMATIC EMBASSY BANQUETS &amp; STATE DINNERS
                </h3>
                <span className="menu-item-stat" style={{ color: 'var(--ink-900)' }}>BESPOKE</span>
              </div>
              <p className="menu-item-sub">multi-course silver service, protocol-trained staff, certified HACCP food hygiene</p>
            </div>

            {/* Item 4 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--sage-600)' }}>CATERING</span>
                  ROTATIONAL CORPORATE FOOD SERVICE
                </h3>
                <span className="menu-item-stat">1,000+ COVERS</span>
              </div>
              <p className="menu-item-sub">daily nutritional catering for corporate offices, aviation staff, and construction complexes</p>
              <div className="menu-item-actions">
                <button onClick={() => onOpenModal('catering')} className="menu-link-btn">Launch Ela Catering Portal ↗</button>
                <span>•</span>
                <span style={{ color: 'var(--ink-600)' }}>Mobile On-Site Industrial Kitchens</span>
              </div>
            </div>

            {/* Camp Chair Line-Art Doodle Overlay */}
            <div style={{ paddingTop: '1rem' }}>
              <svg width="65" height="80" viewBox="0 0 60 75" fill="none" stroke="#284249" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}>
                <circle cx="30" cy="12" r="5" />
                <path d="M22 18 Q30 22 38 18" />
                <line x1="20" y1="24" x2="40" y2="24" />
                <line x1="16" y1="36" x2="44" y2="36" />
                <line x1="22" y1="24" x2="14" y2="65" />
                <line x1="38" y1="24" x2="46" y2="65" />
                <line x1="18" y1="36" x2="42" y2="65" />
                <line x1="42" y1="36" x2="18" y2="65" />
                <circle cx="14" cy="65" r="2.5" fill="#284249" />
                <circle cx="46" cy="65" r="2.5" fill="#284249" />
                <circle cx="18" cy="65" r="2.5" fill="#284249" />
                <circle cx="42" cy="65" r="2.5" fill="#284249" />
              </svg>
            </div>

          </div>
        </div>

        {/* Right: Large Stadium Dish Spread Photo */}
        <div className="asymmetric-col-img" style={{ order: 1, display: 'flex', justifyContent: 'center' }}>
          <div className="capsule-card-lg">
            <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80" alt="Artisanal Dining Spread" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,21,24,0.85) 0%, transparent 60%)' }}></div>
            <div className="capsule-lg-caption">
              Bricks Lounge Mixology • Ela Catering State Banquets • HACCP Accredited
            </div>
          </div>
        </div>
      </div>

      <div className="border-paper-dotted" style={{ marginTop: '4rem' }}></div>
    </section>
  );
}
