import React from "react";
import "./Watch.css";

function Watch() {
  return (
    <div>
      {/* Hero */}
      <section className="internal-page-wrapper hero">
        <div className="container text-center">
          <h1 className="font-weight-bold hero-title">Apple Watch Series 9</h1>
          <p className="hero-subtitle">Smarter. Brighter. Mightier.</p>
          <img
            src="https://www.apple.com/v/watch/home/j/images/overview/hero/hero_watch__bzl0kqu9p8n6_large.jpg"
            alt="Apple Watch"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features */}
      <section className="internal-page-wrapper features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-12 feature">
              <h2>Health</h2>
              <p>Track workouts, heart rate, and sleep patterns.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Safety</h2>
              <p>Fall detection and emergency SOS for peace of mind.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Display</h2>
              <p>Always-On Retina display, 2x brighter outdoors.</p>
            </div>
            <div className="col-md-3 col-12 feature">
              <h2>Design</h2>
              <p>Durable, customizable, and swimproof.</p>
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

export default Watch;
