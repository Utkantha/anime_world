import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-icon">🎌</span>
              Anime Universe
            </h3>
            <p className="footer-description">
              Your ultimate destination for all things anime. Discover, watch, and connect with the anime community.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">▶️</a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#trending">Trending</a></li>
              <li><a href="#characters">Characters</a></li>
              <li><a href="#episodes">Episodes</a></li>
              <li><a href="#fanart">Fan Art</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Community</h4>
            <ul className="footer-links">
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Anime Universe. All rights reserved. Made with ❤️ for anime lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

