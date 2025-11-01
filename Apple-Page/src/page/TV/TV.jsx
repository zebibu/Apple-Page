import React from "react";
import "./TV.css";

function Tv() {
  return (
    <div>
      {/* Hero Section */}
      <section className="internal-page-wrapper hero">
        <div className="container text-center">
          <h1 className="font-weight-bold hero-title">Apple TV 4K</h1>
          <p className="hero-subtitle">The future of television is here.</p>
          <img
            src="https://www.apple.com/v/apple-tv-4k/b/images/overview/hero/apple_tv_4k__d52q1t8b6tia_large.jpg"
            alt="Apple TV 4K"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features */}
      <section className="internal-page-wrapper features">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-12 feature">
              <h2>4K HDR</h2>
              <p>Cinematic quality with Dolby Vision and HDR10+.</p>
            </div>
            <div className="col-md-4 col-12 feature">
              <h2>Apple TV+</h2>
              <p>Stream Apple Originals, movies, and shows.</p>
            </div>
            <div className="col-md-4 col-12 feature">
              <h2>Gaming</h2>
              <p>Play Apple Arcade games with a controller.</p>
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

export default Tv;
