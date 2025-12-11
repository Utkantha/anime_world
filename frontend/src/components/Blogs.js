import React from 'react';
import './Blogs.css';

const Blogs = ({ data }) => {
  return (
    <section id="blogs" className="blogs-section">
      <div className="container">
        <h2 className="section-title">📝 Anime Blogs</h2>
        <div className="blogs-grid">
          {data.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-date">
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">✍️ {blog.author}</span>
                  <span className="blog-date-text">{blog.date}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <button className="read-more-btn">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

