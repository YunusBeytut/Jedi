import "./About.css"

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-slide-in-left">
            <h2>Why ReserveNow?</h2>
            <p>
              With our 15 years of experience, we have partnerships with thousands of hotels and accommodation 
              facilities worldwide. With our customer satisfaction-focused approach and professional service 
              understanding, we make your travel experience unforgettable.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">🏨</div>
                <div className="feature-content">
                  <h3>Wide Hotel Network</h3>
                  <p>50,000+ hotel options worldwide</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">💰</div>
                <div className="feature-content">
                  <h3>Best Price Guarantee</h3>
                  <p>If you find the same hotel cheaper, we'll pay the difference</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🔒</div>
                <div className="feature-content">
                  <h3>Secure Payment</h3>
                  <p>SSL certified secure payment system</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">📞</div>
                <div className="feature-content">
                  <h3>24/7 Support</h3>
                  <p>Customer service that's always by your side</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="/lobi4.jpg" alt="Hotel Reception" />
          </div>
        </div>
      </div>
    </section>
  )
}