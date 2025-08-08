import React from 'react';
import { Shield, Check, Heart } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">Who Are We?</h2>
                    <div className="about-divider"></div>
                    <p className="about-subtitle">
                        ShopMax has been a pioneer in the e-commerce industry since 2015, delivering quality service with a focus on customer satisfaction.
                    </p>
                </div>

                <div className="about-features">
                    <div className="feature-card">
                        <div className="feature-icon-container blue">
                            <Shield className="feature-icon" />
                        </div>
                        <h3 className="feature-title">Reliable</h3>
                        <p className="feature-description">
                            Your shopping is secure with SSL certification and reliable payment systems.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container green">
                            <Check className="feature-icon" />
                        </div>
                        <h3 className="feature-title">Quality</h3>
                        <p className="feature-description">
                            Only original and high-quality products, carefully selected from trusted suppliers.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container purple">
                            <Heart className="feature-icon" />
                        </div>
                        <h3 className="feature-title">Customer-Focused</h3>
                        <p className="feature-description">
                            Every customer is valuable to us, and we offer 24/7 support service.
                        </p>
                    </div>
                </div>

                <div className="about-vision">
                    <div className="vision-content">
                        <div className="vision-text">
                            <h3 className="vision-title">Our Vision</h3>
                            <p className="vision-description">
                                To be Turkey's most reliable and user-friendly e-commerce platform.
                                We aim to provide the best shopping experience and make customers' lives easier.
                            </p>
                            <p className="vision-description">
                                By continuously developing innovative solutions, we strive to set the standards in the e-commerce industry.
                            </p>
                        </div>
                        <div className="vision-stats">
                            <div className="stat-card blue">
                                <div className="stat-number">8+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-card green">
                                <div className="stat-number">50K+</div>
                                <div className="stat-label">Happy Customers</div>
                            </div>
                            <div className="stat-card purple">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Products</div>
                            </div>
                            <div className="stat-card orange">
                                <div className="stat-number">99.9%</div>
                                <div className="stat-label">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;