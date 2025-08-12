import React, { useState } from "react";
import "../styles/pages/Contact.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section className="contact-page" aria-label="Contact">
            {/* Decorative SVG background */}
            <svg className="contact-wave-bg" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#contactGradient1)" fillOpacity="0.19"
                    d="M0,80L80,112C160,144,320,208,480,213.3C640,219,800,165,960,133.3C1120,101,1280,91,1360,85.3L1440,80L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
                <defs>
                    <linearGradient id="contactGradient1" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#b09cf7" />
                        <stop offset="1" stopColor="#7e5fff" />
                    </linearGradient>
                </defs>
            </svg>
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-subtitle">
                <span>
                    <b>Let's connect! Reach out for collaboration, questions, or feedback.</b>
                </span>
            </div>
            <div className="contact-content">
                <div className="contact-columns">
                    <div className="contact-details-card">
                        <h3 className="contact-section-heading">Contact Information</h3>
                        <ul>
                            <li>✉️ <b>Email:</b> <a href="mailto:email@example.com">email@example.com</a></li>
                            <li>🐦 <b>Twitter:</b> <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">@ProfessionalBlog</a></li>
                            <li>💼 <b>LinkedIn:</b> <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Professional Blog Team</a></li>
                            <li>🌐 <b>Website:</b> <a href="https://yourblogsite.com" target="_blank" rel="noopener noreferrer">yourblogsite.com</a></li>
                        </ul>
                        <div className="contact-social">
                            <h4>Follow us</h4>
                            <div className="contact-social-links">
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <img width="28" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" />
                                </a>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <img width="28" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
                                </a>
                                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <img width="28" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-card">
                        <h3 className="contact-section-heading">Send Us a Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
                            <label>
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                    placeholder="Your name"
                                />
                            </label>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                    placeholder="your@email.com"
                                />
                            </label>
                            <label>
                                Message
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Type your message here..."
                                />
                            </label>
                            <button type="submit" className="send-message-btn">
                                Send Message
                            </button>
                            {sent && (
                                <span className="contact-success">
                                    Your message has been sent successfully! 🎉
                                </span>
                            )}
                        </form>
                    </div>
                </div>
                <div className="contact-quote">
                    <blockquote>
                        "We love hearing from our community. Every message inspires us to do better!"
                    </blockquote>
                </div>
            </div>
        </section>
    );
}