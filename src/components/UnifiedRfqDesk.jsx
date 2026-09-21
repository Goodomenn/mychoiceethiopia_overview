import React, { useState } from 'react';

export default function UnifiedRfqDesk({ onOpenModal }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="unified-contact" className="rfq-section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Left: Contact Info */}
          <div>
            <span className="section-subtitle">Unified Communications</span>
            <h2 className="section-title" style={{ fontSize: '2.25rem', marginTop: '0.25rem' }}>Tekilay Central Routing Desk</h2>
            <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-700)', marginTop: '0.5rem', lineHeight: '1.6' }}>
              Connect directly with specialized enterprise desks for commodity quotations, venue VIP bookings, UN fleet tenders, or seafood wholesale.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-typewriter)', fontSize: '12px' }}>
              <div style={{ background: 'var(--cream-50)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--cream-300)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', marginBottom: '0.5rem' }}>📍 Corporate Headquarters</h4>
                <p>Tekilay Group Building, Bole Sub-City, Addis Ababa, Ethiopia</p>
                <p style={{ color: 'var(--ink-600)', marginTop: '0.5rem' }}>📞 Central Tel: +251 11 6XX XXXX / +251 91 1XX XXXX</p>
                <p style={{ color: 'var(--ink-600)' }}>✉️ Central Desk: info@tekilay.com</p>
              </div>

              <div style={{ background: 'var(--cream-50)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--cream-300)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', marginBottom: '0.75rem' }}>🌐 Direct Subsidiary Desks</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Ela Trading (Agro Export)</span>
                    <button onClick={() => onOpenModal('ela')} className="btn-quick-launch">Portal ↗</button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Bricks Lounge (Reservations)</span>
                    <button onClick={() => onOpenModal('bricks')} className="btn-quick-launch">Portal ↗</button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>MyChoice Ethiopia (UN Fleet)</span>
                    <button onClick={() => onOpenModal('mychoice')} className="btn-quick-launch">Portal ↗</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic RFQ Form */}
          <div>
            <div className="rfq-card-form">
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--ink-900)' }}>
                Submit Multi-Subsidiary RFQ
              </h3>
              <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-600)', marginBottom: '1.5rem' }}>
                Complete the form below. Your request will be automatically routed to the managing director of the selected subsidiary within 24 hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-field">
                      <label className="form-label">Full Name *</label>
                      <input type="text" required placeholder="Abebe Bikila / John Smith" className="form-input" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Work Email *</label>
                      <input type="email" required placeholder="procurement@un-agency.org" className="form-input" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-field">
                      <label className="form-label">Target Subsidiary *</label>
                      <select className="form-select">
                        <option>Tekilay Group - Central Holding</option>
                        <option>Ela Trading PLC - Agro Commodities</option>
                        <option>Bricks Lounge - VIP Venue &amp; Dining</option>
                        <option>Ela Catering - Diplomatic &amp; Institutional</option>
                        <option>MyChoice Ethiopia - UN/NGO Fleet &amp; Tours</option>
                        <option>Zfish Aquatic - Seafood Wholesale</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Organization Type *</label>
                      <select className="form-select">
                        <option>UN Agency / Diplomatic Mission</option>
                        <option>International Commodity Importer</option>
                        <option>Corporate Enterprise / Private VIP</option>
                        <option>Non-Governmental Organization (NGO)</option>
                        <option>Wholesale Food Distributor</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">RFQ Specifications &amp; Cargo / Service Details *</label>
                    <textarea rows="4" required placeholder="Specify cargo volume, required vessel shipment dates, vehicle fleet numbers, or banquet cover counts..." className="form-textarea"></textarea>
                  </div>

                  <button type="submit" className="btn-rfq-submit">
                    Transmit Request to Subsidiary Desk ➔
                  </button>
                </form>
              ) : (
                <div className="form-success-box">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-900)' }}>
                    Inquiry Transmitted Successfully
                  </h4>
                  <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-700)', marginTop: '0.5rem' }}>
                    Tracking reference: <strong style={{ color: 'var(--terracotta-600)', fontFamily: 'var(--font-mono)' }}>#TKL-2026-8092</strong>. The appropriate enterprise desk will contact your procurement team within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
