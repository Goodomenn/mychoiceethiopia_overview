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
  Eye,
  Target,
  Leaf,
  Globe2
} from 'lucide-react';

export default function Home() {
  // Flag: Expeditions and Corporate Fleet are preserved in codebase but hidden from UI for now
  const SHOW_FLEET_AND_TOURS = false;

  const [selectedCorridor, setSelectedCorridor] = useState('corn-cotton');
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [selectedPeriod, setSelectedPeriod] = useState('prompt');

  const handleRouteSearch = (e) => {
    e.preventDefault();
    window.open('https://agri.mychoiceethiopia.com/', '_blank', 'noopener,noreferrer');
  };

  const objectivesList = [
    'Expansion of Agriculture production and sustainable local crop supply.',
    'Expansion of the vehicle rental service and tour activities business model.',
    'Providing high quality service that meets international standards up on the demands and expectations of our customers.',
    'Focusing on the values we offer to our customers.'
  ];

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
            <span>ESTABLISHED 2004 E.C. (2012 G.C.) • VISIONARY ETHIOPIAN ENTERPRISE</span>
          </div>
          <h1 className="hero-condensed-heading">
            MYCHOICE ETHIOPIA ENTERPRISE
          </h1>
          <div className="hero-script-wrapper">
            <span className="hero-cursive-phrase">
              Pioneering excellence, sustainable agriculture &amp; origin harvest
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
                href="https://agri.mychoiceethiopia.com/" 
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

              {/* Card 2: Direct Tour & Expeditions Portal */}
              <a 
                href="https://tour.mychoiceethiopia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="funnel-card b2b-funnel group"
              >
                <div className="funnel-card-header">
                  <span className="funnel-tag b2b-tag">TOUR PLANNING &amp; EXPEDITIONS</span>
                  <span className="funnel-arrow">↗</span>
                </div>
                <h3 className="funnel-title">MyChoice Ethiopia Tour &amp; Travel Portal</h3>
                <p className="funnel-desc">
                  Curated cultural journeys, bespoke itineraries, certified guides, and adventure expeditions covering Lalibela, Simien Mountains, Danakil Depression, and nationwide travel logistics.
                </p>
                <div className="funnel-features">
                  <span>🗺️ Curated Routes</span>
                  <span>⭐ Licensed Tour Guides</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--warm-gold)', fontWeight: 600 }}>
                    Open Tour Portal <ExternalLink size={12} />
                  </span>
                </div>
              </a>

              {/* Preserved Code for Expeditions and Fleet Funnels (Hidden from layout for now) */}
              {SHOW_FLEET_AND_TOURS && (
                <>
                  <a href="https://tour.mychoiceethiopia.com/" target="_blank" rel="noopener noreferrer" className="funnel-card b2c-funnel">
                    <h3>B2C Leisure Expeditions</h3>
                  </a>
                  <a href="https://tour.mychoiceethiopia.com/" target="_blank" rel="noopener noreferrer" className="funnel-card b2b-funnel">
                    <h3>B2B Corporate Logistics</h3>
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
              <div className="counter-number">14+</div>
              <div className="counter-label">Years of Excellence</div>
              <div className="counter-sub">Established 2004 E.C. (2012 G.C.) in Addis Ababa</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">5</div>
              <div className="counter-label">Core Agricultural Crops</div>
              <div className="counter-sub">Corn, Cotton, Sorghum, Sunflower &amp; Masho</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">3</div>
              <div className="counter-label">Regional Operational Hubs</div>
              <div className="counter-sub">Yeka (Addis Ababa) • Semera (Afar) • Mekelle (Tigray)</div>
            </div>

            <div className="counter-card">
              <div className="counter-number">100%</div>
              <div className="counter-label">Sortex &amp; Purity Standards</div>
              <div className="counter-sub">Direct smallholder partnership &amp; batch traceability</div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR VISION, OUR GOALS & OUR OBJECTIVES SECTION         */}
      {/* ========================================================= */}
      <section className="vision-goals-section">
        <div className="trail-container">
          <div className="vg-header-block">
            <span className="gold-script-tag">Guiding Principles &amp; Ethos</span>
            <h2 className="section-main-heading">OUR VISION, GOALS &amp; OBJECTIVES</h2>
            <p className="section-sub-text">
              Building one of the most reliable and distinguished enterprises in East Africa while upholding our green environmental commitments and community social responsibilities.
            </p>
          </div>

          <div className="vg-cards-grid">
            
            {/* Card 1: Our Vision */}
            <div className="vg-card-item">
              <div className="vg-card-top">
                <div className="vg-icon-box">
                  <Eye size={22} />
                </div>
                <span className="vg-pill">STRATEGIC HORIZON</span>
              </div>
              <h3 className="vg-title">OUR VISION</h3>
              <p className="vg-desc">
                My Choice Ethiopia Tour is a preferred company for customers in Ethiopia and foreign companies, individuals as well as other entities.
              </p>
              <p className="vg-desc" style={{ marginTop: '0.5rem' }}>
                Our company to become pioneer and world class comprehensive vehicle rent and tourism service provider and earn the admiration of investors, customers, employees, government and community at large. And our company has a vision through to be one of the biggest, reliable and attractive companies in East Africa and to offer a superior world class quality service especially in Ethiopia.
              </p>
            </div>

            {/* Card 2: Our Goals */}
            <div className="vg-card-item">
              <div className="vg-card-top">
                <div className="vg-icon-box">
                  <Target size={22} />
                </div>
                <span className="vg-pill green">SUSTAINABILITY</span>
              </div>
              <h3 className="vg-title">OUR GOALS</h3>
              <p className="vg-desc">
                We set our goals knowing that we are capable of achieving them by adopting the program of giving emphasis to the green environment commitments. The concern that we have regarding our environment is deeper into our operations so as to benefit our fragile ecology and the society taking into account our social responsibilities.
              </p>
              <p className="vg-desc" style={{ marginTop: '0.5rem' }}>
                We are putting our effort into improving the wellbeing and safety of our employees, maintain the highest international standards, and we value working with like-minded partners to reduce negative environmental impacts on our environment and to promote our operational sustainability.
              </p>
            </div>

            {/* Card 3: Our Objectives */}
            <div className="vg-card-item">
              <div className="vg-card-top">
                <div className="vg-icon-box">
                  <CheckCircle2 size={22} />
                </div>
                <span className="vg-pill gold">CORE PILLARS</span>
              </div>
              <h3 className="vg-title">OUR OBJECTIVES</h3>
              <ul className="vg-objectives-list">
                {objectivesList.map((obj, i) => (
                  <li key={i}>
                    <span className="vg-bullet">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #EAE2D2', fontSize: '11.5px', color: '#566573' }}>
                Promoting customer value, local community benefits, and environmental harmony.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SELECTOR BAR ("SELECT CROP & BELT")                    */}
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
      {/* 5. THE SINUOUS MAP-TRAIL ROUTE (AGRICULTURE FEATURED)     */}
      {/* ========================================================= */}
      <section className="trail-map-section">
        <div className="trail-container relative-trail-box">

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
                href="https://agri.mychoiceethiopia.com/" 
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
                href="https://agri.mychoiceethiopia.com/" 
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

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BOTTOM PANORAMIC BANNER                                */}
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
            <h4 className="panorama-title">MYCHOICE ETHIOPIA ENTERPRISE</h4>
            <p className="panorama-sub">
              Established in 2004 E.C. (2012 G.C.). Sourcing and supplying Corn, Cotton, Sorghum, Sunflower, and Masho across Ethiopia and East Africa.
            </p>
            <div className="panorama-actions">
              <a 
                href="https://agri.mychoiceethiopia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-solid-gold"
              >
                Agriculture Export Portal ↗
              </a>
              <a 
                href="https://tour.mychoiceethiopia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-solid-gold"
              >
                Tours &amp; Expeditions Portal ↗
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
