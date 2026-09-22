import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Lock,
  Building,
  UserCheck,
  Briefcase
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    hub: 'yeka',
    inquiryType: 'commodities',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const personnelList = [
    {
      roleNum: '01',
      category: 'Principal Contact Person',
      name: 'Teklay Mengesha',
      title: 'Vice Manager',
      office: '+251-116-67-57-76',
      mobile: '+251-929-92-31-31 / +251-941-61-65-61/62',
      email: 'mychoiceethiopia@gmail.com'
    },
    {
      roleNum: '02',
      category: 'Contact Person',
      name: 'Pukiler Birhanu',
      title: 'Logistics Officer',
      office: '+251-116-67-57-76',
      mobile: '+251-941-61-65-61/62',
      email: 'mychoiceethiopia@gmail.com'
    },
    {
      roleNum: '03',
      category: 'Contact for Mekelle & Afar Office',
      name: 'Samsom Halefom',
      title: 'Logistics Officer',
      office: 'Regional Branch Direct',
      mobile: '+251-902-41-11-41',
      email: 'mychoiceethiopia@gmail.com'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      
      {/* Page Hero */}
      <section className="sub-page-hero">
        <div className="trail-container">
          <span className="gold-script-tag">Direct Regional Dispatch &amp; Officers</span>
          <h1 className="sub-page-title">CONTACT MYCHOICE ETHIOPIA</h1>
          <p className="sub-page-lead">
            Reach our Head Office in Addis Ababa or our regional branch offices in Semera (Afar) and Kedamay Woyane (Mekelle).
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="trail-container contact-content-grid">
        
        {/* Left Column: Regional Branch Cards & Role Contacts */}
        <div className="contact-info-col">
          
          {/* Branch 1: Head Office – Yeka Sub City */}
          <div className="branch-contact-card">
            <div className="branch-badge">HEAD OFFICE • ADDIS ABABA</div>
            <h3 className="branch-title">1. Head Office – Yeka Sub City</h3>
            <div className="branch-details-list">
              <div className="b-item">
                <MapPin size={16} className="b-icon" />
                <span>Woreda 09, Gurdsholla, Dawit Building, 3rd Floor, Room 303/304, Addis Ababa, Ethiopia</span>
              </div>
              <div className="b-item">
                <Phone size={16} className="b-icon" />
                <span>Office: +251-116-67-57-76 • Mobile: +251-929-92-31-31 / +251-941-61-65-61/62</span>
              </div>
              <div className="b-item">
                <Mail size={16} className="b-icon" />
                <span>mychoiceethiopia@gmail.com</span>
              </div>
              <div className="b-item">
                <Clock size={16} className="b-icon" />
                <span>Monday – Saturday: 8:00 AM – 6:00 PM (EAT)</span>
              </div>
            </div>
            <div className="role-contact-line">
              <UserCheck size={14} />
              <span><strong>Principal Contact:</strong> Teklay Mengesha, Vice Manager</span>
            </div>
          </div>

          {/* Branch 2: Branch Office – Semera */}
          <div className="branch-contact-card">
            <div className="branch-badge desert">AFAR REGIONAL BRANCH</div>
            <h3 className="branch-title">2. Branch Office – Semera</h3>
            <div className="branch-details-list">
              <div className="b-item">
                <MapPin size={16} className="b-icon" />
                <span>Zone 01, Kebele 01, Semera City, Afar Regional State</span>
              </div>
              <div className="b-item">
                <Phone size={16} className="b-icon" />
                <span>Mobile: +251-902-41-11-41 / +251-941-61-65-61/62</span>
              </div>
              <div className="b-item">
                <Mail size={16} className="b-icon" />
                <span>mychoiceethiopia@gmail.com</span>
              </div>
            </div>
            <div className="role-contact-line">
              <UserCheck size={14} />
              <span><strong>Branch Officer:</strong> Samsom Halefom, Logistics Officer</span>
            </div>
          </div>

          {/* Branch 3: Branch Office – Kedamay Woyane Sub City */}
          <div className="branch-contact-card">
            <div className="branch-badge highland">TIGRAY REGIONAL BRANCH</div>
            <h3 className="branch-title">3. Branch Office – Kedamay Woyane Sub City</h3>
            <div className="branch-details-list">
              <div className="b-item">
                <MapPin size={16} className="b-icon" />
                <span>BMR Building, 5th Floor, Room Number 509, Mekelle City, Tigray</span>
              </div>
              <div className="b-item">
                <Phone size={16} className="b-icon" />
                <span>Mobile: +251-902-41-11-41</span>
              </div>
              <div className="b-item">
                <Mail size={16} className="b-icon" />
                <span>mychoiceethiopia@gmail.com</span>
              </div>
            </div>
            <div className="role-contact-line">
              <UserCheck size={14} />
              <span><strong>Branch Officer:</strong> Samsom Halefom, Logistics Officer</span>
            </div>
          </div>

          {/* Personnel Directory Card */}
          <div className="branch-contact-card" style={{ background: '#FAF7F2', border: '2px solid var(--warm-gold)' }}>
            <div className="branch-badge" style={{ background: 'var(--warm-gold)', color: 'white' }}>
              OFFICIAL CONTACT DIRECTORY
            </div>
            <h3 className="branch-title" style={{ marginBottom: '1rem' }}>Principal Personnel &amp; Roles</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {personnelList.map((p, idx) => (
                <div key={idx} style={{ borderBottom: idx < 2 ? '1px dashed #D5C8B4' : 'none', paddingBottom: idx < 2 ? '0.75rem' : '0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ fontSize: '13px', color: '#1C1E1B' }}>{p.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--warm-gold)', fontWeight: 700 }}>{p.title}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#707B7C', marginBottom: '0.25rem' }}>{p.category}</div>
                  <div style={{ fontSize: '11.5px', color: '#333' }}>
                    {p.office !== 'Regional Branch Direct' && <span>Office: {p.office} • </span>}
                    <span>Mobile: {p.mobile}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#566573' }}>Email: {p.email}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Security / Bank Account Protection Card */}
          <div className="bank-security-card">
            <div className="bank-sec-icon">
              <Lock size={20} className="lock-icon" />
            </div>
            <div className="bank-sec-body">
              <h4>Security Notice: Official Banking Information</h4>
              <p>
                In compliance with cybersecurity and anti-fraud regulations, Commercial Bank of Ethiopia (CBE) accounts are not displayed on open digital channels. Complete verified settlement details are provided on official company letterhead upon contract signing.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Smart Routing Inquiry Form */}
        <div className="contact-form-col">
          <div className="contact-form-card">
            
            <span className="gold-script-tag">Direct Operational Desk</span>
            <h3 className="form-card-title">SEND AN INQUIRY TO OUR OFFICERS</h3>
            <p className="form-card-sub">
              Your message will be automatically routed to Vice Manager Teklay Mengesha or the designated Logistics Officer.
            </p>

            {submitted ? (
              <div className="form-success-alert">
                <CheckCircle2 size={36} className="success-icon" />
                <h4>Message Transmitted Successfully</h4>
                <p>
                  Thank you for contacting MyChoice Ethiopia. Vice Manager Teklay Mengesha and our logistics officers have received your inquiry and will respond promptly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-dark">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="smart-inquiry-form">
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Organization / Company (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="Organization, Company or Individual"
                      value={formData.org}
                      onChange={(e) => setFormData({...formData, org: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Official Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Telephone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+251 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Inquiry Sector *</label>
                    <select 
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      className="form-select"
                    >
                      <option value="commodities">Access Ethiopia Crop Supply (Corn, Cotton, Sorghum, Sunflower, Masho)</option>
                      <option value="governance">Corporate Governance, Investment &amp; Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Operational Branch</label>
                    <select 
                      value={formData.hub}
                      onChange={(e) => setFormData({...formData, hub: e.target.value})}
                      className="form-select"
                    >
                      <option value="yeka">Head Office – Yeka Sub City (Addis Ababa)</option>
                      <option value="semera">Branch Office – Semera (Afar)</option>
                      <option value="mekelle">Branch Office – Kedamay Woyane Sub City (Mekelle)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Message / Order Specifications *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Provide details about your crop procurement, supply schedule, or business inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-solid-red full-width">
                  <Send size={16} /> TRANSMIT INQUIRY TO DESK
                </button>

                <div className="form-disclaimer">
                  Verified Legal Credentials: Business License #14/666/128419/2005 • VAT Registration #80692 • SIGTAS Active
                </div>

              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
}
