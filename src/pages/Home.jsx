import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Compass, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Users, 
  Building2, 
  Award,
  ExternalLink,
  Wheat,
  Layers
} from 'lucide-react';

export default function Home() {
  // Flag: Expeditions and Corporate Fleet are preserved in codebase but hidden from UI for now
  const SHOW_FLEET_AND_TOURS = false;

  const [selectedCorridor, setSelectedCorridor] = useState('corn-cotton');
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [selectedPeriod, setSelectedPeriod] = useState('prompt');

  const handleRouteSearch = (e) => {
    e.preventDefault();
    window.open('https://mychoice2.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="trail-home-page">
      
      {/* ========================================================= */}
      {/* 1. HERO BANNER: VIEW FROM INSIDE TENT                     */}
      {/* ========================================================= */}
      <section className="trail-hero-section">
        {/* Hero Background Image */}
        <div className="hero-tent-bg">
          <img
            src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1920&q=85"
            alt="View from inside tent looking onto mountain peaks"
            className="hero-tent-img"
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        {/* Hero Central Typography */}
        <div className="trail-container hero-content-inner">
          <div className="hero-top-badge">
            <span className="badge-dot"></span>
            <span>SUSTAINABLE AGRICULTURE &amp; LOCAL CROP SUPPLY</span>
          </div>
          <h1 className="hero-condensed-heading">
            MYCHOICE ETHIOPIA CROPS &amp; HARVEST
          </h1>
          <div className="hero-script-wrapper">
            <span className="hero-cursive-phrase">
              Sustaining communities, supplying prime origin harvest
            </span>
            <svg className="curved-arrow-icon" width="34" height="24" viewBox="0 0 34 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4 C14 18, 22 20, 30 14" />
              <polyline points="24 16 30 14 28 8" />
            </svg>
          </div>

          {/* DUAL ACTION CARDS OVERLAID IN HERO (Focused on Agriculture & Subsidiaries) */}
          <div className="hero-dual-funnel-box">
            <div className="funnel-cards-row">
              
              {/* Card 1: Direct Agriculture Portal */}
              <a 
                href="https://mychoice2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="funnel-card b2c-funnel group"
              >
                <div className="funnel-card-header">
                  <span className="funnel-tag" style={{ color: '#F1C40F' }}>LOCAL CROP SUPPLY &amp; EXPORT</span>
                  <span className="funnel-arrow">↗</span>
                </div>
                <h3 className="funnel-title">Access Ethiopia Agricultural Portal</h3>
                <p className="funnel-desc">
                  Supplying and exporting Corn (Maize), raw Cotton fiber, Sorghum, Sunflower seeds, and Sortex-cleaned Masho (green mung beans) directly from regional farming networks.
                </p>
                <div className="funnel-features">
                  <span>🌽 Corn &amp; Sorghum</span>
                  <span>🌱 Cotton &amp; Sunflower</span>
                  <span>🌿 Masho</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    Open Portal <ExternalLink size={12} />
                  </span>
                </div>
              </a>

              {/* Card 2: Enterprise Ecosystem Directory */}
              <Link 
                to="/subsidiaries" 
                className="funnel-card b2b-funnel group"
              >
                <div className="funnel-card-header">
                  <span className="funnel-tag b2b-tag">ENTERPRISE ECOSYSTEM</span>
                  <span className="funnel-arrow">➔</span>
                </div>
                <h3 className="funnel-title">Explore Subsidiaries &amp; Trade Hubs</h3>
                <p className="funnel-desc">
                  Inspect our agricultural facilities, supply networks, legal trade certifications, and regional logistics infrastructure spanning East Africa.
                </p>
                <div className="funnel-features">
                  <span>📄 Trade License Validated</span>
                  <span>🛡️ Full Traceability</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    Directory ➔
                  </span>
                </div>
              </Link>

              {/* Preserved Code for Expeditions and Fleet Funnels (Hidden from layout for now) */}
              {SHOW_FLEET_AND_TOURS && (
                <>
                  <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer" className="funnel-card b2c-funnel">
                    <h3>B2C Leisure Expeditions</h3>
                  </a>
                  <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer" className="funnel-card b2b-funnel">
                    <h3>B2B Institutional Logistics</h3>
                  </a>
                </>
              )}

            </div>
          </div>

        </div>

        {/* TORN PAPER / BRUSH RAGGED EDGE DIVIDER */}
        <div className="torn-paper-edge">
          <svg viewBox="0 0 1200 65" preserveAspectRatio="none" className="torn-svg">
            <path
              d="M0,0 L0,22 Q30,42 60,20 Q120,55 180,24 Q240,48 300,18 Q360,52 420,26 Q480,44 540,16 Q600,50 660,22 Q720,46 780,18 Q840,54 900,28 Q960,48 1020,20 Q1080,52 1140,24 L1200,18 L1200,65 L0,65 Z"
              fill="#FAF7F2"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DYNAMIC QUANTITATIVE METRICS COUNTER BAR               */}
      {/* ========================================================= */}
      <section className="quantitative-metrics-bar">
        <div className="trail-container">
          <div className="metrics-counter-grid">
            
            <div className="counter-card">
              <div className="counter-number">15+</div>
              <div className="counter-label">Years Operating Experience</div>
              <div className="counter-sub">Reliable domestic grain, fiber &amp; pulse distribution</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">5</div>
              <div className="counter-label">Core Agricultural Crops</div>
              <div className="counter-sub">Corn, Cotton, Sorghum, Sunflower &amp; Masho</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">12K+</div>
              <div className="counter-label">Smallholder Cooperative Network</div>
              <div className="counter-sub">Direct field procurement with 100% batch traceability</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">100%</div>
              <div className="counter-label">Sortex &amp; Purity Standards</div>
              <div className="counter-sub">Meets international phytosanitary export specs</div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SELECTOR BAR ("SELECT CROP & BELT")                    */}
      {/* ========================================================= */}
      <section className="route-selector-section">
        <div className="trail-container">
          <div className="selector-card-box">
            <h2 className="selector-title">SELECT REGIONAL CROP &amp; HARVEST CORRIDOR</h2>
            
            <form onSubmit={handleRouteSearch} className="selector-form-row">
              {/* Field 1: Destination / Corridor */}
              <div className="selector-field">
                <span className="field-label">Production Corridor</span>
                <div className="input-icon-wrap">
                  <MapPin size={16} className="field-icon" />
                  <select
                    value={selectedCorridor}
                    onChange={(e) => setSelectedCorridor(e.target.value)}
                    className="selector-select"
                  >
                    <option value="corn-cotton">Corn &amp; Cotton Agricultural Belts</option>
                    <option value="sorghum-sunflower">Sorghum &amp; Sunflower Regional Fields</option>
                    <option value="masho-plains">Masho (Mung Bean) Grower Plains</option>
                    <option value="nationwide">Nationwide Agricultural Aggregation</option>
                  </select>
                </div>
              </div>

              {/* Field 2: Crop Selection */}
              <div className="selector-field">
                <span className="field-label">Crop Supply Focus</span>
                <div className="input-icon-wrap">
                  <Compass size={16} className="field-icon" />
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="selector-select"
                  >
                    <option value="corn">Corn (Maize) — High Grade</option>
                    <option value="cotton">Raw Cotton Fiber &amp; Lint</option>
                    <option value="sorghum">Sorghum Grain (Food &amp; Feed)</option>
                    <option value="sunflower">Sunflower Oilseeds</option>
                    <option value="masho">Masho (Green Mung Beans)</option>
                  </select>
                </div>
              </div>

              {/* Field 3: Period / Season */}
              <div className="selector-field">
                <span className="field-label">Supply Schedule</span>
                <div className="input-icon-wrap">
                  <Calendar size={16} className="field-icon" />
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="selector-select"
                  >
                    <option value="prompt">Prompt Dispatch / Spot Order</option>
                    <option value="seasonal">Annual Harvest Contract</option>
                    <option value="year-round">Continuous Warehouse Supply</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <div className="selector-btn-wrap">
                <button type="submit" className="selector-red-btn">
                  LAUNCH LIVE PORTAL ↗
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THE SINUOUS MAP-TRAIL ROUTE (AGRICULTURE FEATURED)     */}
      {/* ========================================================= */}
      <section className="trail-map-section">
        <div className="trail-container relative-trail-box">

          {/* Preserved Code for Stop 1: B2C Expeditions (Hidden from layout for now) */}
          {SHOW_FLEET_AND_TOURS && (
            <div id="stop-expeditions" className="trail-stop-row stop-left-photo">
              {/* Expeditions markup preserved */}
            </div>
          )}

          {/* ======================================================== */}
          {/* STOP 2: AGRICULTURE & LOCAL CROPS (FEATURED)             */}
          {/* ======================================================== */}
          <div id="stop-commodities" className="trail-stop-row stop-right-photo" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
            <div className="stop-content-col">
              <div className="watermark-heading-wrap">
                <span className="gold-script-watermark">Local Crop Supply &amp; Export</span>
                <h3 className="stop-venture-title">
                  MYCHOICE SUSTAINABLE AGRICULTURE &amp; EXPORT
                </h3>
              </div>

              <div className="stop-meta-list">
                <div className="meta-line">
                  <span className="meta-label">Cereals &amp; Grains:</span>
                  <span className="meta-val">High-grade Corn (Maize) and drought-resilient Sorghum harvested directly from prime domestic farming belts.</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Fibers &amp; Oilseeds:</span>
                  <span className="meta-val">Pure raw Cotton fiber and high-yield Sunflower seeds processed for domestic mills and international buyers.</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Export Pulses:</span>
                  <span className="meta-val">Sortex-cleaned Masho (Green Mung Beans) sourced directly from regional farmer grower networks.</span>
                </div>
              </div>

              <a 
                href="https://mychoice2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="trail-action-link"
              >
                <span>EXPLORE AGRICULTURAL CROPS (OPEN WEB PORTAL)</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>

            <div className="stop-photo-col">
              <a 
                href="https://mychoice2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="torn-photo-link group"
              >
                <div className="torn-photo-wrapper brush-mask-2">
                  <img
                    src="/images/crop-harvest.jpg"
                    alt="Ethiopian highland cereal and sorghum crop harvest in field"
                    className="torn-image"
                  />
                  <div className="photo-hover-tag">Launch Access Ethiopia Agriculture Portal ↗</div>
                </div>
              </a>
            </div>
          </div>

          {/* Preserved Code for Stop 3: B2B Fleet Logistics (Hidden from layout for now) */}
          {SHOW_FLEET_AND_TOURS && (
            <div id="stop-fleet" className="trail-stop-row stop-left-photo">
              {/* Fleet markup preserved */}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BOTTOM PANORAMIC BANNER                                */}
      {/* ========================================================= */}
      <section className="trail-bottom-panorama">
        <div className="panorama-img-box">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            alt="Mountain ridge panorama"
            className="panorama-full-img"
          />
          <div className="panorama-torn-top">
            <svg viewBox="0 0 1200 45" preserveAspectRatio="none" className="torn-top-svg">
              <path
                d="M0,45 L0,20 Q60,0 120,24 Q180,4 240,28 Q300,8 360,32 Q420,10 480,30 Q540,8 600,34 Q660,12 720,30 Q780,10 840,32 Q900,12 960,30 Q1020,8 1080,32 Q1140,12 1200,26 L1200,0 L0,0 Z"
                fill="#FAF7F2"
              />
            </svg>
          </div>
          <div className="panorama-content-overlay">
            <h4 className="panorama-title">MYCHOICE ETHIOPIA AGRICULTURAL SUPPLY</h4>
            <p className="panorama-sub">
              Specialized domestic distribution and international export of Corn, Cotton, Sorghum, Sunflower, and Masho.
            </p>
            <div className="panorama-actions">
              <a 
                href="https://mychoice2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-solid-gold"
              >
                Agriculture Export Portal ↗
              </a>
              <Link 
                to="/subsidiaries" 
                className="btn-outline-white"
              >
                Explore Subsidiaries
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline-white"
              >
                Contact Group Trade Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
