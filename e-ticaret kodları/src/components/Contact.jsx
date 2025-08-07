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
        alert('Mesajınız başarıyla gönderildi!');
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
                    <h2 className="contact-title">İletişim</h2>
                    <div className="contact-divider"></div>
                    <p className="contact-subtitle">
                        Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçin
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3 className="info-title">İletişim Bilgileri</h3>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon-container phone">
                                        <Phone className="info-icon" />
                                    </div>
                                    <div className="info-details">
                                        <h4 className="info-label">Telefon</h4>
                                        <p className="info-value">+90 (212) 555 0123</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-container email">
                                        <Mail className="info-icon" />
                                    </div>
                                    <div className="info-details">
                                        <h4 className="info-label">E-posta</h4>
                                        <p className="info-value">info@shopmax.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-container address">
                                        <MapPin className="info-icon" />
                                    </div>
                                    <div className="info-details">
                                        <h4 className="info-label">Adres</h4>
                                        <p className="info-value">
                                            Maslak Mahallesi, Büyükdere Caddesi<br />
                                            No: 123, Şişli/İstanbul
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hours-card">
                            <h3 className="hours-title">Çalışma Saatleri</h3>
                            <div className="hours-list">
                                <div className="hours-item">
                                    <span>Pazartesi - Cuma</span>
                                    <span>09:00 - 18:00</span>
                                </div>
                                <div className="hours-item">
                                    <span>Cumartesi</span>
                                    <span>10:00 - 16:00</span>
                                </div>
                                <div className="hours-item">
                                    <span>Pazar</span>
                                    <span>Kapalı</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3 className="form-title">Bize Yazın</h3>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label className="form-label">
                                    Adınız Soyadınız *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Adınızı ve soyadınızı girin"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    E-posta Adresi *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="E-posta adresinizi girin"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Konu
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Mesajınızın konusunu girin"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Mesaj *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="form-textarea"
                                    placeholder="Mesajınızı buraya yazın"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Mesaj Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;