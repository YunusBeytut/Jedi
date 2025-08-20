import React from "react";
import "../styles/components/BlogCard.css";

function BlogCard({ post, onClick }) {
  return (
    <article className="blog-card" tabIndex={0} aria-label={`Blog: ${post.title}`} onClick={onClick}>
      <img src={post.img} alt={post.title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <span className="card-date">{post.date}</span>
        <p className="card-desc">{post.desc}</p>
        <button className="read-more-btn" type="button" aria-label="Read Details">Read More</button>
      </div>
    </article>
  );
}

export default BlogCard;