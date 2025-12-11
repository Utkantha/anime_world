import React from 'react';
import './Episodes.css';

const Episodes = ({ data }) => {
  return (
    <section id="episodes" className="episodes-section">
      <div className="container">
        <h2 className="section-title">📺 Latest Episodes</h2>
        <div className="episodes-grid">
          {data.map((episode) => (
            <div key={episode.id} className="episode-card">
              <div className="episode-thumbnail-wrapper">
                <img src={episode.thumbnail} alt={episode.title} className="episode-thumbnail" />
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 107, 107, 0.9)"/>
                    <path d="M25 20L25 40L40 30L25 20Z" fill="white"/>
                  </svg>
                </div>
                <div className="episode-badge">New</div>
              </div>
              <div className="episode-info">
                <div className="episode-header">
                  <span className="episode-anime">{episode.anime}</span>
                  <span className="episode-number">Ep {episode.episodeNumber}</span>
                </div>
                <h3 className="episode-title">{episode.title}</h3>
                <p className="episode-description">{episode.description}</p>
                <div className="episode-footer">
                  <span className="episode-date">📅 {episode.releaseDate}</span>
                  <button className="watch-episode-btn">Watch Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="video-showcase">
          <h3 className="showcase-title">🎬 Live Anime Streaming</h3>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Anime Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="anime-video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;

