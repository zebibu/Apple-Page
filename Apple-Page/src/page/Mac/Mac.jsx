import React from "react";
import "./Mac.css";

function Mac() {
  return (
    <div>
      {/* Hero Section */}
      <section className="internal-page-wrapper hero">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold hero-title">MacBook Air</h1>
              <p className="hero-subtitle">Power. It’s in the Air.</p>
              <img
                src="https://www.apple.com/v/mac/home/bl/images/overview/hero/macbook_air__csdf2g6te9um_large.jpg"
                alt="MacBook Air"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="internal-page-wrapper video-showcase">
        <div className="container text-center">
          <video
            className="feature-video"
            src="/assets-www/en_WW/mac/welcome/13419301b_medium_2x.mp4"
            preload="auto"
            loop
            playsInline
            muted
            autoPlay
            aria-label="Animation showcasing a lineup of Mac products: MacBook Air, 24-inch iMac in all seven colors, 2024 Mac mini, MacBook Pro, Studio Display, and Mac Studio"
            role="img"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="internal-page-wrapper features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-12 feature">
              <h2>Performance</h2>
              <p>Supercharged by Apple silicon for blazing speed.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Display</h2>
              <p>Brilliant Retina display with vivid detail.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Battery</h2>
              <p>Up to 18 hours of battery life on a single charge.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Design</h2>
              <p>Lightweight, thin, and built to last.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="internal-page-wrapper comparison">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-5 col-12 comparison-card">
              <h3>MacBook Air</h3>
              <p>Portable performance for everyday tasks.</p>
            </div>
            <div className="col-md-5 col-12 comparison-card">
              <h3>MacBook Pro</h3>
              <p>Advanced power for professionals and creators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="internal-page-wrapper cta">
        <div className="container text-center">
          <button className="buy-btn">Buy Now</button>
        </div>
      </section>
    </div>
  );
}

export default Mac;
