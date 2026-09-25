import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Truck, 
  Users, 
  CreditCard, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Calendar, 
  MapPin, 
  Radio, 
  Navigation, 
  ChevronRight,
  Download,
  Building2,
  Clock,
  PhoneCall,
  Send
} from 'lucide-react';

export default function CorporateFleet() {
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const fleetCatalog = [
    {
      id: 'hzj76',
      name: 'Toyota Land Cruiser HZJ76 / 78 Hardtop 4x4',
      category: 'Remote Humanitarian & Field Operations',
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      specs: [
        '4.2L 6-Cylinder 1HZ Naturally Aspirated Diesel',
        'Dual 90L Fuel Tanks (180L Total Field Range)',
        'Heavy-Duty Winch, Snorkel, & High-Lift Jack',
        'Built-in VHF/HF Radio & Real-time GPS Tracker',
        'Professional Off-Road Chauffeur (Educated up to Grade 8)',
        'Comprehensive Medical First Aid Trauma Kit'
      ],
      idealFor: 'Afar desert, Tigray mountain passes, Omo Valley, and remote NGO project evaluations.'
    },
    {
      id: 'prado',
      name: 'Toyota Land Cruiser Prado TX / VX 4WD',
      category: 'Executive Diplomatic & Field Mission',
      img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Full-time 4WD with Active Traction Control',
        'Plush Air-conditioned Cabin for 5-7 Delegates',
        'Reinforced Suspension for Rural Corridors',
        'GPS Telemetry & Speed Limiter Equipped',
        'Uniformed Multilingual Professional Chauffeur',
        'Full Comprehensive Institutional Insurance'
      ],
      idealFor: 'Diplomatic missions, donor delegations, and executive regional conferences.'
    },
    {
      id: 'v8',
      name: 'Toyota Land Cruiser V8 (200 / 300 Series)',
      category: 'VIP & High-Level Government Delegations',
      img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Twin-Turbo V8 Engine with Maximum Torque',
        'Executive Armored / VIP Comfort Configurations',
        'Addis Ababa Airport VIP Protocol Clearance',
        'Satellite Navigation & Encrypted Communications',
        'Senior Security-Trained Executive Chauffeur',
        'Priority 24/7 Mechanical Concierge Support'
      ],
      idealFor: 'Head-of-state visits, bilateral summits, and institutional leadership transit.'
    },
    {
      id: 'hiace',
      name: 'Toyota HiAce High-Roof & 4WD Commuter Van',
      category: 'Group Transit & Field Staff Transfer',
      img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Spacious Seating for 12-14 Personnel with Luggage',
        'Dual Front & Rear Climate Control Air Conditioning',
        'Reinforced Chassis for Inter-City Highways',
        'Validated Daily Passenger & Mileage Logbooks',
        'Professional Group Transit Operator (Educated up to Grade 8)',
        'Regular 5,000km Certified Preventative Maintenance'
      ],
      idealFor: 'Project staff rotations, survey teams, and workshop participant transfers.'
    },
    {
      id: 'coaster',
      name: 'Toyota Coaster 30-Seater Deluxe Coach',
      category: 'Institutional Delegations & Conferences',
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Full Capacity 30 Passenger High-Back Seating',
        'Heavy-Duty Suspension for Highway & Mountain Passes',
        'Public Address (PA) Audio & Communication System',
        'Overhead Luggage Racks & Deep Rear Luggage Trunk',
        'Senior Bus-Certified Chauffeur + Assistant Conductor',
        'Dedicated Technical Staging in Addis, Mekelle & Semera'
      ],
      idealFor: 'UN agency workshops, regional summits, and large institutional field visits.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Institutional Pre-Qualification',
      desc: 'Instant verification via SIGTAS tax systems using TIN and VAT #80692 credentials. Bilateral Master Service Agreement (MSA) signing without friction.'
    },
    {
      step: '02',
      title: 'Fleet Staging & Logbook Dispatch',
      desc: 'Deployment from Addis Ababa, Semera (Afar Gate), or Mekelle (Tigray Gate). Vehicles dispatched with validated daily timesheets and GPS telemetry.'
    },
    {
      step: '03',
      title: 'Consolidated Monthly VAT Invoicing',
      desc: 'Submission of itemized monthly electronic VAT invoices (#80692) accompanied by signed client logbook sheets and duty verification vouchers.'
    },
    {
      step: '04',
      title: '30-Day Post-Paid Settlement',
      desc: 'Settlement via direct bank wire transfer within 30 days post-invoice. Zero upfront capital friction for institutional procurement teams.'
    }
  ];

  const handleRfq = (e) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  return (
    <div className="fleet-page-wrapper">
      
      {/* Hero Header */}
      <section className="fleet-hero-banner">
        <div className="trail-container">
          <div className="fleet-hero-badge">
            <ShieldCheck size={16} className="badge-icon" />
            <span>INSTITUTIONAL PROCUREMENT PORTAL • TENDER COMPLIANT</span>
          </div>
          <h1 className="fleet-hero-title">
            B2B FLEET LOGISTICS &amp; NGO CAR LEASING
          </h1>
          <p className="fleet-hero-sub">
            Providing mission-critical 4x4 vehicles, professional chauffeurs (educated up to Grade 8), and 30-day post-paid credit facilities to UN bodies, international NGOs, and diplomatic missions across Ethiopia.
          </p>
          <div className="fleet-hero-cta-row">
            <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-solid-gold">
              Launch Live Fleet Portal ↗
            </a>
            <a href="#compliance-dashboard" className="btn-outline-white">
              Vendor Compliance Dashboard ▾
            </a>
            <a href="#fleet-rfq" className="btn-outline-white">
              Request Corporate RFP / Quote ➔
            </a>
          </div>
        </div>
      </section>

      {/* 1. VENDOR COMPLIANCE & PRE-QUALIFICATION DASHBOARD */}
      <section id="compliance-dashboard" className="compliance-section">
        <div className="trail-container">
          
          <div className="compliance-header-box">
            <span className="gold-script-tag">Official Governance &amp; Registry</span>
            <h2 className="section-main-heading">VENDOR PRE-QUALIFICATION DASHBOARD</h2>
            <p className="section-sub-text">
              Direct verification parameters designed specifically for institutional procurement officers, UN vendor evaluators, and NGO tender committees.
            </p>
          </div>

          <div className="credentials-grid-row">
            <div className="credential-box highlight-box">
              <div className="credential-top">
                <span className="cred-label">VAT REGISTRATION NUMBER</span>
                <span className="cred-status active">ACTIVE &amp; VERIFIED</span>
              </div>
              <div className="cred-val">#80692</div>
              <div className="cred-meta">Official Ethiopian Revenues &amp; Customs Authority (ERCA) Electronic Invoicing</div>
            </div>

            <div className="credential-box">
              <div className="credential-top">
                <span className="cred-label">BUSINESS LICENSE NUMBER</span>
                <span className="cred-status active">VALIDATED 2026</span>
              </div>
              <div className="cred-val">14/666/128419/2005</div>
              <div className="cred-meta">Federal Ministry of Trade &amp; Industry (Tour Operations &amp; Commercial Vehicle Leasing)</div>
            </div>

            <div className="credential-box">
              <div className="credential-top">
                <span className="cred-label">TAX IDENTIFICATION (TIN)</span>
                <span className="cred-status active">SIGTAS LIVE</span>
              </div>
              <div className="cred-val">Active Taxpayer</div>
              <div className="cred-meta">Clean standing with zero tax arrears; instant SIGTAS validation available</div>
            </div>

            <div className="credential-box">
              <div className="credential-top">
                <span className="cred-label">CAPITAL SCALE &amp; FACILITY</span>
                <span className="cred-status scale">B2B ROBUST</span>
              </div>
              <div className="cred-val">ETB 100,000,000</div>
              <div className="cred-meta">Working capital facility backing large-scale simultaneous deployments across regions</div>
            </div>
          </div>

          {/* CYBERSECURITY / STRICT BANK DETAILS EXCLUSION NOTICE */}
          <div className="security-exclusion-banner">
            <div className="sec-icon-wrap">
              <Lock size={24} className="lock-icon" />
            </div>
            <div className="sec-text-content">
              <h4 className="sec-title">CYBERSECURITY PROTOCOL: PUBLIC BANKING DETAILS WITHHELD</h4>
              <p className="sec-desc">
                In strict accordance with international anti-fraud protocols and cybersecurity risk mitigation standards, <strong>Commercial Bank of Ethiopia (CBE)</strong> routing and account numbers are deliberately excluded from public indexing. Official banking coordinates, EFT instructions, and tax clearance certificates are transmitted exclusively via encrypted channels upon mutual execution of institutional service agreements.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 30-DAY CREDIT FACILITY & INVOICING WORKFLOW */}
      <section className="workflow-section">
        <div className="trail-container">
          <div className="workflow-header-block">
            <span className="gold-script-tag">Financial Architecture</span>
            <h2 className="section-main-heading">30-DAY POST-PAID CREDIT FACILITY</h2>
            <p className="section-sub-text">
              Engineered to conform with UN and international NGO payment cycles. No upfront capital bottlenecks.
            </p>
          </div>

          <div className="workflow-timeline-grid">
            {workflowSteps.map((ws, i) => (
              <div key={i} className="workflow-step-card">
                <div className="step-num-pill">{ws.step}</div>
                <h3 className="step-title">{ws.title}</h3>
                <p className="step-desc">{ws.desc}</p>
                <div className="step-connector-dot"></div>
              </div>
            ))}
          </div>

          <div className="credit-highlights-box">
            <div className="highlight-item">
              <CheckCircle2 size={20} className="hl-icon" />
              <div>
                <strong>Validated Timesheets:</strong> Every assignment includes daily operator logs countersigned by your field project manager.
              </div>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={20} className="hl-icon" />
              <div>
                <strong>Single Consolidated Billing:</strong> Monthly unified VAT invoice summarizing mileage, fuel receipts, and daily vehicle rates.
              </div>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={20} className="hl-icon" />
              <div>
                <strong>SIGTAS Reconciliation:</strong> All invoices issued with legal tax withholding forms (Withholding Tax 2%) automatically accounted for.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 17 PROFESSIONAL CHAUFFEURS (EDUCATED UP TO GRADE 8) */}
      <section className="drivers-section">
        <div className="trail-container">
          <div className="drivers-layout-grid">
            <div className="drivers-text-col">
              <span className="gold-script-tag">Human Capital Rigor</span>
              <h2 className="section-main-heading">17 PROFESSIONAL CHAUFFEURS</h2>
              <p className="drivers-p">
                NGO tenders (such as IUCN, DanChurchAid, and NEWA) demand dependable, literate, and skilled field operators. Our cohort of <strong>17 professional drivers</strong>, combines foundational education and logbook literacy with elite commercial off-road operating skills across the Horn of Africa.
              </p>
              
              <div className="driver-capabilities-list">
                <div className="driver-cap-item">
                  <div className="cap-icon-box"><Navigation size={18} /></div>
                  <div>
                    <strong>Challenging Terrain Mastery:</strong> Unrivaled competence navigating Afar salt pans, Danakil sand dunes, Simien mountain hairpins, and unpaved river crossings.
                  </div>
                </div>

                <div className="driver-cap-item">
                  <div className="cap-icon-box"><Truck size={18} /></div>
                  <div>
                    <strong>Mechanical Field Literacy:</strong> Self-sufficient in remote winch recovery, tire bead seating, belt replacements, and radiator field care.
                  </div>
                </div>

                <div className="driver-cap-item">
                  <div className="cap-icon-box"><FileText size={18} /></div>
                  <div>
                    <strong>Administrative &amp; Logbook Precision:</strong> Fluent maintenance of official UN/NGO vehicle logbooks, fuel receipts, and passenger manifests.
                  </div>
                </div>

                <div className="driver-cap-item">
                  <div className="cap-icon-box"><Users size={18} /></div>
                  <div>
                    <strong>Multilingual Fluency &amp; Discretion:</strong> Conversant in English, Amharic, Afar, Tigrinya, and Oromo, bound by strict confidentiality and child safeguarding codes.
                  </div>
                </div>
              </div>
            </div>

            <div className="drivers-visual-col">
              <div className="driver-card-stack">
                <div className="driver-stat-highlight">
                  <div className="big-stat-number">17</div>
                  <div className="big-stat-desc">
                    Professional Drivers (Educated up to Grade 8) Stationed Across Addis, Semera &amp; Mekelle
                  </div>
                </div>
                <div className="training-credentials-box">
                  <h4 className="training-title">Mandatory Annual Training Modules</h4>
                  <ul className="training-ul">
                    <li>• Defensive Driving &amp; Skid Control (Certified)</li>
                    <li>• Wilderness Emergency First Aid &amp; CPR</li>
                    <li>• Anti-Bribery &amp; Human Dignity Code of Conduct</li>
                    <li>• Low-Impact Eco-Driving &amp; Fuel Optimization</li>
                    <li>• HF/VHF Emergency Radio Operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLEET SPECIFICATIONS CATALOG */}
      <section className="fleet-catalog-section">
        <div className="trail-container">
          <div className="catalog-header">
            <span className="gold-script-tag">Purpose-Built Inventory</span>
            <h2 className="section-main-heading">STANDARDIZED COMMERCIAL FLEET</h2>
            <p className="section-sub-text">
              Fully compliant with UN MOSS (Minimum Operating Security Standards) and international developmental mission parameters.
            </p>
          </div>

          <div className="fleet-cards-grid">
            {fleetCatalog.map((vehicle) => (
              <div key={vehicle.id} className="fleet-inventory-card">
                <div className="vehicle-img-wrap">
                  <img src={vehicle.img} alt={vehicle.name} className="vehicle-img" />
                  <div className="vehicle-cat-tag">{vehicle.category}</div>
                </div>
                <div className="vehicle-body">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                  <div className="vehicle-ideal">
                    <strong>Mission Profile:</strong> {vehicle.idealFor}
                  </div>
                  <ul className="vehicle-specs-list">
                    {vehicle.specs.map((sp, idx) => (
                      <li key={idx}><CheckCircle2 size={13} className="spec-check" /> {sp}</li>
                    ))}
                  </ul>
                  <a href="#fleet-rfq" className="vehicle-inquire-btn">
                    Reserve for Tender / Lease
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL CLIENTS & SOCIAL PROOF */}
      <section className="institutional-trust-strip">
        <div className="trail-container">
          <div className="trust-strip-inner">
            <span className="trust-strip-label">TRUSTED BY INSTITUTIONS &amp; NGOS ACROSS ETHIOPIA:</span>
            <div className="trust-names-row">
              <span className="trust-badge-item">UNECA (United Nations)</span>
              <span className="trust-badge-item">DanChurchAid (DCA)</span>
              <span className="trust-badge-item">Concern Worldwide</span>
              <span className="trust-badge-item">IUCN Ethiopia</span>
              <span className="trust-badge-item">NEWA Consortium</span>
              <span className="trust-badge-item">Diplomatic Delegations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. B2B PROCUREMENT RFP & TENDER DESK */}
      <section id="fleet-rfq" className="fleet-rfq-section">
        <div className="trail-container">
          <div className="rfq-wrapper-card">
            <div className="rfq-header-box">
              <span className="gold-script-tag">Procurement Desk</span>
              <h2 className="section-main-heading">REQUEST FOR PROPOSAL (RFP) / FLEET LEASE TENDER</h2>
              <p className="section-sub-text">
                Submit your institutional vehicle requirements for rapid turnaround within 4 business hours.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="rfq-success-message">
                <CheckCircle2 size={48} className="success-icon" />
                <h3 className="success-title">RFP Received — Procurement Dossier Dispatched</h3>
                <p className="success-desc">
                  Thank you for submitting your logistics requirements. Our Corporate Fleet Director and Logistics Officers have received your inquiry. A formal proforma quotation, driver credentials, and VAT #80692 compliance pack will be transmitted to your organization email shortly.
                </p>
                <div className="success-emergency-contact">
                  <strong>Urgent Field Dispatch?</strong> Call Duty Officer directly: <code>+251 (91) 142-8092</code>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRfq} className="fleet-rfq-form">
                <div className="rfq-form-grid">
                  
                  <div className="rfq-field">
                    <label>Organization / Agency Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. United Nations / DanChurchAid / Embassy" 
                      required 
                      className="rfq-input"
                    />
                  </div>

                  <div className="rfq-field">
                    <label>Procurement Officer / Contact Person *</label>
                    <input 
                      type="text" 
                      placeholder="Full Name &amp; Title" 
                      required 
                      className="rfq-input"
                    />
                  </div>

                  <div className="rfq-field">
                    <label>Official Institutional Email *</label>
                    <input 
                      type="email" 
                      placeholder="procurement@agency.org" 
                      required 
                      className="rfq-input"
                    />
                  </div>

                  <div className="rfq-field">
                    <label>Direct Telephone / Mobile *</label>
                    <input 
                      type="tel" 
                      placeholder="+251 ..." 
                      required 
                      className="rfq-input"
                    />
                  </div>

                  <div className="rfq-field">
                    <label>Deployment Corridor / Base *</label>
                    <select className="rfq-select" required>
                      <option value="addis">Addis Ababa Metropolitan &amp; Oromia</option>
                      <option value="semera">Semera / Afar Region (Danakil &amp; Border)</option>
                      <option value="mekelle">Mekelle / Tigray Regional Corridor</option>
                      <option value="nationwide">Nationwide Multi-Region Field Survey</option>
                    </select>
                  </div>

                  <div className="rfq-field">
                    <label>Required Fleet Composition *</label>
                    <select className="rfq-select" required>
                      <option value="landcruiser-hzj">Toyota Land Cruiser HZJ76/78 Hardtop 4x4</option>
                      <option value="prado">Toyota Prado / V8 Executive 4WD</option>
                      <option value="hiace">Toyota HiAce High-Roof Commuter Van</option>
                      <option value="coaster">Toyota Coaster 30-Seater Deluxe Bus</option>
                      <option value="mixed">Mixed Fleet (Multiple Configurations)</option>
                    </select>
                  </div>

                  <div className="rfq-field">
                    <label>Anticipated Lease Duration</label>
                    <select className="rfq-select">
                      <option value="monthly">Long-Term Lease (1 Month to 1 Year+)</option>
                      <option value="biweekly">Field Mission (1 to 4 Weeks)</option>
                      <option value="daily">Short-Term Event / Conference (1 to 7 Days)</option>
                    </select>
                  </div>

                  <div className="rfq-field">
                    <label>Preferred Billing &amp; Payment Facility</label>
                    <select className="rfq-select">
                      <option value="credit-30">30-Day Post-Paid Credit (Electronic VAT #80692)</option>
                      <option value="po">Institutional Purchase Order (PO)</option>
                      <option value="wire">Bank Wire / Electronic Transfer</option>
                    </select>
                  </div>

                </div>

                <div className="rfq-field full-width">
                  <label>Specific Mission Requirements / Security Mandates</label>
                  <textarea 
                    rows="3" 
                    placeholder="Specify any equipment mandates (rooftop winches, satellite trackers, VHF frequencies, special driver clearance, or luggage volume)..."
                    className="rfq-textarea"
                  ></textarea>
                </div>

                <div className="rfq-submit-row">
                  <button type="submit" className="btn-solid-red">
                    <Send size={16} /> TRANSMIT FORMAL RFP TO FLEET DESK
                  </button>
                  <div className="rfq-help-text">
                    * Guaranteed turnaround with official VAT quotation within 4 business hours.
                  </div>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
