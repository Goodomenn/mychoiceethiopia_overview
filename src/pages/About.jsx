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
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const personnelBreakdown = [
    { role: 'Executive Directors & Senior Management', count: 3, desc: 'Visionary leadership, strategic oversight, and corporate development.' },
    { role: 'Regional Logistics & Staging Officers', count: 4, desc: 'Stationed permanently across Addis Ababa (Yeka), Semera (Afar), and Mekelle (Kedamay Woyane).' },
    { role: 'Finance, VAT Compliance & SIGTAS Accountants', count: 3, desc: 'Handling electronic invoicing, institutional credit facilities, and regulatory audit trails.' },
    { role: 'Agricultural Aggregators & Field Quality Inspectors', count: 5, desc: 'Managing farm cooperative procurement for Corn, Cotton, Sorghum, Sunflower, and Masho.' },
    { role: 'Operations Specialists & Multilingual Coordinators', count: 4, desc: 'Managing regional commodity dispatch, client relations, and contract execution.' }
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* Page Hero */}
      <section className="sub-page-hero">
        <div className="trail-container">
          <span className="gold-script-tag">Heritage, Ownership &amp; Investment</span>
          <h1 className="sub-page-title">ABOUT MYCHOICE ETHIOPIA</h1>
          <p className="sub-page-lead">
            Established in 2004 E.C. (2012 G.C.) by an Ethiopian visionary investor, operating with deep integrity, origin agricultural stewardship, and comprehensive corporate governance.
          </p>
        </div>
      </section>

      {/* Main Narrative & Investor Authenticity */}
      <section className="trail-container about-content-grid">
        <div className="about-narrative">
          
          <span className="gold-script-tag">Company Background &amp; Establishment</span>
          <h2 className="about-sec-title">Established in 2004 E.C. / 2012 G.C. (14+ Years of Excellence)</h2>
          
          <p className="about-paragraph">
            <strong>My Choice Ethiopia Tour</strong> is a privately owned company established in <strong>2004 E.C. / 2012 G.C.</strong> by an Ethiopian visionary investor in Addis Ababa. The enterprise acquired the necessary company business licenses from the government office of registration, signing to function under the abiding rules and regulations that govern the business realities of the country.
          </p>

          <p className="about-paragraph">
            The main objective of the company is designed in accordance with the commercial law of the land, embarking on its diversified operational activities taking into consideration the cultural values of the local people and benefiting them socially and economically. Over more than 14 years, MyChoice has maintained an uncompromised standing with Ethiopian regulatory and tax authorities.
          </p>

          {/* Ownership & Leadership */}
          <div className="capital-structure-box" style={{ background: '#FAF7F2', borderLeft: '4px solid var(--warm-gold)' }}>
            <h3 className="cs-heading">OWNERSHIP &amp; PROMOTER PROFILE</h3>
            <p className="about-paragraph" style={{ marginBottom: 0 }}>
              <strong>My Choice Ethiopia Tour</strong> is a domicile company. The owner is a prominent businessman and professional with a wide range of knowledge and experience in the Ethiopian economy. Particularly, he is well-informed across tourism, commercial vehicle sectors, and agricultural investment. In general, he possesses extensive knowledge of the economic activities and business realities of the country, and continuously strives for excellence in all commercial endeavors.
            </p>
          </div>

          {/* Investment Section */}
          <h3 className="about-sub-heading">INVESTMENT &amp; ECONOMIC IMPACT</h3>
          <p className="about-paragraph">
            My Choice Ethiopia Tour is engaged in different investment ventures according to the commercial law of Ethiopia, playing a dominant role in the sector and contributing actively to the economic development of the country at large.
          </p>

          {/* Capital Structure & Financial Stability Box */}
          <div className="capital-structure-box">
            <h3 className="cs-heading">Capital Structure &amp; Financial Solvency</h3>
            <p className="cs-p">
              Demonstrating the balance sheet strength essential for large-scale procurement and long-term commodity contracts:
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
                <span className="cs-sub">Backing multi-regional trade deployments</span>
              </div>
            </div>
          </div>

          {/* Sister Companies */}
          <h3 className="about-sub-heading">Sister Ventures &amp; Agricultural Expansion</h3>
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
          </div>

        </div>

        {/* Legal Credentials Card */}
        <div className="about-compliance-card">
          <h3 className="compliance-heading">Verified Legal Credentials</h3>
          <p className="compliance-sub">
            Fully certified and accredited under Ethiopian regulatory law for international commerce and corporate partnerships.
          </p>

          <div className="credentials-list">
            <div className="cred-item">
              <span className="cred-badge">REGISTRATION</span>
              <strong>Business License: 14/666/128419/2005</strong>
              <div className="cred-meta">Federal Ministry of Trade &amp; Industry (Commercial Enterprise &amp; Trade)</div>
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
              <span className="cred-badge">ESTABLISHED</span>
              <strong>2004 E.C. / 2012 G.C.</strong>
              <div className="cred-meta">Over 14+ years of unbroken corporate standing</div>
            </div>
          </div>

          <div className="about-gov-cta">
            <Link to="/governance" className="btn-outline-dark full-width">
              <ShieldCheck size={16} /> View Corporate Governance &amp; Policies ➔
            </Link>
          </div>
        </div>
      </section>

      {/* THREE REAL REGIONAL OPERATIONAL HUBS */}
      <section className="regional-hubs-section">
        <div className="trail-container">
          <div className="hubs-header">
            <span className="gold-script-tag">Physical Presence &amp; Real Locations</span>
            <h2 className="section-main-heading">THREE REGIONAL OPERATIONAL BRANCHES</h2>
            <p className="section-sub-text">
              On-the-ground physical offices guaranteeing localized management, verified logistics, and immediate response.
            </p>
          </div>

          <div className="hubs-cards-grid">
            <div className="hub-card-item">
              <div className="hub-pill">HEAD OFFICE</div>
              <h3 className="hub-city">1. Head Office – Yeka Sub City</h3>
              <p className="hub-address">
                Woreda 09, Gurdsholla, Dawit Building, 3rd Floor, Room 303/304, Addis Ababa
              </p>
              <p className="hub-duty">
                Group executive headquarters, legal administration, master contract negotiations, financial reconciliation, and agricultural trade desks.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '11.5px', color: '#1C1E1B', borderTop: '1px dashed #D5C8B4', paddingTop: '0.5rem' }}>
                <strong>Contact:</strong> Teklay Mengesha (Vice Manager) • Tel: +251-116-67-57-76
              </div>
            </div>

            <div className="hub-card-item">
              <div className="hub-pill">AFAR BRANCH</div>
              <h3 className="hub-city">2. Branch Office – Semera</h3>
              <p className="hub-address">
                Zone 01, Kebele 01, Semera City, Afar Regional State
              </p>
              <p className="hub-duty">
                Regional field operations center, local crop aggregation, liaison with regional agricultural cooperatives, and field coordination.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '11.5px', color: '#1C1E1B', borderTop: '1px dashed #D5C8B4', paddingTop: '0.5rem' }}>
                <strong>Contact:</strong> Samsom Halefom (Logistics Officer) • Mobile: +251-902-41-11-41
              </div>
            </div>

            <div className="hub-card-item">
              <div className="hub-pill">TIGRAY BRANCH</div>
              <h3 className="hub-city">3. Branch Office – Kedamay Woyane Sub City</h3>
              <p className="hub-address">
                BMR Building, 5th Floor, Room Number 509, Mekelle City, Tigray
              </p>
              <p className="hub-duty">
                Regional logistics hub, northern agricultural aggregation for sorghum, sunflower and pulses, and cooperative partnership desk.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '11.5px', color: '#1C1E1B', borderTop: '1px dashed #D5C8B4', paddingTop: '0.5rem' }}>
                <strong>Contact:</strong> Samsom Halefom (Logistics Officer) • Mobile: +251-902-41-11-41
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
