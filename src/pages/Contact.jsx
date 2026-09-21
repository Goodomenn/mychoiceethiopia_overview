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
  UserCheck
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    hub: 'addis',
    inquiryType: 'fleet',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* Page Hero */}
      <section className="sub-page-hero">
        <div className="trail-container">
          <span className="gold-script-tag">Direct Regional Dispatch</span>
          <h1 className="sub-page-title">CONTACT MYCHOICE ETHIOPIA</h1>
          <p className="sub-page-lead">
            Connect directly with our headquarters in Addis Ababa or our dedicated regional staging offices in Semera (Afar) and Mekelle (Tigray).
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="trail-container contact-content-grid">
        
        {/* Left Column: Regional Branch Cards & Role Contacts */}
        <div className="contact-info-col">
          
          {/* Branch 1: Addis Ababa HQ */}
          <div className="branch-contact-card">
            <div className="branch-badge">GROUP HEADQUARTERS</div>
            <h3 className="branch-title">Addis Ababa Head Office</h3>
            <div className="branch-details-list">
              <div className="b-item">
                <MapPin size={16} className="b-icon" />
                <span>MyChoice Building, Bole Sub-City, Skylight Corridor, Addis Ababa, Ethiopia</span>
              </div>
              <div className="b-item">
                <Phone size={16} className="b-icon" />
                <span>+251 (11) 668-9021 / +251 (91) 142-8092</span>
              </div>
              <div className="b-item">
                <Mail size={16} className="b-icon" />
                <span>info@mychoiceethiopia.com / fleet@mychoiceethiopia.com</span>
              </div>
              <div className="b-item">
                <Clock size={16} className="b-icon" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM (EAT) • 24/7 Field Duty Desk</span>
              </div>
            </div>
            <div className="role-contact-line">
              <UserCheck size={14} />
              <span><strong>Principal Contact:</strong> Vice Manager / Tours &amp; Operations Director</span>
            </div>
          </div>

          {/* Branch 2: Semera Afar Branch */}
          <div className="branch-contact-card">
            <div className="branch-badge desert">AFAR REGIONAL GATEWAY</div>
            <h3 className="branch-title">Semera Branch Office (Danakil Hub)</h3>
            <div className="branch-details-list">
              <div className="b-item">
                <MapPin size={16} className="b-icon" />
                <span>Semera Gate, Main Highway Junction, Afar Regional State</span>
              </div>
              <div className="b-item">
                <Phone size={16} className="b-icon" />
                <span>+251 (33) 666-0182 / +251 (91) 430-8812</span>
              </div>
              <div className="b-item">
                <Mail size={16} className="b-icon" />
                <span>semera.dispatch@mychoiceethiopia.com</span>
              </div>
            </div>
            <div className="role-contact-line">
              <UserCheck size={14} />
              <span><strong>Principal Contact:</strong> Regional Afar Field Logistics Coordinator</span>
            </div>
          </div>

          {/* Branch 3: Mekelle Tigray Branch */}
          <div className="branch-contact-card">
            <div className="branch-badge highland">NORTHERN LOGISTICS GATEWAY</div>
            <h3 className="branch-title">Mekelle Branch Office (Gheralta Hub)</h3>
            <div className="branch-details-list">
              <div className="b-item">
                <MapPin size={16} className="b-icon" />
                <span>Kedamay Woyane Sub-City, Mekelle, Tigray Regional State</span>
              </div>
              <div className="b-item">
                <Phone size={16} className="b-icon" />
                <span>+251 (34) 440-9128 / +251 (91) 470-3344</span>
              </div>
              <div className="b-item">
                <Mail size={16} className="b-icon" />
                <span>mekelle.logistics@mychoiceethiopia.com</span>
              </div>
            </div>
            <div className="role-contact-line">
              <UserCheck size={14} />
              <span><strong>Principal Contact:</strong> Northern Fleet Logistics Officer</span>
            </div>
          </div>

          {/* Financial Security / Bank Account Protection Card */}
          <div className="bank-security-card">
            <div className="bank-sec-icon">
              <Lock size={20} className="lock-icon" />
            </div>
            <div className="bank-sec-body">
              <h4>Security Notice: Public Banking Information</h4>
              <p>
                To safeguard institutional transactions and prevent cybersecurity fraud, <strong>Commercial Bank of Ethiopia (CBE)</strong> routing numbers and account details are not displayed on open digital channels. Complete wire and EFT coordinates are transmitted on verified corporate letterhead upon contract finalization.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Smart Routing Inquiry Form */}
        <div className="contact-form-col">
          <div className="contact-form-card">
            
            <span className="gold-script-tag">Rapid Dispatch Desk</span>
            <h3 className="form-card-title">SEND AN OPERATIONAL INQUIRY</h3>
            <p className="form-card-sub">
              Your message will be automatically routed to the designated Logistics Officer or Tour Director based on your selection.
            </p>

            {submitted ? (
              <div className="form-success-alert">
                <CheckCircle2 size={36} className="success-icon" />
                <h4>Operational Message Transmitted</h4>
                <p>
                  Thank you for contacting MyChoice Ethiopia. Your inquiry has been routed to our duty desk. A logistics coordinator or tour specialist will respond within 4 business hours.
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
                      placeholder="UN Agency, NGO, or Tour Company"
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
                      placeholder="name@organization.org"
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
                      <option value="fleet">B2B NGO / UN Fleet Leasing (30-Day Credit, VAT #80692)</option>
                      <option value="tours">B2C Adventure Expeditions (Danakil, Gheralta, Lalibela)</option>
                      <option value="commodities">Access Ethiopia Agricultural Export (Coffee, Sesame)</option>
                      <option value="governance">Corporate Governance &amp; Tender Pre-Qualification</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Operational Staging Hub</label>
                    <select 
                      value={formData.hub}
                      onChange={(e) => setFormData({...formData, hub: e.target.value})}
                      className="form-select"
                    >
                      <option value="addis">Addis Ababa Head Office (Capital &amp; Nationwide)</option>
                      <option value="semera">Semera Branch Office (Afar &amp; Danakil Desert)</option>
                      <option value="mekelle">Mekelle Branch Office (Tigray &amp; Gheralta)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Message / Operational Requirements *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Describe your travel dates, fleet vehicle requirements, project duration, or commodity specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-solid-red full-width">
                  <Send size={16} /> ROUTE INQUIRY TO DESIGNATED DESK
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
