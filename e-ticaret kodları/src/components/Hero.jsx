import React from 'react';
import { ArrowRight, Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';
import '../styles/hero.css';

const featureList = [
    {
        icon: <Shield className="feature-icon green" />,
        title: "Secure Payment",
        desc: "Advanced SSL infrastructure, 3D Secure and GDPR-compliant data protection."
    },
    {
        icon: <Truck className="feature-icon blue" />,
        title: "Fast Delivery",
        desc: "Same day shipping, 2-hour express delivery option within Istanbul."
    },
    {
        icon: <RotateCcw className="feature-icon purple" />,
        title: "Easy Returns",
        desc: "14-day hassle-free returns with free shipping and quick resolution."
    }
];

const Hero = ({ setActiveSection }) => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-gradient"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-welcome fade-in">
                            <span className="welcome-badge"><Sparkles className="sparkle-icon" /> Welcome to ShopMax!</span>
                        </div>
                        <h1 className="hero-title">
                            <span className="hero-title-highlight">The New Era of Shopping</span>
                            <span className="hero-anim-emoji">🛒</span>
                        </h1>
                        <p className="hero-description">
                            <span className="desc-main">Modern, fast and secure shopping experience.</span>
                            <span className="desc-highlight">The latest products</span>
                            <span className="desc-normal">, </span>
                            <span className="desc-highlight">the best prices</span>
                            <span className="desc-normal"> and </span>
                            <span className="desc-accent">professional customer support</span>
                            <span className="desc-normal"> — discover it now!</span>
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="hero-primary-button pop-anim"
                                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                            >
                                Start Shopping
                                <ArrowRight className="button-icon" />
                            </button>
                            <button
                                className="hero-secondary-button"
                                onClick={() => setActiveSection && setActiveSection('products')}
                            >
                                View Products
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item bounce-anim">
                                <div className="stat-number">50K+</div>
                                <div className="stat-label">Happy Customers</div>
                            </div>
                            <div className="stat-item bounce-anim">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Product Types</div>
                            </div>
                            <div className="stat-item bounce-anim">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Live Support</div>
                            </div>
                        </div>
                        <div className="hero-social-proof fade-in">
                            <span className="social-stars">
                                <Sparkles className="star-icon" />
                                <Sparkles className="star-icon" />
                                <Sparkles className="star-icon" />
                                <Sparkles className="star-icon" />
                                <Sparkles className="star-icon" />
                            </span>
                            <span className="social-text">4.9/5 - Customer Satisfaction</span>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-card-list slide-in">
                            {featureList.map((f, i) => (
                                <div className="feature-card glassy" key={i}>
                                    <div className="feature-icon-box">{f.icon}</div>
                                    <div className="feature-title">{f.title}</div>
                                    <div className="feature-desc">{f.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div className="hero-promo pulse-anim">
                            <Sparkles className="promo-icon" />
                            <span className="promo-text"><b>Summer Special:</b> Extra 10% discount on all categories!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bottom-visual fade-in">
                <div className="gradient-corner"></div>
                <div className="gradient-corner2"></div>
            </div>
        </section>
    );
};

export default Hero;