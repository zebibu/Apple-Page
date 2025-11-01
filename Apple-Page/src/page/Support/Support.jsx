import React from "react";
import "./Support.css";

function Support() {
  return (
    <div>
      {/* Hero */}
      <section className="internal-page-wrapper hero">
        <div className="container text-center">
          <h1 className="font-weight-bold hero-title">Apple Support</h1>
          <p className="hero-subtitle">We’re here to help.</p>
          <img
            src="https://www.apple.com/v/iphone/home/bo/images/overview/hero/iphone_support__large.jpg"
            alt="Apple Support"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features */}
      <section className="internal-page-wrapper features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-12 feature">
              <h2>Get Support</h2>
              <p>Find answers, set up repairs, and check coverage.</p>
            </div>
            <div className="col-md-4 col-12 feature">
              <h2>Community</h2>
              <p>Connect with Apple users around the world.</p>
            </div>
            <div className="col-md-4 col-12 feature">
              <h2>Guides</h2>
              <p>Step-by-step tutorials for all Apple products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="internal-page-wrapper cta">
        <div className="container text-center">
          <button className="buy-btn">Visit Support</button>
        </div>
      </section>
    </div>
  );
}

export default Support;
