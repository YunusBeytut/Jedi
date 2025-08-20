import React from "react";
import posts from "../data/posts";
import BlogCard from "./BlogCard";
import "../styles/components/BlogList.css";

function BlogList({ onPostSelect }) {
  return (
    <section className="blog-list" aria-label="Blog List">
      {posts.map(post => (
        <BlogCard key={post.id} post={post} onClick={() => onPostSelect(post.id)} />
      ))}
    </section>
  );
}

export default BlogList;