import React from "react";
import "./Ipad.css";

function Ipad() {
  return (
    <div>
      {/* Hero */}
      <section className="internal-page-wrapper hero">
        <div className="container text-center">
          <h1 className="font-weight-bold hero-title">iPad Pro</h1>
          <p className="hero-subtitle">Supercharged by the Apple M2 chip.</p>
          <img
            src="https://www.apple.com/v/ipad/home/cf/images/overview/hero/ipad_pro_hero__gl0wz6l6j1i6_large.jpg"
            alt="iPad Pro"
            className="hero-image"
          />
        </div>
      </section>

      {/* Video Showcase */}
      <section className="internal-page-wrapper video-showcase">
        <div className="container text-center">
          <video
            className="feature-video"
            src="/assets-www/en_WW/ipad/welcome/ipad-showcase.mp4"
            preload="auto"
            loop
            playsInline
            muted
            autoPlay
          />
        </div>
      </section>

      {/* Features */}
      <section className="internal-page-wrapper features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-12 feature">
              <h2>Performance</h2>
              <p>M2 chip delivers next-level performance and graphics.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Display</h2>
              <p>Liquid Retina XDR for extreme dynamic range.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Apple Pencil</h2>
              <p>Hover and draw with precision like never before.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Design</h2>
              <p>Slim, portable, and powerful tablet design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="internal-page-wrapper comparison">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12 comparison-card">
              <h3>iPad Air</h3>
              <p>Light and powerful for everyday creativity.</p>
            </div>
            <div className="col-md-5 col-12 comparison-card">
              <h3>iPad Pro</h3>
              <p>Ultimate performance with advanced features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="internal-page-wrapper cta">
        <div className="container text-center">
          <button className="buy-btn">Buy Now</button>
        </div>
      </section>
    </div>
  );
}

export default Ipad;
