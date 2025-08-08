import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Contact</h2>
                    <div className="contact-divider"></div>
                    <p className="contact-subtitle">
                        Get in touch with us for your questions, suggestions, or support requests.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3 className="info-title">Contact Information</h3>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon-container phone">
                                        <Phone className="info-icon" />
                                    </div>
                                    <div className="info-details">
                                        <h4 className="info-label">Phone</h4>
                                        <p className="info-value">+90 (212) 555 0123</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-container email">
                                        <Mail className="info-icon" />
                                    </div>
                                    <div className="info-details">
                                        <h4 className="info-label">Email</h4>
                                        <p className="info-value">info@shopmax.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-container address">
                                        <MapPin className="info-icon" />
                                    </div>
                                    <div className="info-details">
                                        <h4 className="info-label">Address</h4>
                                        <p className="info-value">
                                            Maslak Mahallesi, Büyükdere Caddesi<br />
                                            No: 123, Şişli/İstanbul
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hours-card">
                            <h3 className="hours-title">Working Hours</h3>
                            <div className="hours-list">
                                <div className="hours-item">
                                    <span>Monday - Friday</span>
                                    <span>09:00 - 18:00</span>
                                </div>
                                <div className="hours-item">
                                    <span>Saturday</span>
                                    <span>10:00 - 16:00</span>
                                </div>
                                <div className="hours-item">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3 className="form-title">Write to Us</h3>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label className="form-label">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Enter the subject of your message"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="form-textarea"
                                    placeholder="Write your message here"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;