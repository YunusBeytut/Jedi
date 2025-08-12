import React from "react";
import BlogList from "./BlogList";

function Home({ onPostSelect }) {
  return (
    <div>
      {/* SVG dalga arka planı */}
      <svg className="wave-bg" viewBox="0 0 1440 540" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#gradient1)" fillOpacity="0.27"
          d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1440" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b09cf7" />
            <stop offset="1" stopColor="#7e5fff" />
          </linearGradient>
        </defs>
      </svg>
      <h1 style={{
        fontWeight: 900,
        fontSize: "2.4rem",
        textAlign: "center",
        color: "#5a3abf",
        margin: "1.5rem 0 0.7rem 0",
        textShadow: "0 3px 20px #b09cf72a"
      }}>
        Welcome to the Professional Blog
      </h1>
      <div style={{
        textAlign: "center",
        color: "#6146c9",
        fontWeight: 500,
        fontSize: "1.15rem",
        marginBottom: "2.2rem"
      }}>
        <span style={{
          background: "#f4eefd",
          padding: "0.2em 1em",
          borderRadius: "13px",
          fontWeight: 700,
          boxShadow: "0 2px 12px #b09cf730"
        }}>
          Discover modern web development articles, tips, and inspirations.
        </span>
      </div>
      <BlogList onPostSelect={onPostSelect} />
    </div>
  );
}

export default Home;