import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Compass, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Flag: Expeditions and Corporate Fleet are preserved in codebase but hidden from UI for now
  const SHOW_FLEET_AND_TOURS = false;

  const navLinks = [
    { name: 'HOME', path: '/' },
    ...(SHOW_FLEET_AND_TOURS ? [
      { name: 'CORPORATE FLEET', path: '/corporate-fleet' },
      { name: 'EXPEDITIONS', path: '/tours' }
    ] : []),
    { name: 'SUBSIDIARIES', path: '/subsidiaries' },
    { name: 'GOVERNANCE', path: '/governance' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <header className="trail-header">
      <div className="header-container">
        
        {/* Circular Compass Crest & Brand */}
        <Link to="/" className="brand-crest-link">
          <div className="crest-circle">
            <Compass size={18} strokeWidth={2} className="compass-icon" />
            <span className="crest-year">EST. 2005</span>
          </div>
          <div className="brand-text-block">
            <span className="brand-primary-name">MYCHOICE</span>
            <span className="brand-tagline">AGRICULTURE &amp; COMMODITIES</span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Phone Contact & Action */}
        <div className="header-contact">
          <div className="phone-wrapper">
            <Phone size={13} className="phone-icon" />
            <a href="tel:+251116689021" className="phone-number">+251 (11) 668-9021</a>
          </div>
          <a 
            href="https://mychoice2.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-rfq-pill"
          >
            AGRICULTURE PORTAL ↗
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-toggle-btn"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <div className="drawer-inner">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mobile-drawer-contact">
              <div className="mobile-tel">
                <Phone size={14} />
                <a href="tel:+251116689021">+251 (11) 668-9021</a>
              </div>
              <a
                href="https://mychoice2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-solid-gold full-width"
              >
                LAUNCH AGRICULTURE PORTAL ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
