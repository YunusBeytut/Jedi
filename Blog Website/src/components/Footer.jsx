import React from "react";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <span className="footer-title">Professional Blog</span>
          <span className="footer-desc">
            Modern web development articles, community & inspiration.
          </span>
        </div>
        <div className="footer-links-section">
          <span className="footer-links-title">Quick Links</span>
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/team" className="footer-link">Our Team</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-social-section">
          <span className="footer-social-title">Follow Us</span>
          <div className="footer-social-links">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Professional Blog. All rights reserved.
      </div>
    </footer>
  );
}