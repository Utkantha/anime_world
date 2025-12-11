import React from 'react';
import './FanArt.css';

const FanArt = ({ data }) => {
  return (
    <section id="fanart" className="fanart-section">
      <div className="container">
        <h2 className="section-title">🎨 Fan Art Gallery</h2>
        <div className="fanart-grid">
          {data.map((art) => (
            <div key={art.id} className="fanart-card">
              <div className="fanart-image-wrapper">
                <img src={art.image} alt={art.title} className="fanart-image" />
                <div className="fanart-overlay">
                  <div className="fanart-info">
                    <h4 className="fanart-title">{art.title}</h4>
                    <p className="fanart-artist">by {art.artist}</p>
                    <p className="fanart-anime">From: {art.anime}</p>
                  </div>
                  <div className="fanart-likes">
                    <span className="heart-icon">❤️</span>
                    <span>{art.likes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanArt;

