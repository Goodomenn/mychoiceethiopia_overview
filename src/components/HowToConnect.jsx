import React from 'react';

export default function HowToConnect() {
  return (
    <section className="how-to-banner">
      <div className="container">
        <div className="how-to-grid">
          <div>
            <h2 className="how-to-title">
              HOW TO<br />CONNECT
            </h2>
          </div>

          <div className="how-to-step">
            <span className="step-number">1</span>
            <p className="step-desc">
              Select an enterprise division &amp; explore specialized subsidiary portfolios
            </p>
          </div>

          <div className="how-to-step">
            <span className="step-number">2</span>
            <p className="step-desc">
              Inspect live laboratory specs, institutional fleet inventory &amp; venue menus
            </p>
          </div>

          <div className="how-to-step">
            <span className="step-number">3</span>
            <p className="step-desc">
              Launch direct web application or submit consolidated multi-division RFQs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
