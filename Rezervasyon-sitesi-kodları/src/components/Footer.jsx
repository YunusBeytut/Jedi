import "./Footer.css"

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleLinkClick = (message) => {
    alert(message || "Coming soon!");
  }

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
              <button onClick={() => handleLinkClick("Facebook page coming soon!")} aria-label="Facebook">
                📘
              </button>
              <button onClick={() => handleLinkClick("Twitter page coming soon!")} aria-label="Twitter">
                🐦
              </button>
              <button onClick={() => handleLinkClick("Instagram page coming soon!")} aria-label="Instagram">
                📷
              </button>
              <button onClick={() => handleLinkClick("LinkedIn page coming soon!")} aria-label="LinkedIn">
                💼
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection('home')} className="footer-link">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="footer-link">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <button onClick={() => handleLinkClick("Hotel reservation system coming soon!")} className="footer-link">Hotel Reservation</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Restaurant reservation system coming soon!")} className="footer-link">Restaurant Reservation</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Event organization system coming soon!")} className="footer-link">Event Organization</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("VIP services coming soon!")} className="footer-link">VIP Services</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <button onClick={() => handleLinkClick("Help center coming soon!")} className="footer-link">Help Center</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("FAQ page coming soon!")} className="footer-link">FAQ</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Cancellation policy coming soon!")} className="footer-link">Cancellation Policy</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Privacy policy coming soon!")} className="footer-link">Privacy Policy</button>
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
                <button onClick={() => handleLinkClick("Newsletter subscription coming soon!")}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 ReserveNow. All rights reserved.</p>
            <div className="footer-links">
              <button className="footer-link" onClick={() => handleLinkClick("Terms of use coming soon!")}>
                Terms of Use
              </button>
              <button className="footer-link" onClick={() => handleLinkClick("Privacy policy coming soon!")}>
                Privacy Policy
              </button>
              <button className="footer-link" onClick={() => handleLinkClick("Cookie policy coming soon!")}>
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}