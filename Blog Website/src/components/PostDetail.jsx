import React from "react";
import posts from "../data/posts";
import "../styles/components/PostDetail.css";

function PostDetail({ postId, onBack }) {
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <section className="post-detail" aria-label="Post Detail">
        <h2>Post Not Found</h2>
        <button onClick={onBack} type="button" aria-label="Back">Back</button>
      </section>
    );
  }

  return (
    <section className="post-detail" aria-label="Post Detail">
      <h2>{post.title}</h2>
      <span className="card-date">{post.date}</span>
      <img src={post.img} alt={post.title} className="card-img" style={{ margin: "1rem 0", maxWidth: "100%" }} />
      <p className="card-desc">{post.desc}</p>
      <div className="post-content" style={{ whiteSpace: "pre-line", marginTop: "1.5rem" }}>
        {post.content}
      </div>
      <button onClick={onBack} type="button" aria-label="Back">Back</button>
    </section>
  );
}

export default PostDetail;