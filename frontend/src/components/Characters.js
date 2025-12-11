import React from 'react';
import './Characters.css';

const Characters = ({ data }) => {
  return (
    <section id="characters" className="characters-section">
      <div className="container">
        <h2 className="section-title">⭐ Character Spotlights</h2>
        <div className="characters-grid">
          {data.map((character) => (
            <div key={character.id} className="character-card">
              <div className="character-image-wrapper">
                <img src={character.image} alt={character.name} className="character-image" />
                <div className="character-glow"></div>
              </div>
              <div className="character-info">
                <h3 className="character-name">{character.name}</h3>
                <p className="character-anime">{character.anime}</p>
                <p className="character-description">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;

