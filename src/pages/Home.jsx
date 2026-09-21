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
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const [selectedCorridor, setSelectedCorridor] = useState('danakil');
  const [selectedVenture, setSelectedVenture] = useState('tours');
  const [selectedPeriod, setSelectedPeriod] = useState('prompt');

  const handleRouteSearch = (e) => {
    e.preventDefault();
    if (selectedVenture === 'commodities') {
      window.open('https://mychoice2.vercel.app/', '_blank', 'noopener,noreferrer');
    } else {
      window.open('https://mychoiceethiopia.vercel.app/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="trail-home-page">
      
      {/* ========================================================= */}
      {/* 1. HERO BANNER: VIEW FROM INSIDE TENT WITH BOOTS          */}
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
            <span>HYBRID ENTERPRISE • B2C EXPEDITIONS &amp; B2B FLEET LOGISTICS</span>
          </div>
          <h1 className="hero-condensed-heading">
            MYCHOICE ETHIOPIA OPERATIONS
          </h1>
          <div className="hero-script-wrapper">
            <span className="hero-cursive-phrase">
              Collect moments, empower institutional journeys
            </span>
            <svg className="curved-arrow-icon" width="34" height="24" viewBox="0 0 34 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4 C14 18, 22 20, 30 14" />
              <polyline points="24 16 30 14 28 8" />
            </svg>
          </div>

          {/* DUAL-FUNNEL ROUTING TERMINAL OVERLAID IN HERO */}
          <div className="hero-dual-funnel-box">
            <div className="funnel-cards-row">
              
              {/* Funnel 1: B2C Leisure Tourism */}
              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="funnel-card b2c-funnel group"
              >
                <div className="funnel-card-header">
                  <span className="funnel-tag">B2C LEISURE EXPEDITIONS</span>
                  <span className="funnel-arrow">↗</span>
                </div>
                <h3 className="funnel-title">Explore Cultural &amp; Desert Expeditions</h3>
                <p className="funnel-desc">
                  Danakil Depression, Erta Ale Lava Lake, Gheralta Sandstone Churches, and UNESCO Lalibela sanctuaries with expert local guides.
                </p>
                <div className="funnel-features">
                  <span>🌋 Semera Desert Gateway</span>
                  <span>⛪ Mekelle Gheralta Hub</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    Open Portal <ExternalLink size={12} />
                  </span>
                </div>
              </a>

              {/* Funnel 2: B2B Institutional Fleet Logistics */}
              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="funnel-card b2b-funnel group"
              >
                <div className="funnel-card-header">
                  <span className="funnel-tag b2b-tag">B2B INSTITUTIONAL LOGISTICS</span>
                  <span className="funnel-arrow">↗</span>
                </div>
                <h3 className="funnel-title">Access NGO &amp; UN Fleet Portal</h3>
                <p className="funnel-desc">
                  Heavy-duty Toyota Land Cruiser 4x4s, 17 Grade-8 certified chauffeurs, 30-day credit facility, and electronic VAT #80692 invoicing.
                </p>
                <div className="funnel-features">
                  <span>📄 SIGTAS Verified Active</span>
                  <span>🛡️ 30-Day Credit Terms</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    Open Portal <ExternalLink size={12} />
                  </span>
                </div>
              </a>

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
              <div className="counter-number">12+</div>
              <div className="counter-label">Years of Excellence</div>
              <div className="counter-sub">Delivering overland travel &amp; heavy logistics</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">32</div>
              <div className="counter-label">Dedicated Professionals</div>
              <div className="counter-sub">University-degreed operations coordinators &amp; staff</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">17</div>
              <div className="counter-label">Grade-8 Certified Chauffeurs</div>
              <div className="counter-sub">Off-road terrain masters with mechanical field literacy</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">3</div>
              <div className="counter-label">Strategic Regional Hubs</div>
              <div className="counter-sub">Addis Ababa HQ • Semera (Afar) • Mekelle (Tigray)</div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SELECTOR BAR ("ВЫБОР МАРШРУТА" STYLE)                   */}
      {/* ========================================================= */}
      <section className="route-selector-section">
        <div className="trail-container">
          <div className="selector-card-box">
            <h2 className="selector-title">SELECT CORRIDOR &amp; VENTURE</h2>
            
            <form onSubmit={handleRouteSearch} className="selector-form-row">
              {/* Field 1: Destination / Corridor */}
              <div className="selector-field">
                <span className="field-label">Corridor / Hub</span>
                <div className="input-icon-wrap">
                  <MapPin size={16} className="field-icon" />
                  <select
                    value={selectedCorridor}
                    onChange={(e) => setSelectedCorridor(e.target.value)}
                    className="selector-select"
                  >
                    <option value="danakil">Semera Hub — Danakil &amp; Erta Ale</option>
                    <option value="mekelle">Mekelle Hub — Gheralta Rock Churches</option>
                    <option value="addis">Addis Ababa HQ — Diplomatic &amp; Nationwide</option>
                    <option value="lalibela">Historic Lalibela &amp; Simien Treks</option>
                    <option value="yirgacheffe">Corn, Cotton &amp; Sorghum Agricultural Belts</option>
                  </select>
                </div>
              </div>

              {/* Field 2: Venture Focus */}
              <div className="selector-field">
                <span className="field-label">Venture Focus</span>
                <div className="input-icon-wrap">
                  <Compass size={16} className="field-icon" />
                  <select
                    value={selectedVenture}
                    onChange={(e) => setSelectedVenture(e.target.value)}
                    className="selector-select"
                  >
                    <option value="tours">B2C Adventure Expeditions (Tours)</option>
                    <option value="fleet">B2B UN/NGO Fleet Leasing</option>
                    <option value="commodities">Local Crops (Corn &amp; Cotton Supply)</option>
                    <option value="commodities">Local Crops (Sorghum, Sunflower &amp; Masho)</option>
                  </select>
                </div>
              </div>

              {/* Field 3: Period / Season */}
              <div className="selector-field">
                <span className="field-label">Period / Season</span>
                <div className="input-icon-wrap">
                  <Calendar size={16} className="field-icon" />
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="selector-select"
                  >
                    <option value="prompt">Prompt Dispatch / Tour</option>
                    <option value="oct-mar">October - March (Dry Season)</option>
                    <option value="year-round">Year-Round Availability</option>
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
      {/* 4. THE SINUOUS MAP-TRAIL ROUTE CONNECTING VENTURES        */}
      {/* ========================================================= */}
      <section className="trail-map-section">
        <div className="trail-container relative-trail-box">
          
          {/* Continuous Curved Map Trail Line */}
          <div className="svg-trail-background">
            <svg viewBox="0 0 1000 1600" preserveAspectRatio="none" className="trail-svg-line">
              <path
                d="M 680,80 C 850,220 750,420 500,480 C 200,540 100,750 300,900 C 500,1050 850,1180 720,1350 C 650,1450 550,1520 500,1580"
                fill="none"
                stroke="#A89A89"
                strokeWidth="2.5"
                strokeDasharray="8,8"
              />
              <circle cx="680" cy="80" r="5" fill="#C0392B" />
              <circle cx="680" cy="80" r="10" fill="none" stroke="#C0392B" strokeWidth="1.2" opacity="0.6" />
              
              <circle cx="150" cy="620" r="5" fill="#C0392B" />
              <circle cx="150" cy="620" r="10" fill="none" stroke="#C0392B" strokeWidth="1.2" opacity="0.6" />

              <circle cx="860" cy="1160" r="5" fill="#C0392B" />
              <circle cx="860" cy="1160" r="10" fill="none" stroke="#C0392B" strokeWidth="1.2" opacity="0.6" />
            </svg>
          </div>

          {/* ======================================================== */}
          {/* STOP 1: LEFT PHOTO + RIGHT CONTENT (B2C EXPEDITIONS)     */}
          {/* ======================================================== */}
          <div id="stop-expeditions" className="trail-stop-row stop-left-photo">
            <div className="stop-photo-col">
              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="torn-photo-link group"
              >
                <div className="torn-photo-wrapper brush-mask-1">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
                    alt="Adventurer standing on rocky cliff peak overlooking mountains"
                    className="torn-image"
                  />
                  <div className="photo-hover-tag">Launch Tour Web Portal ↗</div>
                </div>
              </a>
            </div>

            <div className="stop-content-col">
              <div className="watermark-heading-wrap">
                <span className="gold-script-watermark">Danakil &amp; Gheralta</span>
                <h3 className="stop-venture-title">
                  MYCHOICE ADVENTURE EXPEDITIONS
                </h3>
              </div>

              <div className="stop-meta-list">
                <div className="meta-line">
                  <span className="meta-label">Regional Gateways:</span>
                  <span className="meta-val">Semera (Afar Gate) &amp; Mekelle (Kedamay Woyane Sub-City)</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-val">4 to 12 Days Curated Expeditions with Transparent Pricing</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Highlights:</span>
                  <span className="meta-val">Erta Ale Active Volcano, Dallol Salt Springs, Abuna Yemata Guh</span>
                </div>
              </div>

              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="trail-action-link"
              >
                <span>EXPLORE EXPEDITIONS (OPEN WEB PORTAL)</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* ======================================================== */}
          {/* STOP 2: RIGHT PHOTO + LEFT CONTENT (AGRICULTURE)         */}
          {/* ======================================================== */}
          <div id="stop-commodities" className="trail-stop-row stop-right-photo">
            <div className="stop-content-col">
              <div className="watermark-heading-wrap">
                <span className="gold-script-watermark">Local Crop Supply & Export</span>
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
                <span>EXPLORE AGRICULTURAL EXPORTS (OPEN WEB PORTAL)</span>
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

          {/* ======================================================== */}
          {/* STOP 3: LEFT PHOTO + RIGHT CONTENT (B2B FLEET LOGISTICS)  */}
          {/* ======================================================== */}
          <div id="stop-fleet" className="trail-stop-row stop-left-photo">
            <div className="stop-photo-col">
              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="torn-photo-link group"
              >
                <div className="torn-photo-wrapper brush-mask-3">
                  <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80"
                    alt="Heavy duty Toyota 4x4 convoy in challenging terrain"
                    className="torn-image"
                  />
                  <div className="photo-hover-tag">Launch B2B Fleet Web Portal ↗</div>
                </div>
              </a>
            </div>

            <div className="stop-content-col">
              <div className="watermark-heading-wrap">
                <span className="gold-script-watermark">Institutional Logistics</span>
                <h3 className="stop-venture-title">
                  B2B UN &amp; NGO INSTITUTIONAL FLEET LEASING
                </h3>
              </div>

              <div className="stop-meta-list">
                <div className="meta-line">
                  <span className="meta-label">Fleet Portfolio:</span>
                  <span className="meta-val">Toyota Land Cruiser HZJ76/78, Prado, V8, HiAce &amp; Coasters</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Chauffeur Corps:</span>
                  <span className="meta-val">17 Grade-8 Certified Multilingual Operators with mechanical skills</span>
                </div>
                <div className="meta-line">
                  <span className="meta-label">Financial Credit:</span>
                  <span className="meta-val">Standardized 30-Day Post-Paid Invoicing (VAT Registration #80692)</span>
                </div>
              </div>

              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="trail-action-link"
              >
                <span>ACCESS INSTITUTIONAL FLEET PORTAL (OPEN WEB)</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BOTTOM PANORAMIC EXPEDITION BANNER                     */}
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
            <h4 className="panorama-title">EXPERIENCE ETHIOPIA’S PREMIER ENTERPRISE</h4>
            <p className="panorama-sub">
              Dual-funnel excellence uniting authentic wilderness discovery with institutional logistics and sustainable agricultural exports.
            </p>
            <div className="panorama-actions">
              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-solid-gold"
              >
                Tours &amp; Expeditions Portal ↗
              </a>
              <a 
                href="https://mychoiceethiopia.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-white"
              >
                B2B Fleet Logistics Portal ↗
              </a>
              <a 
                href="https://mychoice2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-solid-gold"
              >
                Agriculture Export Portal ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
