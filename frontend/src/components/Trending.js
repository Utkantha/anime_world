import React from 'react';
import './Trending.css';

const Trending = ({ data }) => {
  return (
    <section id="trending" className="trending-section">
      <div className="container">
        <h2 className="section-title">🔥 Trending Anime</h2>
        <div className="trending-grid">
          {data.map((anime) => (
            <div key={anime.id} className="anime-card">
              <div className="anime-image-wrapper">
                <img src={anime.image} alt={anime.title} className="anime-image" />
                <div className="anime-overlay">
                  <div className="anime-rating">
                    <span className="star">⭐</span>
                    <span>{anime.rating}</span>
                  </div>
                  <div className="anime-status">{anime.status}</div>
                </div>
                <div className="anime-hover-content">
                  <button className="watch-btn">Watch Now</button>
                </div>
              </div>
              <div className="anime-info">
                <h3 className="anime-title">{anime.title}</h3>
                <p className="anime-episodes">{anime.episodes} Episodes</p>
                <p className="anime-description">{anime.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;

