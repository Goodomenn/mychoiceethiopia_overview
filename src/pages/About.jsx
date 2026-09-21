import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  Users, 
  CheckCircle, 
  Building2, 
  Truck, 
  FileText, 
  Leaf,
  Layers,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const personnelBreakdown = [
    { role: 'Executive Directors & Senior Management', count: 3, desc: 'Visionary leadership, strategic oversight, and corporate development.' },
    { role: 'Grade-8 Certified Professional Chauffeurs', count: 17, desc: 'Off-road terrain masters trained in mechanics, defensive driving & logbook compliance.' },
    { role: 'Regional Logistics & Staging Officers', count: 4, desc: 'Stationed permanently across Addis Ababa, Semera (Afar), and Mekelle (Tigray).' },
    { role: 'Finance, VAT Compliance & SIGTAS Accountants', count: 3, desc: 'Handling electronic invoicing, 30-day credit facilities, and institutional audit trails.' },
    { role: 'Expedition Planners & Multilingual Tour Historians', count: 3, desc: 'Specialists in Danakil geology, Tigray rock architecture, and UNESCO sites.' },
    { role: 'Technical Fleet Mechanics & Maintenance Crew', count: 2, desc: 'Conducting certified 5,000km preventative maintenance and winch rigging.' }
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* Page Hero */}
      <section className="sub-page-hero">
        <div className="trail-container">
          <span className="gold-script-tag">Heritage &amp; Governance</span>
          <h1 className="sub-page-title">ABOUT MYCHOICE ETHIOPIA</h1>
          <p className="sub-page-lead">
            A premier Ethiopian hybrid enterprise built upon visionary domestic investment, disciplined corporate governance, origin agricultural stewardship, and institutional logistics excellence.
          </p>
        </div>
      </section>

      {/* Main Narrative & Investor Authenticity */}
      <section className="trail-container about-content-grid">
        <div className="about-narrative">
          
          <span className="gold-script-tag">Enterprise Heritage</span>
          <h2 className="about-sec-title">Visionary Ethiopian Domicile &amp; Scale</h2>
          
          <p className="about-paragraph">
            Founded by a visionary Ethiopian entrepreneur and deeply anchored within the domestic economy, <strong>MyChoice Ethiopia</strong> has evolved over more than twelve years into a robust multi-sectoral enterprise. Our operational foundation combines authentic cultural and ecological discovery for international travelers with the rigorous data-heavy compliance frameworks required by the United Nations, foreign embassies, and international humanitarian NGOs.
          </p>

          <p className="about-paragraph">
            Unlike transient brokers or purely capital-based agencies, MyChoice maintains physical capital assets, permanent regional operations, and an uncompromised regulatory standing with Ethiopian authorities.
          </p>

          {/* Capital Structure & Financial Stability Box */}
          <div className="capital-structure-box">
            <h3 className="cs-heading">Capital Structure &amp; Institutional Solvency</h3>
            <p className="cs-p">
              Demonstrating the balance sheet strength essential for large-scale multi-vehicle NGO leases and international trade cycles:
            </p>
            <div className="cs-metrics-grid">
              <div className="cs-metric-cell">
                <span className="cs-label">Registered Legal Capital</span>
                <span className="cs-val">ETB 1,300,000</span>
                <span className="cs-sub">Formal corporate equity registry</span>
              </div>
              <div className="cs-metric-cell">
                <span className="cs-label">Operational Working Capital Scale</span>
                <span className="cs-val">ETB 100,000,000</span>
                <span className="cs-sub">Credit backing multi-regional deployments</span>
              </div>
            </div>
          </div>

          {/* Sister Companies */}
          <h3 className="about-sub-heading">Sister Ventures &amp; Synergies</h3>
          <p className="about-paragraph">
            The group leverages multi-industry operational capabilities that reinforce each division:
          </p>
          <div className="about-key-points">
            <div className="key-point-item">
              <CheckCircle className="point-icon" size={18} />
              <div>
                <strong>
                  <a href="https://mychoice2.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    Access Ethiopia Commodities (Live Web Portal ↗)
                  </a>:
                </strong> Agricultural enterprise specializing in the supply and export of key local crops: Corn (Maize), raw Cotton, Sorghum, Sunflower oilseeds, and clean Masho (Green Mung Beans) sourced directly from regional farming networks.
              </div>
            </div>
            <div className="key-point-item">
              <CheckCircle className="point-icon" size={18} />
              <div>
                <strong>
                  <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    MyChoice Tours &amp; Corporate Fleet (Live Web Portal ↗)
                  </a>:
                </strong> Dual-funnel leisure expeditions and B2B heavy-duty Toyota Land Cruiser fleet leasing for UN agencies, embassies, and developmental NGOs.
              </div>
            </div>
          </div>

        </div>

        {/* Legal Credentials Card */}
        <div className="about-compliance-card">
          <h3 className="compliance-heading">Verified Legal Credentials</h3>
          <p className="compliance-sub">
            Fully certified and accredited under Ethiopian regulatory law for international commerce and institutional tenders.
          </p>

          <div className="credentials-list">
            <div className="cred-item">
              <span className="cred-badge">REGISTRATION</span>
              <strong>Business License: 14/666/128419/2005</strong>
              <div className="cred-meta">Federal Ministry of Trade &amp; Industry (Tour Operations &amp; Commercial Vehicle Leasing)</div>
            </div>

            <div className="cred-item">
              <span className="cred-badge">TAXATION</span>
              <strong>VAT Registration: #80692</strong>
              <div className="cred-meta">Official Ethiopian Revenues &amp; Customs Authority (ERCA) electronic invoicing</div>
            </div>

            <div className="cred-item">
              <span className="cred-badge">SIGTAS</span>
              <strong>Tax Identification Number (TIN): Active</strong>
              <div className="cred-meta">SIGTAS registered; clean standing with zero tax arrears</div>
            </div>

            <div className="cred-item">
              <span className="cred-badge">CREDIT</span>
              <strong>30-Day Post-Paid Credit Facility</strong>
              <div className="cred-meta">Standardized post-paid settlement against validated timesheets</div>
            </div>
          </div>

          <div className="about-gov-cta">
            <Link to="/governance" className="btn-outline-dark full-width">
              <ShieldCheck size={16} /> View Corporate Governance &amp; Policies ➔
            </Link>
          </div>
        </div>
      </section>

      {/* HUMAN CAPITAL INFOGRAPHIC (32 PROFESSIONALS, 17 GRADE-8 DRIVERS) */}
      <section className="personnel-infographic-section">
        <div className="trail-container">
          
          <div className="personnel-header">
            <span className="gold-script-tag">Organized Human Capital</span>
            <h2 className="section-main-heading">32 DEDICATED PROFESSIONALS</h2>
            <p className="section-sub-text">
              Transforming raw personnel capability into structured operational excellence across all operating corridors.
            </p>
          </div>

          <div className="personnel-grid">
            {personnelBreakdown.map((p, idx) => (
              <div key={idx} className="personnel-card">
                <div className="personnel-top">
                  <span className="personnel-count">{p.count}</span>
                  <span className="personnel-tag">Personnel</span>
                </div>
                <h4 className="personnel-role">{p.role}</h4>
                <p className="personnel-desc">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THREE REGIONAL STAGING HUBS */}
      <section className="regional-hubs-section">
        <div className="trail-container">
          <div className="hubs-header">
            <span className="gold-script-tag">Physical Infrastructure</span>
            <h2 className="section-main-heading">THREE REGIONAL OPERATIONAL HUBS</h2>
            <p className="section-sub-text">
              On-the-ground support centers guaranteeing rapid deployment, preventative vehicle maintenance, and emergency response.
            </p>
          </div>

          <div className="hubs-cards-grid">
            <div className="hub-card-item">
              <div className="hub-pill">HEADQUARTERS</div>
              <h3 className="hub-city">Addis Ababa Central Hub</h3>
              <p className="hub-address">Bole Sub-City, Skylight International Corridor</p>
              <p className="hub-duty">
                Master group coordination, executive diplomatic fleet dispatches, VIP airport transfers, nationwide tour design, and financial audit reconciliation.
              </p>
            </div>

            <div className="hub-card-item">
              <div className="hub-pill">AFAR DESERT GATE</div>
              <h3 className="hub-city">Semera Branch Office</h3>
              <p className="hub-address">Semera Gate, Afar Regional State</p>
              <p className="hub-duty">
                Permanent desert staging base for the Danakil Depression, Erta Ale volcano, and Dallol salt pans. Stationed with 4x4s, Afar scouts, and camping logistics.
              </p>
            </div>

            <div className="hub-card-item">
              <div className="hub-pill">NORTHERN STAGING</div>
              <h3 className="hub-city">Mekelle Branch Office</h3>
              <p className="hub-address">Kedamay Woyane Sub-City, Tigray Regional State</p>
              <p className="hub-duty">
                Regional vehicle maintenance depot and climbing logistics staging for Gheralta rock churches, northern humanitarian operations, and historic circuits.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
