"use client"
import { useState } from "react"
import "./Contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Form submission process will be handled here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Contact</h2>
          <p>Contact us for your questions, we're happy to help you</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-slide-in-left">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Address</h3>
                <p>
                  Maslak Neighborhood, Büyükdere Street
                  <br />
                  No: 123, Sarıyer/Istanbul
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>
                  +90 212 123 45 67
                  <br />
                  +90 532 123 45 67
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>
                  info@reservenow.com
                  <br />
                  support@reservenow.com
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>
                  Monday - Friday: 09:00 - 18:00
                  <br />
                  Weekend: 10:00 - 16:00
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select subject</option>
                    <option value="reservation">Reservation</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn animate-pulse-glow">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}