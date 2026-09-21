import React from 'react';

export default function DivisionFilter({ currentDivision, onSelectDivision }) {
  const divisions = [
    { key: 'all', label: 'All Ventures (5)' },
    { key: 'agro', label: 'Agro Commodities (Ela)' },
    { key: 'hospitality', label: 'Hospitality (Bricks)' },
    { key: 'catering', label: 'Banquets (Ela Catering)' },
    { key: 'fleet', label: 'Fleet & Tours (MyChoice)' },
    { key: 'seafood', label: 'Aquatic & Seafood (Zfish)' },
  ];

  return (
    <section className="hero-section container">
      <div className="hero-header-row">
        <div>
          <span className="hero-tag">Enterprise Gateway &amp; Holdings Portal</span>
          <h1 className="hero-main-title">
            Subsidiaries &amp; Global Operations
          </h1>
        </div>
        <p className="hero-sub-text">
          Connecting East African agricultural heritage, luxury dining, UN/NGO institutional fleet leasing, and international aquatic trade under unified corporate governance.
        </p>
      </div>

      {/* Division Filter Pills */}
      <div className="filter-pills-row">
        {divisions.map((div) => (
          <button
            key={div.key}
            onClick={() => onSelectDivision(div.key)}
            className={`div-filter-btn ${currentDivision === div.key ? 'active' : ''}`}
          >
            {div.label}
          </button>
        ))}
      </div>

      {/* Subcategory Ticker */}
      <div className="ticker-nav">
        <a href="#featured-portals" className="ticker-link" style={{ color: 'var(--terracotta-500)', fontWeight: 'bold' }}>Featured Portals</a>
        <a href="#agro-logistics" className="ticker-link">Agro &amp; Fleet Logistics</a>
        <a href="#hospitality-dining" className="ticker-link">Hospitality &amp; Dining</a>
        <a href="#capability-inspector" className="ticker-link">Capability Inspector</a>
        <a href="#subsidiary-grid" className="ticker-link">Subsidiary Directory</a>
        <a href="#about-group" className="ticker-link">Corporate Governance</a>
        <a href="#unified-contact" className="ticker-link">Unified RFQ Desk</a>
      </div>
    </section>
  );
}
