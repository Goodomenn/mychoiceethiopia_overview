import React, { useState } from 'react';

export default function Header({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top Utility Line */}
      <div className="top-utility-bar">
        <div className="container utility-inner">
          <div className="utility-left">
            <a href="#about-group" className="utility-link">Corporate Heritage</a>
            <span>•</span>
            <span>Regional Hubs: Addis Ababa • Semera • Mekelle • Djibouti</span>
            <span style={{ display: 'none' }}>•</span>
            <span style={{ display: 'none' }}>License #14/666/128419/2005 • VAT #80692</span>
          </div>
          <div>
            <a href="#unified-contact" className="utility-link" style={{ fontWeight: 'bold' }}>
              Group Desk: info@tekilay.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container main-nav-bar">
        {/* Left Nav Links */}
        <nav className="nav-links">
          <a href="#featured-portals" className="nav-link">Featured</a>
          <a href="#agro-logistics" className="nav-link">Agro &amp; Fleet</a>
          <a href="#hospitality-dining" className="nav-link">Hospitality</a>
          <a href="#capability-inspector" className="nav-link">Metrics Radar</a>
          <a href="#subsidiary-grid" className="nav-link">All Subsidiaries</a>
          <a href="#about-group" className="nav-link">Governance</a>
        </nav>

        {/* Centered Geometric Brand Logo */}
        <a href="#" className="brand-logo-wrap">
          <div className="brand-box">
            <span className="brand-title">TEKILAY</span>
          </div>
          <span className="brand-sub">GROUP • HOLDINGS &amp; SUBSIDIARIES</span>
        </a>

        {/* Right Subsidiary Quick Launcher Buttons */}
        <div className="quick-launch-group">
          <button onClick={() => onOpenModal('ela')} className="btn-quick-launch">
            Ela Trading ↗
          </button>
          <button onClick={() => onOpenModal('bricks')} className="btn-quick-launch">
            Bricks ↗
          </button>
          <button onClick={() => onOpenModal('mychoice')} className="btn-quick-launch">
            Fleet &amp; Tours ↗
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          <a href="#featured-portals" onClick={() => setMobileOpen(false)}>Featured Subsidiaries</a>
          <a href="#agro-logistics" onClick={() => setMobileOpen(false)}>Agro Export &amp; Fleet Logistics</a>
          <a href="#hospitality-dining" onClick={() => setMobileOpen(false)}>Hospitality &amp; Banqueting</a>
          <a href="#capability-inspector" onClick={() => setMobileOpen(false)}>Operational Metrics &amp; Radar</a>
          <a href="#subsidiary-grid" onClick={() => setMobileOpen(false)}>Full Subsidiary Directory</a>
          <a href="#about-group" onClick={() => setMobileOpen(false)}>Corporate Heritage &amp; Governance</a>
          <a href="#unified-contact" onClick={() => setMobileOpen(false)}>Unified Group Inquiry Desk</a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingTop: '0.5rem' }}>
            <button onClick={() => { onOpenModal('ela'); setMobileOpen(false); }} className="btn-quick-launch">
              Ela Trading ↗
            </button>
            <button onClick={() => { onOpenModal('bricks'); setMobileOpen(false); }} className="btn-quick-launch">
              Bricks Lounge ↗
            </button>
            <button onClick={() => { onOpenModal('catering'); setMobileOpen(false); }} className="btn-quick-launch">
              Ela Catering ↗
            </button>
            <button onClick={() => { onOpenModal('mychoice'); setMobileOpen(false); }} className="btn-quick-launch">
              MyChoice Fleet ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
