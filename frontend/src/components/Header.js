import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🎌</span>
          <span className="logo-text">Anime Universe</span>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#trending">Trending</a>
          <a href="#dramas">Dramas</a>
          <a href="#characters">Characters</a>
          <a href="#episodes">Episodes</a>
          <a href="#fanart">Fan Art</a>
          <a href="#blogs">Blogs</a>
          <a href="#reviews">Reviews</a>
          <div className="nav-auth">
            <a href="#auth" className="auth-btn login-btn">Log In</a>
            <a href="#auth" className="auth-btn signup-btn">Sign Up</a>
          </div>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

