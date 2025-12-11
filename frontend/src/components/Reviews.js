import React from 'react';
import './Reviews.css';

const Reviews = ({ data }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">⭐</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">⭐</span>);
    }
    const emptyStars = 10 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2 className="section-title">💬 User Reviews</h2>
        <div className="reviews-grid">
          {data.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-image-wrapper">
                  <img src={review.image} alt={review.anime} className="review-image" />
                </div>
                <div className="review-header-info">
                  <h3 className="review-anime">{review.anime}</h3>
                  <p className="review-reviewer">by {review.reviewer}</p>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                    <span className="rating-number">{review.rating}/10</span>
                  </div>
                </div>
              </div>
              <div className="review-content">
                <h4 className="review-title">{review.title}</h4>
                <p className="review-text">{review.content}</p>
                <div className="review-date">📅 {review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

