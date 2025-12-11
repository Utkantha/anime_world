import React from 'react';
import './Dramas.css';

const Dramas = ({ data }) => {
  return (
    <section id="dramas" className="dramas-section">
      <div className="container">
        <h2 className="section-title">🎭 Emotional Dramas</h2>
        <div className="dramas-grid">
          {data.map((drama) => (
            <div key={drama.id} className="drama-card">
              <div className="drama-image-wrapper">
                <img src={drama.image} alt={drama.title} className="drama-image" />
                <div className="drama-overlay">
                  <span className="drama-status">{drama.status}</span>
                  <span className="drama-rating">⭐ {drama.rating}</span>
                </div>
              </div>
              <div className="drama-info">
                <h3 className="drama-title">{drama.title}</h3>
                <p className="drama-episodes">{drama.episodes} Episodes</p>
                <p className="drama-description">{drama.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dramas;

