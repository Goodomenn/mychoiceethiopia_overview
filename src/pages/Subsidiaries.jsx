import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Coffee, Wheat, Truck, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export default function Subsidiaries() {
  const websites = [
    {
      id: 'mychoice-ethiopia',
      folder: 'D:\\neh\\MyChoice\\client',
      title: 'MyChoice Ethiopia — Tour Planning & Expeditions',
      tagline: 'Custom Tailored Itineraries, Cultural Journeys & Tour Planning Across Ethiopia',
      heroImg: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
      summary: 'A premier tour planning and expedition platform servicing international travelers, cultural explorers, and organizations with bespoke itinerary creation, licensed guides, and seamless nationwide logistics across Ethiopia.',
      pillars: [
        { title: 'Curated Tour Planning', desc: 'Custom-tailored itineraries covering historic Lalibela rock churches, Simien Mountains trekking, Danakil Depression volcano trails, and authentic Omo Valley cultural encounters.' },
        { title: 'Expedition Transport & 4x4s', desc: 'Field-ready 4x4 safari vehicles outfitted with air conditioning, GPS tracking, winches, and trauma first-aid kits for all terrains.' },
        { title: 'Licensed Professional Guides', desc: 'Multilingual tour leaders and local community scouts delivering deep historical interpretation, exceptional safety, and local cultural courtesy.' },
        { title: 'End-to-End Travel Logistics', desc: 'Domestic flight booking coordination, boutique lodge arrangements, camping gear deployment, permits, and 24/7 dispatch desk assistance.' }
      ],
      stats: [
        { label: 'Operating Excellence', value: '14+ Years' },
        { label: 'Tour Destinations', value: 'All Ethiopian Corridors' },
        { label: 'Regional Hubs', value: 'Addis • Semera • Mekelle' }
      ],
      webUrl: 'https://tour.mychoiceethiopia.com/',
      localFolder: 'D:\\neh\\MyChoice\\client'
    },
    {
      id: 'access-ethiopia',
      folder: 'D:\\neh\\MyChoice\\mychoice2',
      title: 'Access Ethiopia — Sustainable Agriculture & Crop Supply',
      tagline: 'Corn, Cotton, Sorghum, Sunflower & Masho Domestic Supply & Export',
      heroImg: '/images/crop-harvest.jpg',
      summary: 'Premier agricultural enterprise specializing in the supply and export of essential local crops: high-grade Corn, natural Cotton, Sorghum, Sunflower oilseeds, and clean Masho (green mung beans) sourced directly from regional farming networks.',
      pillars: [
        { title: 'Corn (Maize) & Sorghum', desc: 'High-energy white and yellow corn, paired with drought-hardy Ethiopian sorghum supplied for food and feed.' },
        { title: 'Raw Cotton Fiber', desc: 'Naturally harvested clean raw cotton lint and fiber for textile industries and international commerce.' },
        { title: 'Sunflower Oilseeds', desc: 'High-oil yield sunflower seeds cultivated in rich domestic soils for pressing and food processing.' },
        { title: 'Masho (Green Mung Beans)', desc: 'Clean, sortex-processed Masho with high purity, protein content, and full batch origin traceability.' }
      ],
      stats: [
        { label: 'Global Trade', value: '15+ Years' },
        { label: 'Export Destinations', value: '35+ Countries' },
        { label: 'Annual Throughput', value: '50,000+ MT' }
      ],
      webUrl: 'https://agri.mychoiceethiopia.com/',
      localFolder: 'D:\\neh\\MyChoice\\mychoice2'
    }
  ];

  return (
    <div className="sub-page-wrapper">
      {/* Page Header */}
      <section className="sub-page-hero">
        <div className="trail-container">
          <span className="gold-script-tag">Enterprise Ecosystem</span>
          <h1 className="sub-page-title">OUR SUBSIDIARIES &amp; VENTURES</h1>
          <p className="sub-page-lead">
            Direct gateways to the two core enterprise digital platforms uniting international adventure travel, tour planning, and certified agricultural commodity trade.
          </p>
        </div>
      </section>

      {/* Main Subsidiaries Detailed Showcase */}
      <section className="trail-container sub-showcase-grid">
        {websites.map((sub, idx) => (
          <div key={sub.id} className="sub-detail-card">
            <a 
              href={sub.webUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sub-card-hero-img group"
            >
              <img src={sub.heroImg} alt={sub.title} />
              <div className="sub-card-img-badge">0{idx + 1} • {sub.id === 'mychoice-ethiopia' ? 'Tour Planning & Expeditions' : 'Agro Agriculture'}</div>
              <div className="sub-photo-hover-pill">
                Open Live Web Portal <ExternalLink size={12} />
              </div>
            </a>

            <div className="sub-card-body">
              <h2 className="sub-card-h2">{sub.title}</h2>
              <p className="sub-card-tagline">{sub.tagline}</p>
              <p className="sub-card-summary">{sub.summary}</p>

              {/* Pillars Grid */}
              <div className="sub-pillars-grid">
                {sub.pillars.map((p, pIdx) => (
                  <div key={pIdx} className="pillar-item">
                    <span className="pillar-dot">•</span>
                    <div>
                      <strong className="pillar-head">{p.title}:</strong>
                      <span className="pillar-text"> {p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="sub-stats-bar">
                {sub.stats.map((st, sIdx) => (
                  <div key={sIdx} className="sub-stat-col">
                    <span className="sub-stat-val">{st.value}</span>
                    <span className="sub-stat-lbl">{st.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="sub-action-row">
                <a
                  href={sub.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sub-primary-btn"
                >
                  <span>Launch Official Portal ({sub.webUrl.replace('https://', '').replace('/', '')})</span>
                  <ExternalLink size={14} />
                </a>

                <div className="local-path-indicator">
                  <span>Target Web:</span>
                  <code>{sub.webUrl}</code>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Affiliated Ventures Strip */}
      <section className="affiliated-ventures-strip">
        <div className="trail-container">
          <div className="affiliated-inner">
            <h3 className="affiliated-title">Affiliated Group Ventures</h3>
            <p className="affiliated-desc">
              MyChoice Group also oversees premier hospitality and marine subsidiaries:
            </p>
            <div className="affiliated-tags">
              <span className="aff-pill">Bricks Lounge Addis (Luxury Mixology &amp; Dining)</span>
              <span className="aff-pill">Ela Catering Services (1,000+ Covers Diplomatic Food Service)</span>
              <span className="aff-pill">Zfish Aquatic Trade (Deep-Freeze Seafood Import/Export)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
