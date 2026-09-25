import React from 'react';

export default function GovernanceTrust() {
  return (
    <section id="about-group" className="governance-section">
      <div className="container governance-grid">
        {/* Left Narrative */}
        <div>
          <span className="section-subtitle">Institutional Reliability &amp; Compliance</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginTop: '0.35rem' }}>
            Engineered for Global Trade &amp; Institutional Rigor
          </h2>
          <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '13px', color: 'var(--ink-800)', marginTop: '1.25rem', lineHeight: '1.7' }}>
            Under <strong>Tekilay Group (Z-Tekilay Holdings)</strong>, our multi-sector subsidiaries operate with standardized corporate governance, full fiscal transparency, and verified regulatory status required by international diplomatic missions, multilateral agencies, and global trade buyers.
          </p>
          <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '13px', color: 'var(--ink-700)', marginTop: '0.75rem', lineHeight: '1.7' }}>
            With operational staging facilities in <strong>Addis Ababa</strong>, <strong>Semera</strong>, <strong>Mekelle</strong>, and direct maritime logistics clearance through <strong>Djibouti Port</strong>, the group ensures rapid execution, certified food hygiene (ISO 22000 / HACCP), and rigorous field fleet oversight.
          </p>

          <div className="value-pillars-row">
            <div className="pillar-card">
              <div className="pillar-title">Fiscal Purity</div>
              <p className="pillar-desc">Electronic VAT invoicing &amp; verified SIGTAS tax clearance.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-title">Fleet Integrity</div>
              <p className="pillar-desc">17 professional drivers (educated up to Grade 8) with defensive training.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-title">Export Scale</div>
              <p className="pillar-desc">25,000+ MT agricultural commodities delivered globally.</p>
            </div>
          </div>
        </div>

        {/* Right Credentials Box */}
        <div style={{ background: 'var(--cream-50)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--cream-300)', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-900)', borderBottom: '1px solid var(--cream-300)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
            Group Licenses &amp; Accreditations
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-typewriter)', fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(237, 228, 213, 0.7)', borderRadius: '0.5rem', border: '1px solid var(--cream-300)' }}>
              <span style={{ fontWeight: 'bold' }}>Ethiopian Business License</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--terracotta-600)' }}>14/666/128419/2005</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(237, 228, 213, 0.7)', borderRadius: '0.5rem', border: '1px solid var(--cream-300)' }}>
              <span style={{ fontWeight: 'bold' }}>VAT Registration No.</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--terracotta-600)' }}>#80692</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(237, 228, 213, 0.7)', borderRadius: '0.5rem', border: '1px solid var(--cream-300)' }}>
              <span style={{ fontWeight: 'bold' }}>Food Safety &amp; HACCP</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--terracotta-600)' }}>ISO 22000 / HACCP</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(237, 228, 213, 0.7)', borderRadius: '0.5rem', border: '1px solid var(--cream-300)' }}>
              <span style={{ fontWeight: 'bold' }}>UN/NGO Procurement Terms</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--terracotta-600)' }}>30-Day Post-Paid</span>
            </div>
          </div>

          <a
            href="#unified-contact"
            style={{
              display: 'block',
              width: '100%',
              padding: '0.9rem',
              marginTop: '1.5rem',
              borderRadius: '0.75rem',
              backgroundColor: 'var(--ink-900)',
              color: 'var(--cream-50)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '12px',
              textAlign: 'center',
              textDecoration: 'none'
            }}
          >
            Request Pre-Qualification Dossier ➔
          </a>
        </div>
      </div>
    </section>
  );
}
