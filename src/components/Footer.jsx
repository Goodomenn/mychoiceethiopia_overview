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
            Established in 2004 E.C. (2012 G.C.) by an Ethiopian visionary investor. Engaged in diversified commercial investment, origin agriculture, and sustainable local crop supply across East Africa.
          </p>
          <div className="footer-reg-info">
            <div>Business License: <strong>14/666/128419/2005</strong></div>
            <div>VAT Registration: <strong>#80692</strong> • SIGTAS Active</div>
            <div>Standing: <strong>Established 2004 E.C. (14+ Years)</strong></div>
          </div>
        </div>

        {/* Core Portals with live external links */}
        <div className="footer-nav-col">
          <h4 className="footer-h4">Core Portals</h4>
          <ul className="footer-ul">
            <li><Link to="/">Home &amp; Map Trail</Link></li>
            <li>
              <a href="https://mychoice2.vercel.app/" target="_blank" rel="noopener noreferrer">
                Local Crop Supply (Corn, Cotton, Sorghum, Sunflower, Masho) ↗
              </a>
            </li>
            <li><Link to="/subsidiaries">Subsidiaries Directory</Link></li>
            <li><Link to="/governance">Governance &amp; Policies</Link></li>
            <li><Link to="/about">About Us &amp; Ownership</Link></li>
            <li><Link to="/contact">Contact &amp; Branch Offices</Link></li>
          </ul>
        </div>

        {/* Governance & Policies */}
        <div className="footer-nav-col">
          <h4 className="footer-h4">Governance &amp; Policies</h4>
          <ul className="footer-ul">
            <li><Link to="/governance">Employee Code of Conduct</Link></li>
            <li><Link to="/governance">Anti-Bribery Policy (FCPA/UK)</Link></li>
            <li><Link to="/governance">Environmental Sustainability</Link></li>
            <li><Link to="/governance">Healthy Workplace &amp; Safety</Link></li>
            <li><Link to="/about">Vision, Goals &amp; Objectives</Link></li>
          </ul>
        </div>

        {/* Three Real Regional Hubs */}
        <div className="footer-nav-col">
          <h4 className="footer-h4">Regional Branch Offices</h4>
          <ul className="footer-ul hubs-footer-list">
            <li>
              <strong>1. Head Office (Addis Ababa):</strong> Yeka Sub City, Woreda 09, Gurdsholla, Dawit Building, 3rd Floor 303/304
            </li>
            <li>
              <strong>2. Semera Branch (Afar):</strong> Zone 01, Kebele 01, Semera City
            </li>
            <li>
              <strong>3. Mekelle Branch (Tigray):</strong> Kedamay Woyane Sub City, BMR Building, 5th Floor, Room 509
            </li>
          </ul>
          <div className="footer-bank-note">
            <Mail size={12} className="lock-icon-inline" />
            <span>mychoiceethiopia@gmail.com • Office: +251-116-67-57-76</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="trail-container footer-bottom-inner">
          <span>&copy; 2026 MyChoice Ethiopia. Established 2004 E.C. (2012 G.C.). All Rights Reserved.</span>
          <div className="footer-sub-links">
            <a href="https://mychoice2.vercel.app/" target="_blank" rel="noopener noreferrer">
              Agriculture Portal ↗
            </a>
            <span className="dot">•</span>
            <Link to="/contact">Contact Directorate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
