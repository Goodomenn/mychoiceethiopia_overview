import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CorporateFleet from './pages/CorporateFleet.jsx';
import Tours from './pages/Tours.jsx';
import Subsidiaries from './pages/Subsidiaries.jsx';
import Governance from './pages/Governance.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './trail-style.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="trail-site-wrapper">
        <Navbar />
        <main className="trail-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate-fleet" element={<CorporateFleet />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/subsidiaries" element={<Subsidiaries />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
