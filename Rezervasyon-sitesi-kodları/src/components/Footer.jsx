import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>ReserveNow</h3>
              <p>Your trusted partner for the perfect accommodation experience. Discover the best hotels worldwide.</p>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Hotel Reservation</a>
              </li>
              <li>
                <a href="#">Restaurant Reservation</a>
              </li>
              <li>
                <a href="#">Event Organization</a>
              </li>
              <li>
                <a href="#">VIP Services</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Cancellation Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📍 Maslak, Istanbul</p>
              <p>📞 +90 212 123 45 67</p>
              <p>✉️ info@reservenow.com</p>
            </div>

            <div className="newsletter">
              <h5>Newsletter</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 ReserveNow. All rights reserved.</p>
            <div className="footer-links">
              <a href="home">Terms of Use</a>
              <a href="home">Privacy Policy</a>
              <a href="home">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}