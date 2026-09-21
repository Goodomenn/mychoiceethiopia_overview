import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Coffee, Wheat, Truck, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export default function Subsidiaries() {
  const websites = [
    {
      id: 'mychoice-ethiopia',
      folder: 'D:\\neh\\MyChoice\\client',
      title: 'MyChoice Ethiopia — Expeditions & Corporate Fleet',
      tagline: 'Dual-Funnel Leisure Expeditions & B2B Institutional Fleet Leasing',
      heroImg: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
      summary: 'A state-of-the-art platform servicing international leisure travelers and diplomatic/NGO organizations across Ethiopia.',
      pillars: [
        { title: 'B2C Leisure Expeditions', desc: 'Curated journeys to Lalibela, Simien Mountains, Danakil, and Omo Valley with bilingual guides and luxury 4x4 transport.' },
        { title: 'B2B Fleet Leasing', desc: 'Heavy-duty Toyota Land Cruiser 4x4 (HZJ76/78, Prado, V8, Coasters) outfitted with GPS, winches, and trauma kits.' },
        { title: '17 Grade-8 Drivers', desc: 'Multilingual off-road chauffeurs trained in defensive driving and mechanical field literacy.' },
        { title: '30-Day Credit Facility', desc: 'Standardized post-paid credit terms with electronic VAT #80692 invoicing for UN agencies and international NGOs.' }
      ],
      stats: [
        { label: 'Operating Excellence', value: '12+ Years' },
        { label: 'Certified Drivers', value: '17 Grade-8' },
        { label: 'Regional Hubs', value: 'Addis • Semera • Mekelle' }
      ],
      webUrl: 'https://mychoiceethiopia.vercel.app/',
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
      webUrl: 'https://mychoice2.vercel.app/',
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
            Direct gateways to the two core enterprise digital platforms uniting international adventure travel with certified global agricultural commodity trade.
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
              <div className="sub-card-img-badge">0{idx + 1} • {sub.id === 'mychoice-ethiopia' ? 'Expeditions & Fleet' : 'Agro Agriculture'}</div>
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
