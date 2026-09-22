// Master Subsidiaries and Ecosystem Data
export const SUBSIDIARIES = {
  ela: {
    id: 'ela-trading',
    key: 'ela',
    name: 'Ela Trading PLC',
    division: 'Agro Commodity Export & Processing',
    badge: 'Agro Export',
    status: 'ISO 22000 & HACCP Certified',
    desc: 'Leading local crop supply and export enterprise specializing in Corn (Maize), raw Cotton, Sorghum, Sunflower seeds, and Masho (green mung beans) sourced directly from regional Ethiopian agricultural cooperatives.',
    entity: 'Ela Trading PLC (Reg #14/666/128419/2005)',
    webUrl: 'https://mychoice2.vercel.app/',
    localUrl: 'file:///C:/Users/ASUS%20VIVOBOOK/.gemini/antigravity/scratch/ela-trading-website/index.html',
    heroImg: '/images/crop-harvest.jpg',
    specs: [
      { k: 'Primary Commodities', v: 'Corn, Cotton, Sorghum, Sunflower, Masho' },
      { k: 'Annual Export Scale', v: '25,000+ Metric Tons' },
      { k: 'Processing Facilities', v: 'Optical Sortex & Mechanical Cleaning Plant' },
      { k: 'Shipping Terms', v: 'Djibouti Port FOB / Worldwide CIF' }
    ],
    table: [
      { param: 'Export Volume', spec: '25,000+ MT Annual', proto: 'Djibouti Bill of Lading' },
      { param: 'Coffee Grade Standard', spec: 'Grade 1 & Grade 2 Washed', proto: 'SCA Cupping & Moisture Test' },
      { param: 'Sesame Optical Purity', spec: '99.5% Sortex Cleaned', proto: 'ISO 658 & SGS Inspection' },
      { param: 'Food Safety Compliance', spec: 'ISO 22000 & HACCP', proto: 'Phytosanitary Ministry Cert' }
    ],
    radarLabels: ['Traceability', 'Compliance', 'Scale', 'Quality', 'Infrastructure'],
    radarValues: [9.4, 9.8, 9.2, 9.6, 9.0],
    radarBaselines: [6.5, 7.0, 6.0, 7.2, 5.8]
  },
  bricks: {
    id: 'bricks',
    key: 'bricks',
    name: 'Bricks Lounge Addis',
    division: 'Luxury Hospitality & Nightlife',
    badge: 'Hospitality',
    status: 'Premier Venue Certification',
    desc: 'The benchmark of contemporary nightlife and culinary dining in Addis Ababa. Featuring bespoke craft mixology, 14-hour post-oak smoked barbecue, VIP executive bottle service, and private executive dining.',
    entity: 'Bricks Lounge Hospitality Ltd.',
    webUrl: 'https://brickslounge.com',
    localUrl: 'http://localhost:5173',
    heroImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    specs: [
      { k: 'Venue Capacity', v: '250 Guests (VIP Booths & Main Room)' },
      { k: 'Culinary Program', v: 'Post-Oak Smoked BBQ & Asian Fusion' },
      { k: 'Mixology Focus', v: 'Artisanal Botanical Infusions' },
      { k: 'Location', v: 'Bole Sub-City, Addis Ababa' }
    ],
    table: [
      { param: 'Guest Capacity', spec: '250 Covers (VIP + Lounge)', proto: 'Addis Hospitality Code' },
      { param: 'Smoker Temperature Control', spec: 'Post-Oak 14-Hr Slow Smoke', proto: 'Digital Probe Traceability' },
      { param: 'Mixology Botanical Infusions', spec: '24+ House Specialty Bitters', proto: 'Craft Mixology Standards' },
      { param: 'Hygiene & Food Safety', spec: 'HACCP Cleanliness Protocol', proto: 'Municipal Health Grade A' }
    ],
    radarLabels: ['Traceability', 'Compliance', 'Scale', 'Quality', 'Infrastructure'],
    radarValues: [8.8, 9.2, 8.5, 9.7, 9.4],
    radarBaselines: [6.0, 6.8, 6.5, 7.0, 6.2]
  },
  catering: {
    id: 'catering',
    key: 'catering',
    name: 'Ela Catering Services',
    division: 'Banqueting & Institutional Food Service',
    badge: 'Banqueting',
    status: 'HACCP Industrial Certified',
    desc: 'Industrial-scale catering catering to diplomatic embassies, international galas, and corporate daily operations. Prepares over 1,000 customized fresh covers daily with complete cold-chain mobility and silver service.',
    entity: 'Ela Catering & Banquet Operations',
    webUrl: 'https://elacatering.com',
    localUrl: 'file:///D:/neh/ela_catering/index.html',
    heroImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    specs: [
      { k: 'Daily Covers Output', v: '1,000+ Covers / Day' },
      { k: 'Diplomatic Service', v: 'Multi-Course Silver Service Galas' },
      { k: 'Mobile Units', v: '4 On-Site Self-Contained Kitchens' },
      { k: 'Hygiene Rating', v: 'Certified HACCP Level 3' }
    ],
    table: [
      { param: 'Daily Meal Output', spec: '1,000+ Fresh Covers / Day', proto: 'Kitchen Dispatch Log' },
      { param: 'Diplomatic Banquet Protocol', spec: 'State Protocol Compliant', proto: 'Embassy Security Clearance' },
      { param: 'Cold-Chain Mobile Units', spec: '4 Custom Mobile Kitchens', proto: 'ISO 22000 Transport' },
      { param: 'HACCP Hygiene Control', spec: 'Zero-Contamination Standard', proto: 'Certified Food Inspector' }
    ],
    radarLabels: ['Traceability', 'Compliance', 'Scale', 'Quality', 'Infrastructure'],
    radarValues: [9.1, 9.7, 9.0, 9.5, 8.9],
    radarBaselines: [6.2, 7.0, 6.4, 6.8, 6.0]
  },
  mychoice: {
    id: 'mychoice',
    key: 'mychoice',
    name: 'MyChoice Ethiopia (Tour Planning & Expeditions)',
    division: 'Tour Planning & Expeditions',
    badge: 'Tour Planning',
    status: 'VAT #80692 • SIGTAS Active',
    desc: 'Leading institutional fleet contractor providing heavy-duty Toyota Land Cruisers, 17 Grade-8 certified drivers, and 30-day post-paid credit facilities to UN agencies, diplomatic missions, and international NGOs.',
    entity: 'MyChoice Ethiopia / MyChoice Fleet (VAT #80692)',
    webUrl: 'https://mychoiceethiopia.vercel.app/',
    localUrl: 'file:///D:/neh/TriplyTour/README.md',
    heroImg: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    specs: [
      { k: 'Certified Chauffeurs', v: '17 Grade-8 Certified Drivers' },
      { k: 'Credit Facilities', v: '30-Day Post-Paid Credit Terms' },
      { k: 'Regional Hubs', v: 'Addis Ababa • Semera • Mekelle' },
      { k: 'Telemetry', v: 'Dual GPS & Winch Outfitted 4x4s' }
    ],
    table: [
      { param: 'Driver Qualifications', spec: '17 Grade-8 Certified Chauffeurs', proto: 'Transport Authority Verified' },
      { param: 'Institutional Credit', spec: '30-Day Post-Paid Terms', proto: 'Electronic VAT Invoicing #80692' },
      { param: 'Fleet Telemetry', spec: 'Real-Time Dual GPS Tracking', proto: 'UN UNDSS Fleet Guidelines' },
      { param: 'Off-Road Outfitting', spec: 'Snorkels, Winches, Trauma Kits', proto: 'Expedition Readiness Audit' }
    ],
    radarLabels: ['Traceability', 'Compliance', 'Scale', 'Quality', 'Infrastructure'],
    radarValues: [9.6, 9.9, 9.4, 9.3, 9.8],
    radarBaselines: [6.8, 7.2, 6.5, 6.7, 6.4]
  },
  zfish: {
    id: 'zfish',
    key: 'zfish',
    name: 'Zfish Aquatic Trade',
    division: 'Global Seafood Import & Export',
    badge: 'Aquatics',
    status: 'Marine Cold-Chain Certified',
    desc: 'Specialized marine commodity trader sourcing wild-caught and sustainably farmed sea fish, frozen fillets, and aquatic provisions for institutional hospitality, restaurants, and wholesalers.',
    entity: 'Zfish Aquatic & Seafood Distro',
    webUrl: 'https://zfishglobal.com',
    localUrl: 'file:///D:/neh/Zfish/index.html',
    heroImg: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
    specs: [
      { k: 'Storage Climate', v: '-18°C Deep Frozen Cold-Chain' },
      { k: 'Core Commodities', v: 'Wild-Caught Tuna, Salmon, Tilapia' },
      { k: 'Supply Network', v: 'Wholesale & Hospitality Distribution' },
      { k: 'Port Terminals', v: 'Djibouti Maritime & Addis Air Cargo' }
    ],
    table: [
      { param: 'Cold-Chain Integrity', spec: '-18°C Deep Refrigeration', proto: 'Continuous Temp Data Loggers' },
      { param: 'Species Authentication', spec: '100% DNA Tested Wild Species', proto: 'Fisheries Marine Certificate' },
      { param: 'Wholesale Distribution', spec: 'Same-Day Regional Cold Delivery', proto: 'HACCP Transport Fleet' },
      { param: 'Import/Export Clearance', spec: 'Bilingual Health Certificates', proto: 'Customs & Border Veterinary' }
    ],
    radarLabels: ['Traceability', 'Compliance', 'Scale', 'Quality', 'Infrastructure'],
    radarValues: [9.0, 9.4, 8.8, 9.5, 9.1],
    radarBaselines: [6.4, 6.9, 6.2, 7.1, 6.0]
  }
};
