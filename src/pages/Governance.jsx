import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Leaf, 
  HeartHandshake, 
  Download, 
  Eye, 
  CheckCircle, 
  X, 
  Printer, 
  Lock,
  Building,
  Award
} from 'lucide-react';

export default function Governance() {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const policies = [
    {
      id: 'anti-bribery',
      title: 'Anti-Bribery & Corruption Policy',
      code: 'MCE-GOV-01',
      version: 'v4.2 / 2026',
      icon: ShieldCheck,
      summary: 'MyChoice Ethiopia operates with absolute integrity and transparency. Our comprehensive Anti-Bribery Policy and rigorous Employee Code of Conduct ensure strict compliance with all international commercial laws, including the UK Bribery Act and US Foreign Corrupt Practices Act (FCPA), guaranteeing ethical, equitable, and legally sound business dealings with all government bodies, international NGOs, and private institutions.',
      keyPillars: [
        'Strict zero-tolerance on facilitation payments, kickbacks, or gifts of material value to public officials or procurement officers.',
        'Independent anonymous reporting channel and ironclad whistleblower protection for all employees and third-party contractors.',
        'Mandatory annual anti-corruption certification required for all 17 Grade-8 certified drivers and operations personnel.',
        'Full financial transparency and audit trail on all commercial contracts and official electronic VAT invoicing (#80692).'
      ],
      fullText: `1. PURPOSE & SCOPE
MyChoice Ethiopia ("the Company") is committed to conducting all business operations with the utmost ethical standards, absolute transparency, and full legal compliance. This Anti-Bribery & Corruption Policy applies unconditionally to all directors, managers, logistics coordinators, commercial drivers, field scouts, and subcontractors.

2. ZERO TOLERANCE MANDATE
The Company enforces a strict zero-tolerance policy regarding bribery, extortion, embezzlement, and corrupt practices of any form. No employee or representative may offer, promise, give, request, agree to receive, or accept any financial advantage, bribe, or favor with the intent to influence official business decisions, secure commercial contracts, or evade regulatory obligations.

3. FACILITATION PAYMENTS & GIFTS
Facilitation payments (unofficial fees paid to expedite routine governmental actions) are strictly illegal under Ethiopian law and international compliance frameworks (including the UK Bribery Act 2010 and the US Foreign Corrupt Practices Act). Any demand for an unlawful payment encountered during field logistics must be refused immediately and documented in the official vehicle logbook for rapid escalation to Group Legal Counsel.

4. AUDITABILITY & VAT COMPLIANCE
All financial disbursements, fuel receipts, regional scout disbursements, and vehicle lease settlements must be supported by official VAT documentation (#80692) and verified timesheets. Under no circumstances may off-the-books funds or slush funds be established.

5. WHISTLEBLOWING & IMMUNITY
Employees or external partners who report suspected violations in good faith are protected from retaliation, termination, or administrative penalties under our Whistleblower Protection Charter.`
    },
    {
      id: 'code-of-conduct',
      title: 'Employee & Chauffeur Code of Conduct',
      code: 'MCE-HR-02',
      version: 'v3.8 / 2026',
      icon: HeartHandshake,
      summary: 'Codifies our unwavering commitment to human dignity, gender equality, workplace professionalism, and cultural respect across all operational regions. Every member of our 32-person team and 17 Grade-8 chauffeurs is bound by rigorous behavioral standards, ensuring respectful, safe, and collaborative partnerships with local communities and institutional clients.',
      keyPillars: [
        'Strict prohibition of discrimination, harassment, or intimidation based on gender, ethnicity, religion, or nationality.',
        'Zero-tolerance policy on alcohol or narcotics consumption prior to or during vehicle operations, subject to immediate dismissal.',
        'Mandatory compliance with Child Safeguarding and Protection Protocols across all tourist and humanitarian transit routes.',
        'Respect for local customs, community elders, and religious traditions in Afar, Tigray, Amhara, and Southern nations.'
      ],
      fullText: `1. CORE ETHOS & DIGNITY
At MyChoice Ethiopia, our team members are the direct ambassadors of our enterprise. We hold ourselves to exemplary standards of professionalism, integrity, and mutual respect.

2. SAFEGUARDING & HUMAN RIGHTS
We adhere strictly to international human rights standards. All personnel are strictly forbidden from engaging in exploitative behavior, harassment, or human rights violations. Our drivers undergo specialized Child Safeguarding training to prevent exploitation along travel corridors.

3. SUBSTANCE ZERO TOLERANCE
Commercial driving requires unimpaired cognitive and physical faculties. The consumption or possession of alcohol, khat, or narcotics while on duty, in company vehicles, or within 12 hours prior to scheduled duty is strictly prohibited and grounds for immediate termination without severance.

4. ROAD COURTESY & PROFESSIONAL PROTOCOL
Drivers must maintain clean vehicle cabins, adhere strictly to speed regulations (maximum 80 km/h on unpaved gravel trails), maintain passenger discretion, and assist passengers with courtesy and dignity.`
    },
    {
      id: 'environmental-sustainability',
      title: 'Environmental Sustainability & Eco-Tourism Policy',
      code: 'MCE-ENV-03',
      version: 'v5.0 / 2026',
      icon: Leaf,
      summary: 'Reflecting Ethiopia’s fragile ecological heritage, our Environmental Sustainability Policy drives a low-carbon, low-impact footprint across both tour expeditions and heavy fleet operations. We enforce paperless digital invoicing, 100% recycling of automotive lubricants and tires, and a strict Leave-No-Trace protocol in all national parks and geological reserves.',
      keyPillars: [
        'Transition to paperless digital invoicing and cloud logbooks, eliminating thousands of printed procurement sheets annually.',
        'Certified closed-loop recycling and safe neutralization of waste engine oils, oil filters, and vehicle batteries via licensed facilities.',
        'Leave-No-Trace wilderness ethics enforced on all Danakil and Simien camping expeditions (pack-it-in, pack-it-out).',
        'Direct financial contributions to community conservation funds in the Afar Depression and Simien Mountains.'
      ],
      fullText: `1. ENVIRONMENTAL COMMITMENT
Ethiopia boasts some of the rarest biosphere reserves on the planet. MyChoice Ethiopia recognizes its duty to minimize ecological degradation resulting from tourism and transport operations.

2. FLEET EMISSIONS & FLUID MANAGEMENT
All vehicles undergo strict emissions tuning and fuel injector calibration every 5,000 kilometers. Automotive waste—including motor oils, coolants, and brake fluids—is transferred exclusively to certified processing and recycling facilities in Addis Ababa.

3. WILDERNESS EXPEDITIONS (LEAVE NO TRACE)
On all camping expeditions to Erta Ale, Dallol, and the Simien Mountains, all non-biodegradable waste (plastics, cans, batteries) must be packed out to regional disposal depots in Semera or Mekelle. The use of single-use plastics is actively discouraged through reusable group water dispensers.

4. COMMUNITY CONSERVATION
We recruit local Afar and Tigray scouts exclusively from immediate host communities, providing sustainable livelihoods that incentivize natural habitat preservation.`
    },
    {
      id: 'workplace-safety',
      title: 'Healthy Workplace & Field Safety Protocol',
      code: 'MCE-OHS-04',
      version: 'v4.1 / 2026',
      icon: ShieldCheck,
      summary: 'Establishes our comprehensive Occupational Health and Safety (OHS) infrastructure. Designed to guarantee zero preventable injuries, every fleet deployment is supported by certified medical trauma kits, 24/7 telemetry monitoring, satellite distress beacons, and established emergency medical evacuation corridors across remote Ethiopian sectors.',
      keyPillars: [
        'Comprehensive first-aid and wilderness trauma kits installed in every commercial and tour vehicle.',
        'Mandatory defensive driving and CPR certification renewed bi-annually for all Grade-8 licensed drivers.',
        '24/7 central logistics tracking with HF/VHF radio backstop in out-of-cellular zones (Danakil & Afar triangle).',
        'Pre-established helicopter and air-ambulance medical evacuation protocols with private aviation providers in Addis Ababa.'
      ],
      fullText: `1. ZERO-HARM COMMITMENT
The physical safety and mental wellbeing of our guests, clients, drivers, and field staff is paramount. We maintain a zero-harm occupational safety framework across all company facilities and expedition routes.

2. VEHICLE EMERGENCY EQUIPMENT
Every vehicle deployed into field operations must carry:
- An inspected, fully stocked trauma and burn first-aid kit
- Two full-size spare wheels, high-lift mechanical jack, and tire repair kit
- A minimum 20 liters of emergency radiator water and heavy tow straps
- Satellite communication device or VHF radio transceiver when operating outside cellular coverage.

3. FATIGUE MANAGEMENT
To mitigate driver fatigue, continuous driving is capped at 4 hours without a 30-minute rest break, with a daily operating ceiling of 9 hours. Drivers must receive a minimum 10 hours of uninterrupted rest between multi-day field segments.

4. EMERGENCY EVACUATION CORRIDORS
In the event of medical emergencies in remote sectors (e.g. Danakil Depression), the on-ground coordinator in Semera triggers immediate overland staging or fixed-wing evacuation coordination with Addis Ababa aviation desks.`
    }
  ];

  return (
    <div className="governance-page-wrapper">
      
      {/* Hero */}
      <section className="gov-hero-banner">
        <div className="trail-container">
          <div className="gov-hero-badge">
            <ShieldCheck size={16} className="badge-icon" />
            <span>VIRTUALIZED COMPLIANCE REPOSITORY • INSTITUTIONAL GOVERNANCE</span>
          </div>
          <h1 className="gov-hero-title">
            CORPORATE GOVERNANCE &amp; POLICIES
          </h1>
          <p className="gov-hero-sub">
            Formalized ethical, environmental, and workplace safety frameworks meeting the stringent tender compliance standards of the United Nations, international developmental NGOs, and global corporate partners.
          </p>
        </div>
      </section>

      {/* Intro Metrics */}
      <section className="gov-intro-metrics">
        <div className="trail-container">
          <div className="gov-metrics-row">
            <div className="gov-metric-item">
              <span className="gov-m-num">100%</span>
              <span className="gov-m-label">Anti-Bribery Audit Compliance</span>
            </div>
            <div className="gov-metric-item">
              <span className="gov-m-num">SIGTAS</span>
              <span className="gov-m-label">Active Electronic Tax Standing</span>
            </div>
            <div className="gov-metric-item">
              <span className="gov-m-num">17 Drivers</span>
              <span className="gov-m-label">Code of Conduct Certified</span>
            </div>
            <div className="gov-metric-item">
              <span className="gov-m-num">Leave No Trace</span>
              <span className="gov-m-label">Eco-Tourism Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="gov-policies-section">
        <div className="trail-container">
          
          <div className="gov-section-intro">
            <span className="gold-script-tag">Four Governance Pillars</span>
            <h2 className="section-main-heading">FORMAL POLICY ARCHITECTURE</h2>
            <p className="section-sub-text">
              Procurement officers and compliance auditors can review executive summaries below or view and download complete official policy dossiers.
            </p>
          </div>

          <div className="policies-cards-grid">
            {policies.map((p) => {
              const IconComp = p.icon;
              return (
                <div key={p.id} className="policy-card-item">
                  <div className="policy-top-bar">
                    <div className="policy-icon-circle">
                      <IconComp size={22} className="p-icon" />
                    </div>
                    <div className="policy-code-wrap">
                      <span className="p-code">{p.code}</span>
                      <span className="p-version">{p.version}</span>
                    </div>
                  </div>

                  <h3 className="policy-title">{p.title}</h3>
                  <p className="policy-summary">{p.summary}</p>

                  <div className="policy-key-points">
                    <h4 className="kp-title">Key Compliance Guarantees:</h4>
                    <ul className="kp-list">
                      {p.keyPillars.map((point, idx) => (
                        <li key={idx}>
                          <CheckCircle size={14} className="kp-check" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="policy-actions-row">
                    <button 
                      onClick={() => setSelectedPolicy(p)} 
                      className="btn-view-dossier"
                    >
                      <Eye size={15} /> View Full Policy Dossier
                    </button>
                    <button 
                      onClick={() => setSelectedPolicy(p)} 
                      className="btn-download-pdf"
                    >
                      <Download size={15} /> Download PDF
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE POLICY DOSSIER MODAL */}
      {selectedPolicy && (
        <div className="policy-modal-backdrop" onClick={() => setSelectedPolicy(null)}>
          <div className="policy-modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="modal-top-bar">
              <div className="modal-title-box">
                <ShieldCheck size={20} className="modal-shield-icon" />
                <div>
                  <h3 className="modal-policy-title">{selectedPolicy.title}</h3>
                  <span className="modal-policy-id">
                    Official Document: {selectedPolicy.code} • {selectedPolicy.version} • VAT Reg: #80692
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPolicy(null)} 
                className="modal-close-btn"
                aria-label="Close policy dossier"
              >
                <X size={20} />
              </button>
            </div>

            {/* Official Seal Watermark Body */}
            <div className="modal-body-content">
              <div className="official-letterhead">
                <div className="letterhead-crest">MYCHOICE ETHIOPIA GROUP</div>
                <div className="letterhead-sub">Corporate Governance &amp; Legal Compliance Directorate</div>
                <div className="letterhead-line">Bole Sub-City, Addis Ababa, Ethiopia • Business License: 14/666/128419/2005</div>
              </div>

              <div className="modal-text-formatted">
                <pre className="policy-pre-text">{selectedPolicy.fullText}</pre>
              </div>

              {/* Signatures & Seal */}
              <div className="modal-sign-row">
                <div className="sign-col">
                  <div className="sign-line">/s/ Managing Director &amp; Founder</div>
                  <div className="sign-name">MyChoice Ethiopia Tour &amp; Fleet Operations</div>
                </div>
                <div className="sign-col">
                  <div className="sign-line">/s/ Legal Compliance Officer</div>
                  <div className="sign-name">Internal Audit &amp; Governance Directorate</div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal-footer-bar">
              <button 
                onClick={() => window.print()} 
                className="modal-print-btn"
              >
                <Printer size={16} /> Print / Save as PDF
              </button>
              <button 
                onClick={() => setSelectedPolicy(null)} 
                className="modal-dismiss-btn"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
