import React, { useState } from 'react';
import RadarChart from './RadarChart.jsx';
import { SUBSIDIARIES } from '../data/subsidiaries.js';

export default function CapabilityInspector({ onOpenModal }) {
  const [activeKey, setActiveKey] = useState('ela');
  const sub = SUBSIDIARIES[activeKey];

  return (
    <section id="capability-inspector" className="asymmetric-section container">
      <div className="inspector-header-row">
        <div>
          <span className="section-subtitle">Operational Metrics &amp; Benchmarks</span>
          <h2 className="section-title">Subsidiary Capability Inspector</h2>
          <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-600)', marginTop: '0.5rem', maxWidth: '580px' }}>
            Select a subsidiary in the portfolio below to inspect operational capacity, field fleet sizes, regulatory compliance matrices, and live capability radar scores.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="inspector-tabs">
          <button onClick={() => setActiveKey('ela')} className={`sub-tab-btn ${activeKey === 'ela' ? 'active' : ''}`}>
            Ela Trading
          </button>
          <button onClick={() => setActiveKey('bricks')} className={`sub-tab-btn ${activeKey === 'bricks' ? 'active' : ''}`}>
            Bricks Lounge
          </button>
          <button onClick={() => setActiveKey('catering')} className={`sub-tab-btn ${activeKey === 'catering' ? 'active' : ''}`}>
            Ela Catering
          </button>
          <button onClick={() => setActiveKey('mychoice')} className={`sub-tab-btn ${activeKey === 'mychoice' ? 'active' : ''}`}>
            MyChoice Fleet
          </button>
          <button onClick={() => setActiveKey('zfish')} className={`sub-tab-btn ${activeKey === 'zfish' ? 'active' : ''}`}>
            Zfish Aquatic
          </button>
        </div>
      </div>

      <div className="asymmetric-grid">
        {/* Left Column: Specs Card & Parameter Table (7 cols) */}
        <div style={{ gridColumn: 'span 7' }}>
          
          {/* Dynamic Summary Card */}
          <div className="inspector-details-card">
            <div className="details-card-top">
              <div>
                <h3 className="details-name">{sub.name}</h3>
                <span className="details-division">{sub.division}</span>
              </div>
              <span className="details-status-pill">{sub.status}</span>
            </div>
            <p className="details-desc">{sub.desc}</p>
          </div>

          {/* Typewriter Parameter Table */}
          <div className="specs-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Operational Parameter</th>
                  <th>Performance Standard</th>
                  <th>Regulatory Protocol</th>
                </tr>
              </thead>
              <tbody>
                {sub.table.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 'bold', color: 'var(--ink-900)' }}>{row.param}</td>
                    <td style={{ fontWeight: 'bold', color: 'var(--terracotta-600)' }}>{row.spec}</td>
                    <td style={{ color: 'var(--ink-600)' }}>{row.proto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '12px', color: 'var(--ink-600)' }}>
              Corporate Entity: <strong style={{ color: 'var(--ink-900)' }}>{sub.entity}</strong>
            </span>
            <button
              onClick={() => onOpenModal(activeKey)}
              style={{
                padding: '0.5rem 1.25rem',
                backgroundColor: 'var(--ink-900)',
                color: 'var(--cream-50)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Launch Portal ↗
            </button>
          </div>

        </div>

        {/* Right Column: Dynamic SVG Radar Chart (5 cols) */}
        <div style={{ gridColumn: 'span 5' }}>
          <div className="radar-card">
            <span className="radar-title">Capability Matrix vs Sector Baseline</span>
            <RadarChart
              labels={sub.radarLabels}
              values={sub.radarValues}
              baselines={sub.radarBaselines}
              title={`${sub.name}`}
            />
            <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '11px', color: 'var(--ink-600)', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>
              Audited under Tekilay Group integrated operational governance.
            </p>
          </div>
        </div>
      </div>

      <div className="border-paper-dotted" style={{ marginTop: '4rem' }}></div>
    </section>
  );
}
