import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Compass, 
  Calendar, 
  Clock, 
  Users, 
  ShieldCheck, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Mountain,
  Flame,
  Tent,
  Car
} from 'lucide-react';

export default function Tours() {
  const [activeTour, setActiveTour] = useState(0);
  const [openDay, setOpenDay] = useState(0);
  const [selectedHub, setSelectedHub] = useState('all');

  const tourPackages = [
    {
      id: 'danakil-erta-ale',
      title: 'Danakil Depression, Dallol & Erta Ale Volcano Expedition',
      corridor: 'semera',
      hub: 'Semera Afar Branch Staging Hub',
      duration: '4 Days / 3 Nights',
      groupSize: '2 - 10 Adventurers',
      difficulty: 'Challenging / Extreme Heat',
      price: '$750 - $1,150 per person',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
      tagline: 'Direct Staging from our Semera Afar Office with Local Scouts & 4x4 Support',
      overview: 'Venture into the lowest, hottest, and most geologically hyper-active landmass on earth. Starting directly from our Semera regional logistics base, we traverse Lake Assale salt mines, the kaleidoscopic hydrothermal sulfur chimneys of Dallol, and hike by night to peer into the bubbling lava lake of Erta Ale volcano.',
      inclusions: [
        'Air-conditioned Toyota Land Cruiser 4x4 with fuel & Grade-8 driver',
        'Direct pickup & return at Semera Airport (Afar Regional State)',
        'Local Afar clan guides, regional road permits, and armed safety escorts',
        'Field expedition cook preparing fresh daily meals & cold drinks',
        'Complete camping equipment (mattresses, sheets, dome tents)',
        'Unlimited bottled mineral drinking water throughout the desert expedition'
      ],
      exclusions: [
        'Domestic or international flights',
        'Personal gratuities to local Afar scouts and drivers',
        'Alcoholic beverages and personal travel medical insurance'
      ],
      itinerary: [
        {
          day: 'Day 1: Semera to Lake Afdera & Dodom Base Camp',
          desc: 'Depart from our Semera staging center in rugged 4x4 convoy across black basalt lava fields. Arrive at Dodom base camp at the foot of Erta Ale. Prepare backpacks for the dusk volcano trek.'
        },
        {
          day: 'Day 2: Erta Ale Lava Lake & Sunrise Caldera Rim',
          desc: 'Witness the incandescent churning basalt lava lake at the crater rim under the Saharan night sky. Camp atop the rim or descend at sunrise to Dodom before transiting toward the salt desert of Hamed Ela.'
        },
        {
          day: 'Day 3: Dallol Hydrothermal Terraces & Lake Assale Salt Caravans',
          desc: 'Early morning expedition to the vibrant neon sulfur terraces and acid geysers of Dallol (-125m below sea level). Observe traditional Afar salt cutters carving pure mineral slabs loaded onto endless camel caravans.'
        },
        {
          day: 'Day 4: Lake Karum & Return to Semera Regional Hub',
          desc: 'Morning swim in the hypersaline Lake Karum. Scenic desert convoy drive back to our Semera headquarters for hot showers and airport flight connections to Addis Ababa.'
        }
      ]
    },
    {
      id: 'gheralta-churches',
      title: 'Gheralta Mountain Rock-Hewn Churches & Tigray Heritage',
      corridor: 'mekelle',
      hub: 'Mekelle Kedamay Woyane Staging Hub',
      duration: '5 Days / 4 Nights',
      groupSize: '2 - 8 Adventurers',
      difficulty: 'Moderate to High (Cliff Scrambling)',
      price: '$680 - $950 per person',
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
      tagline: 'Orchestrated from our Mekelle Office with Certified Mountain Climbing Guides',
      overview: 'Towering sandstone buttes conceal Ethiopia’s most breathtaking monolithic religious sanctuaries, carved high into cliff faces during the 5th to 8th centuries. Based out of our Mekelle Kedamay Woyane depot, we ascend Abuna Yemata Guh, Maryam Korkor, and Daniel Korkor.',
      inclusions: [
        'Dedicated 4x4 vehicle with mountain-experienced Grade-8 chauffeur',
        'Direct transfers from Mekelle Alula Aba Nega Airport',
        'Expert rock climbing guides with harness equipment for vertical pitches',
        'Monastery entry donations and church clergy blessing permits',
        'Eco-lodge accommodation nestled beneath the Gheralta sandstone pillars',
        'Full board meals, highland teas, and bottled water'
      ],
      exclusions: [
        'Domestic airfare Addis Ababa – Mekelle',
        'Personal climbing shoes and individual tipping',
        'Personal trip cancellation insurance'
      ],
      itinerary: [
        {
          day: 'Day 1: Arrival in Mekelle & Hawzen Plateau Transit',
          desc: 'Meet our Northern Corridor team at Mekelle airport. Scenic drive past ancient battlegrounds toward the red rock amphitheater of Hawzen at the base of Gheralta.'
        },
        {
          day: 'Day 2: Ascending Abuna Yemata Guh (The Cliff Church)',
          desc: 'Early dawn hike and cliff ascent along natural footholds and narrow ledges to the sky-high chapel of Abuna Yemata Guh. Marvel at pristine 6th-century ceiling frescoes preserved from humidity.'
        },
        {
          day: 'Day 3: Maryam Korkor & Daniel Korkor Twin Sanctuaries',
          desc: 'Trek up a dramatic canyon gorge to Maryam Korkor, one of the largest and most intricately carved cave basilicas in Tigray, followed by the eagle-nest vantage point of Daniel Korkor.'
        },
        {
          day: 'Day 4: Ancient Temple of Yeha & Debre Damo Scenery',
          desc: 'Day expedition to the 2,800-year-old pre-Axumite sun-temple at Yeha, showcasing pre-Christian Sabaean inscriptions and ancient stone masonry.'
        },
        {
          day: 'Day 5: Return to Mekelle & Departure',
          desc: 'Visit historical Tigray craft markets in Mekelle before transfer to the airport or onward connection to Danakil or Lalibela.'
        }
      ]
    },
    {
      id: 'lalibela-simien',
      title: 'Lalibela Rock Churches & Simien Mountains Roof of Africa',
      corridor: 'lalibela',
      hub: 'Addis Ababa & Gondar Staging Base',
      duration: '8 Days / 7 Nights',
      groupSize: '2 - 12 Adventurers',
      difficulty: 'Moderate Hiking (High Elevation)',
      price: '$1,350 - $1,900 per person',
      img: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=900&q=80',
      tagline: 'UNESCO World Heritage Pilgrimage & High Altitude Wildlife Treks',
      overview: 'Traverse the spiritual heart and ecological peaks of the Ethiopian highlands. Inspect the eleven monolithic underground churches of Lalibela, carved from living red volcanic tuff, followed by cliffside trekking in the Simien Mountains among troops of endemic Gelada baboons.',
      inclusions: [
        'Dedicated 4WD convoy throughout the northern historic loop',
        'Official UNESCO certified historian guides in Lalibela',
        'Simien National Park entrance fees, mountain scout, and wildlife tracker',
        'Boutique historical hotel and mountain lodge accommodations',
        'All meals, domestic airport transfers, and luggage portage'
      ],
      exclusions: [
        'International flights and tourist visas',
        'Personal camera / filming special permits',
        'Gratuities for hotel staff and scouts'
      ],
      itinerary: [
        {
          day: 'Day 1: Arrival in Lalibela — The Jerusalem of Africa',
          desc: 'Fly to Lalibela. Afternoon exploration of the Northwestern cluster: Biete Medhane Alem (largest monolithic church in the world) and Biete Maryam.'
        },
        {
          day: 'Day 2: The Symmetrical Cross of Biete Ghyorgis',
          desc: 'Visit the iconic cruciform church of St. George, carved downward into the bedrock, and the Southeastern cluster interconnected by subterranean catacombs.'
        },
        {
          day: 'Day 3: Scenic Transit to Gondar via the Wollo Mountain Pass',
          desc: 'Drive through breathtaking highland panoramas to Gondar, the 17th-century Camelot of Africa. Explore the Royal Enclosure of Emperor Fasilides.'
        },
        {
          day: 'Day 4-6: Simien Mountains Trekking — Sankaber to Chennek',
          desc: 'Three days along the dramatic 1,000m escarpments of the Simien National Park. Spot endemic Walia ibex, Ethiopian wolves, and large families of Gelada baboons.'
        },
        {
          day: 'Day 7-8: Return to Gondar & Flight to Addis Ababa',
          desc: 'Celebratory traditional Ethiopian dinner with live Azmari musicians in Gondar before returning to Addis Ababa.'
        }
      ]
    }
  ];

  const filteredTours = selectedHub === 'all' 
    ? tourPackages 
    : tourPackages.filter(t => t.corridor === selectedHub);

  return (
    <div className="tours-page-wrapper">
      
      {/* Hero Banner */}
      <section className="tours-hero-banner">
        <div className="trail-container">
          <span className="gold-script-tag">Origin Wilderness &amp; Sanctuaries</span>
          <h1 className="tours-hero-title">EXPEDITIONS &amp; TOUR OPERATIONS</h1>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="https://mychoiceethiopia.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-solid-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Launch Full Tours &amp; Expeditions Portal ↗
            </a>
          </div>
          <p className="tours-hero-sub">
            Seamlessly engineered journeys through ancient civilization corridors and extreme geological landscapes, backed by our permanent on-the-ground regional staging hubs in Semera and Mekelle.
          </p>
        </div>
      </section>

      {/* REGIONAL DOMINANCE GATEWAYS BAR */}
      <section className="gateways-bar-section">
        <div className="trail-container">
          <div className="gateways-grid">
            
            <div className="gateway-card">
              <div className="gateway-badge">REGIONAL DESERT GATEWAY</div>
              <h3 className="gateway-name">Semera Staging Hub (Afar)</h3>
              <p className="gateway-desc">
                Unlike capital-only agencies, our permanent Semera office guarantees immediate deployment of 4x4s, Afar clan guides, camping equipment, and emergency backstop directly into the Danakil Depression and Erta Ale.
              </p>
              <div className="gateway-stats">
                <span>📍 Semera Gate</span>
                <span>🔥 Danakil Specialist</span>
              </div>
            </div>

            <div className="gateway-card">
              <div className="gateway-badge">REGIONAL HIGHLAND GATEWAY</div>
              <h3 className="gateway-name">Mekelle Hub (Kedamay Woyane)</h3>
              <p className="gateway-desc">
                Anchored in the Kedamay Woyane Sub-City, our Mekelle fleet depot provides specialized rock-climbing escorts, high-altitude 4x4s, and direct access to the Gheralta sandstone sanctuaries and northern historical circuits.
              </p>
              <div className="gateway-stats">
                <span>📍 Kedamay Woyane</span>
                <span>⛰️ Gheralta Specialist</span>
              </div>
            </div>

            <div className="gateway-card">
              <div className="gateway-badge">CAPITAL CORPORATE HEADQUARTERS</div>
              <h3 className="gateway-name">Addis Ababa Head Office (Bole)</h3>
              <p className="gateway-desc">
                VIP airport protocol clearance, diplomatic coordination, customized nationwide tour design, and executive fleet dispatches managed from our Bole central headquarters.
              </p>
              <div className="gateway-stats">
                <span>📍 Bole Skylight Area</span>
                <span>🌐 Master Coordination</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="tours-filter-section">
        <div className="trail-container filter-row">
          <span className="filter-lead-text">Filter Expeditions:</span>
          <button 
            onClick={() => setSelectedHub('all')} 
            className={`filter-btn ${selectedHub === 'all' ? 'active' : ''}`}
          >
            All Expeditions
          </button>
          <button 
            onClick={() => setSelectedHub('semera')} 
            className={`filter-btn ${selectedHub === 'semera' ? 'active' : ''}`}
          >
            🌋 Danakil &amp; Afar Desert (Semera)
          </button>
          <button 
            onClick={() => setSelectedHub('mekelle')} 
            className={`filter-btn ${selectedHub === 'mekelle' ? 'active' : ''}`}
          >
            ⛰️ Gheralta &amp; Tigray (Mekelle)
          </button>
          <button 
            onClick={() => setSelectedHub('lalibela')} 
            className={`filter-btn ${selectedHub === 'lalibela' ? 'active' : ''}`}
          >
            ⛪ Historic Lalibela &amp; Simiens
          </button>
        </div>
      </section>

      {/* FEATURED EXPEDITION DETAIL VIEW */}
      <section className="tour-catalog-section">
        <div className="trail-container">
          {filteredTours.map((tour, tIdx) => (
            <div key={tour.id} className="tour-master-card">
              
              <div className="tour-top-row">
                <div className="tour-img-column">
                  <div className="tour-img-wrap">
                    <img src={tour.img} alt={tour.title} className="tour-img" />
                    <div className="tour-hub-tag">{tour.hub}</div>
                  </div>
                </div>

                <div className="tour-meta-column">
                  <span className="gold-script-tag">{tour.tagline}</span>
                  <h2 className="tour-card-title">{tour.title}</h2>
                  
                  <div className="tour-key-metrics-grid">
                    <div className="metric-cell">
                      <Clock size={16} className="m-icon" />
                      <div>
                        <div className="m-label">Duration</div>
                        <div className="m-val">{tour.duration}</div>
                      </div>
                    </div>

                    <div className="metric-cell">
                      <Users size={16} className="m-icon" />
                      <div>
                        <div className="m-label">Group Scale</div>
                        <div className="m-val">{tour.groupSize}</div>
                      </div>
                    </div>

                    <div className="metric-cell">
                      <Mountain size={16} className="m-icon" />
                      <div>
                        <div className="m-label">Difficulty</div>
                        <div className="m-val">{tour.difficulty}</div>
                      </div>
                    </div>

                    <div className="metric-cell">
                      <ShieldCheck size={16} className="m-icon" />
                      <div>
                        <div className="m-label">Pricing Guide</div>
                        <div className="m-val">{tour.price}</div>
                      </div>
                    </div>
                  </div>

                  <p className="tour-overview-p">{tour.overview}</p>

                  <div className="inclusions-exclusions-box">
                    <div className="inclusions-col">
                      <h4 className="box-title positive"><Check size={14} /> What’s Included</h4>
                      <ul className="inc-list">
                        {tour.inclusions.map((inc, i) => (
                          <li key={i}>{inc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="exclusions-col">
                      <h4 className="box-title negative"><X size={14} /> What’s Excluded</h4>
                      <ul className="inc-list">
                        {tour.exclusions.map((exc, i) => (
                          <li key={i}>{exc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* Day-by-Day Collapsible Accordion Itinerary */}
              <div className="tour-itinerary-accordion">
                <h3 className="accordion-heading">Day-by-Day Expedition Itinerary</h3>
                <div className="itinerary-days-list">
                  {tour.itinerary.map((day, dIdx) => (
                    <div key={dIdx} className="itinerary-day-row">
                      <div className="day-header-pill">
                        <strong>{day.day}</strong>
                      </div>
                      <p className="day-body-desc">{day.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="tour-card-footer">
                <div className="footer-left">
                  <span>Transparent Pricing • All Permits Included • Grade-8 Chauffeur Outfitted</span>
                </div>
                <div className="footer-right">
                  <Link to="/contact" className="btn-solid-red">
                    Inquire / Book This Expedition ➔
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
