import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import '../styles/support.css';

const Support = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqData = [
        {
            id: 1,
            question: 'How can I track my order?',
            answer: 'Log in to your account and go to the "My Orders" section. You can view your order status and tracking number there.'
        },
        {
            id: 2,
            question: 'How do I make a return?',
            answer: 'You can return the product within 14 days from the date of delivery. The packaging must be unopened. Please contact our customer service for the return process.'
        },
        {
            id: 3,
            question: 'Which payment methods do you accept?',
            answer: 'We accept credit cards, debit cards, bank transfer/EFT, and cash on delivery. All payment transactions are protected by SSL certification.'
        },
        {
            id: 4,
            question: 'How much is the shipping fee?',
            answer: 'Shipping is free for purchases of 150 TL or more. For orders below 150 TL, the shipping fee is 29.90 TL.'
        },
        {
            id: 5,
            question: 'When will my order arrive?',
            answer: 'Products in stock are shipped the same day. Delivery time varies between 1-3 business days depending on your location.'
        }
    ];

    const filteredFaqs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    return (
        <div className="support">
            <div className="support-container">
                <div className="support-header">
                    <h2 className="support-title">Support Center</h2>
                    <div className="support-divider"></div>
                    <p className="support-subtitle">
                        We are here to help you. Find answers to frequently asked questions below or contact us directly.
                    </p>
                </div>

                <div className="support-search">
                    <div className="search-container">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Enter a keyword about your question..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="support-content">
                    <div className="faq-section">
                        <h3 className="faq-title">Frequently Asked Questions</h3>

                        <div className="faq-list">
                            {filteredFaqs.map((faq) => (
                                <div key={faq.id} className="faq-item">
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="faq-question"
                                    >
                                        <span>{faq.question}</span>
                                        {expandedFaq === faq.id ? (
                                            <ChevronUp className="faq-icon" />
                                        ) : (
                                            <ChevronDown className="faq-icon" />
                                        )}
                                    </button>

                                    {expandedFaq === faq.id && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-options">
                        <h3 className="contact-title">Contact Us</h3>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-icon-container chat">
                                    <MessageCircle className="contact-icon" />
                                </div>
                                <h4 className="contact-method">Live Support</h4>
                                <p className="contact-description">
                                    Get instant help from our 24/7 live support line.
                                </p>
                                <button className="contact-button">
                                    Start Chat
                                </button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon-container phone">
                                    <Phone className="contact-icon" />
                                </div>
                                <h4 className="contact-method">Phone Support</h4>
                                <p className="contact-description">
                                    Call our customer service for assistance.
                                </p>
                                <button className="contact-button">
                                    +90 (212) 555 0123
                                </button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon-container email">
                                    <Mail className="contact-icon" />
                                </div>
                                <h4 className="contact-method">Email Support</h4>
                                <p className="contact-description">
                                    Send us your questions via email. We will respond within 24 hours.
                                </p>
                                <button className="contact-button">
                                    Send Email
                                </button>
                            </div>
                        </div>

                        <div className="support-hours">
                            <div className="hours-header">
                                <Clock className="hours-icon" />
                                <h4 className="hours-title">Support Hours</h4>
                            </div>
                            <div className="hours-content">
                                <div className="hours-item">
                                    <span>Live Support</span>
                                    <span>24/7 Active</span>
                                </div>
                                <div className="hours-item">
                                    <span>Phone Support</span>
                                    <span>09:00 - 18:00 (Weekdays)</span>
                                </div>
                                <div className="hours-item">
                                    <span>Email Support</span>
                                    <span>Response within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;