import React from "react";
import "../styles/components/About.css";

function About() {
  return (
    <section className="about-page" aria-label="About Us">
      {/* Decorative SVG background */}
      <svg className="about-wave-bg" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#aboutGradient1)" fillOpacity="0.19"
          d="M0,80L80,112C160,144,320,208,480,213.3C640,219,800,165,960,133.3C1120,101,1280,91,1360,85.3L1440,80L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        <defs>
          <linearGradient id="aboutGradient1" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b09cf7" />
            <stop offset="1" stopColor="#7e5fff" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="about-title">About Professional Blog</h2>
      <div className="about-subtitle">
        <span>
          <b>Your source for modern web & tech inspiration.</b>
        </span>
      </div>
      <div className="about-content">
        <div className="about-columns">
          <div className="about-feature-list">
            <h3 className="about-section-heading">Why Choose Us?</h3>
            <ul>
              <li>🚀 <b>Latest Tech News</b> — Stay updated with rapidly changing technology trends.</li>
              <li>✍️ <b>Expert Writers</b> — Articles written and reviewed by professionals.</li>
              <li>🗂️ <b>Diverse Categories</b> — From Web Development to AI and Design.</li>
              <li>💡 <b>Deep-Dive Tutorials</b> — Step-by-step guides & hands-on projects.</li>
              <li>💬 <b>Interactive Comments</b> — Join discussions, ask and answer questions.</li>
              <li>🧑‍💻 <b>Personal Dashboard</b> — Save favorites, follow topics, manage your reading list.</li>
              <li>📱 <b>Seamless Mobile Experience</b> — Designed for every device.</li>
              <li>🌙 <b>Light/Dark Mode</b> — Switch themes for your comfort.</li>
              <li>🤝 <b>Community Events</b> — Webinars, live Q&A, and hackathons.</li>
              <li>🔒 <b>Privacy First</b> — Your data and reading habits are always secure.</li>
            </ul>
          </div>
          <div className="about-mission-vision">
            <div className="about-mission">
              <h3 className="about-section-heading">Our Mission</h3>
              <p>
                To empower developers and tech enthusiasts by providing accessible, high-quality, and practical content. We aim to make learning technology enjoyable, interactive, and community-driven.
              </p>
            </div>
            <div className="about-vision">
              <h3 className="about-section-heading">Our Vision</h3>
              <p>
                To become the most trusted and vibrant online resource for digital creators, driving innovation and sharing knowledge around the world.
              </p>
            </div>
            <div className="about-extra">
              <h3 className="about-section-heading">Special Features</h3>
              <ul>
                <li>🌟 <b>Weekly Newsletter</b> with exclusive tips</li>
                <li>📚 <b>Resource Library</b> (ebooks, templates, code snippets)</li>
                <li>🎧 <b>Podcast Series</b> with industry leaders</li>
                <li>📝 <b>Open Submission</b> — Write and publish your own articles</li>
                <li>🏆 <b>Monthly Challenges</b> and rewards</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-quote">
          <blockquote>
            "Empowering the next generation of creators, one article at a time.."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;