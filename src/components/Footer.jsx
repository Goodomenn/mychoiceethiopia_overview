import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="trail-site-footer">
      <div className="trail-container footer-grid">
        
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo-wrap">
            <Compass size={22} className="footer-compass" />
            <span className="footer-brand-title">MYCHOICE ETHIOPIA</span>
          </div>
          <p className="footer-brand-p">
            Premier hybrid enterprise integrating B2C wilderness expeditions with B2B institutional fleet logistics for UN agencies and international NGOs across Ethiopia.
          </p>
          <div className="footer-reg-info">
            <div>Business License: <strong>14/666/128419/2005</strong></div>
            <div>VAT Registration: <strong>#80692</strong> • SIGTAS Active</div>
            <div>Chauffeur Cohort: <strong>17 Grade-8 Certified Drivers</strong></div>
          </div>
        </div>

        {/* Core Portals with live external links */}
        <div className="footer-nav-col">
          <h4 className="footer-h4">Core Portals</h4>
          <ul className="footer-ul">
            <li><Link to="/">Home &amp; Map Trail</Link></li>
            <li>
              <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer">
                B2B Corporate &amp; NGO Fleet ↗
              </a>
            </li>
            <li>
              <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer">
                Expeditions &amp; Itineraries ↗
              </a>
            </li>
            <li>
              <a href="https://mychoice2.vercel.app/" target="_blank" rel="noopener noreferrer">
                Local Crop Supply (Corn, Cotton, Sorghum, Sunflower, Masho) ↗
              </a>
            </li>
            <li><Link to="/subsidiaries">Subsidiaries Directory</Link></li>
            <li><Link to="/governance">Governance &amp; Policies</Link></li>
          </ul>
        </div>

        {/* Governance & Policies */}
        <div className="footer-nav-col">
          <h4 className="footer-h4">Governance &amp; Policies</h4>
          <ul className="footer-ul">
            <li><Link to="/governance">Anti-Bribery Policy (FCPA/UK)</Link></li>
            <li><Link to="/governance">Employee Code of Conduct</Link></li>
            <li><Link to="/governance">Environmental Sustainability</Link></li>
            <li><Link to="/governance">Healthy Workplace &amp; Safety</Link></li>
            <li><Link to="/corporate-fleet#compliance-dashboard">Vendor Compliance Dashboard</Link></li>
          </ul>
        </div>

        {/* Regional Hubs & Financial Security */}
        <div className="footer-nav-col">
          <h4 className="footer-h4">Regional Staging Hubs</h4>
          <ul className="footer-ul hubs-footer-list">
            <li>
              <strong>Addis Ababa HQ:</strong> Bole Sub-City, Skylight Corridor
            </li>
            <li>
              <strong>Semera Afar Hub:</strong> Danakil &amp; Erta Ale Staging Gate
            </li>
            <li>
              <strong>Mekelle Hub:</strong> Kedamay Woyane Sub-City Depot
            </li>
          </ul>
          <div className="footer-bank-note">
            <Lock size={12} className="lock-icon-inline" />
            <span>Bank account numbers excluded for fraud prevention. CBE wire coordinates issued upon bilateral contract.</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="trail-container footer-bottom-inner">
          <span>&copy; 2026 MyChoice Ethiopia Tour &amp; Fleet Operations. All Rights Reserved.</span>
          <div className="footer-sub-links">
            <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer">
              Tours &amp; Fleet Portal ↗
            </a>
            <span className="dot">•</span>
            <a href="https://mychoice2.vercel.app/" target="_blank" rel="noopener noreferrer">
              Agriculture Portal ↗
            </a>
            <span className="dot">•</span>
            <Link to="/contact">Emergency Dispatch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
