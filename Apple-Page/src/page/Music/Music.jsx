import React from "react";
import "./Music.css";

function Music() {
  return (
    <div>
      {/* Hero Section */}
      <section className="internal-page-wrapper hero">
        <div className="container text-center">
          <h1 className="font-weight-bold hero-title">Apple Music</h1>
          <p className="hero-subtitle">70 million songs. Ad-free. Anytime.</p>
          <img
            src="https://www.apple.com/v/apple-music/l/images/overview/hero/apple_music_hero__dl3fq2o4w9m6_large.jpg"
            alt="Apple Music"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features */}
      <section className="internal-page-wrapper features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-12 feature">
              <h2>Unlimited Music</h2>
              <p>Listen to millions of songs on demand.</p>
            </div>
            <div className="col-md-4 col-12 feature">
              <h2>Personalized</h2>
              <p>Curated playlists made just for you.</p>
            </div>
            <div className="col-md-4 col-12 feature">
              <h2>Offline Listening</h2>
              <p>Download tracks and listen anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="internal-page-wrapper cta">
        <div className="container text-center">
          <button className="buy-btn">Try Free</button>
        </div>
      </section>
    </div>
  );
}

export default Music;
