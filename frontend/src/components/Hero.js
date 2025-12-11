import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Welcome to</span>
          <span className="title-main">Anime Universe</span>
        </h1>
        <p className="hero-subtitle">
          Discover trending series, explore characters, watch episodes, 
          admire fan art, read blogs, and share reviews
        </p>
        <div className="hero-buttons">
          <a href="#trending" className="btn btn-primary">Explore Now</a>
          <a href="#episodes" className="btn btn-secondary">Watch Latest</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Anime Series</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Characters</div>
          </div>
          <div className="stat">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Fan Art</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;

