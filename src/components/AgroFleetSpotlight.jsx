import React from 'react';

export default function AgroFleetSpotlight({ onOpenModal }) {
  return (
    <section id="agro-logistics" className="asymmetric-section container">
      <div style={{ marginBottom: '2rem' }}>
        <span className="section-subtitle">Commodities • Maritime Transport • UN/NGO Fleet</span>
        <h2 className="section-title">AGRO EXPORT &amp; FLEET LOGISTICS</h2>
      </div>

      <div className="asymmetric-grid">
        {/* Left: Large Stadium Image */}
        <div className="asymmetric-col-img" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="capsule-card-lg">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" alt="Maritime Logistics" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,21,24,0.85) 0%, transparent 60%)' }}></div>
            <div className="capsule-lg-caption">
              Direct Cooperative Sourcing • Djibouti Maritime Corridors • 35+ Destination Ports
            </div>
          </div>
        </div>

        {/* Right: Itemized Typewriter Menu */}
        <div className="asymmetric-col-content">
          <div className="typewriter-menu-list">
            
            {/* Item 1 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--sage-600)' }}>ELA</span>
                  SPECIALTY ARABICA COFFEE (YIRGACHEFFE G1)
                </h3>
                <span className="menu-item-stat">GRADE 1</span>
              </div>
              <p className="menu-item-sub">Origins: Yirgacheffe, Sidamo, Guji, Jimma washed &amp; natural sun-dried</p>
              <p className="menu-item-detail">cupping score 86+, moisture &le;11.5%, screened Sortex optical purity, grainpro lined</p>
              <div className="menu-item-actions">
                <button onClick={() => onOpenModal('ela')} className="menu-link-btn">Launch Ela Trading Portal ↗</button>
                <span>•</span>
                <span style={{ color: 'var(--ink-600)' }}>Djibouti FOB / CIF Worldwide</span>
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--sage-600)' }}>ELA</span>
                  HUMERA NATURAL WHITE SESAME SEEDS
                </h3>
                <span className="menu-item-stat" style={{ color: 'var(--ink-900)' }}>99.5% PURITY</span>
              </div>
              <p className="menu-item-sub">Machine cleaned &amp; Sortex color sorted raw sesame seeds</p>
              <p className="menu-item-detail">min 52% oil content, max 5.5% moisture, 0.5% max admixture, multi-wall kraft bags</p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--terracotta-500)' }}>MYCHOICE</span>
                  UN &amp; NGO HEAVY-DUTY FLEET LEASING
                </h3>
                <span className="menu-item-stat">30-DAY CREDIT</span>
              </div>
              <p className="menu-item-sub">Toyota Land Cruiser HZJ76/78, Prado, V8 &amp; HiAce commercial fleet</p>
              <p className="menu-item-detail">17 professional drivers (educated up to Grade 8), live GPS telemetry, dual tanks, winches, electronic VAT invoicing</p>
              <div className="menu-item-actions">
                <button onClick={() => onOpenModal('mychoice')} className="menu-link-btn">Launch MyChoice Fleet Portal ↗</button>
                <span>•</span>
                <span style={{ color: 'var(--ink-600)' }}>Hubs: Addis • Semera • Mekelle</span>
              </div>
            </div>

            {/* Item 4 */}
            <div>
              <div className="menu-item-row">
                <h3 className="menu-item-title">
                  <span className="menu-item-badge" style={{ color: 'var(--sage-600)' }}>ZFISH</span>
                  AQUATIC SEAFOOD IMPORT &amp; EXPORT
                </h3>
                <span className="menu-item-stat" style={{ color: 'var(--ink-900)' }}>COLD-CHAIN</span>
              </div>
              <p className="menu-item-sub">Wild-caught and sustainably farmed sea fish, fillets &amp; shellfish</p>
              <p className="menu-item-detail">certified cold-chain delivery (-18°C), HACCP certified wholesale distribution to hospitality</p>
              <div className="menu-item-actions">
                <button onClick={() => onOpenModal('zfish')} className="menu-link-btn">Launch Zfish Aquatic Portal ↗</button>
                <span>•</span>
                <span style={{ color: 'var(--ink-600)' }}>Global &amp; Regional Distro</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="border-paper-dotted" style={{ marginTop: '4rem' }}></div>
    </section>
  );
}
