import React from 'react';
import { ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-gradient"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Alışverişin
                            <span className="hero-title-highlight">
                                Yeni Adresi
                            </span>
                        </h1>

                        <p className="hero-description">
                            En kaliteli ürünler, en uygun fiyatlar ve güvenli alışveriş deneyimi için doğru yerdesiniz.
                            Binlerce memnun müşterimizin tercih ettiği platform.
                        </p>

                        <div className="hero-buttons">
                            <button className="hero-primary-button">
                                Alışverişe Başla
                                <ArrowRight className="button-icon" />
                            </button>
                            <button className="hero-secondary-button">
                                Ürünleri İncele
                            </button>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">50K+</div>
                                <div className="stat-label">Mutlu Müşteri</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Ürün Çeşidi</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Destek</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-features">
                        <div className="feature-card">
                            <div className="feature-list">
                                <div className="feature-item">
                                    <Shield className="feature-icon green" />
                                    <span className="feature-text">Güvenli Ödeme</span>
                                </div>
                                <div className="feature-item">
                                    <Truck className="feature-icon blue" />
                                    <span className="feature-text">Hızlı Teslimat</span>
                                </div>
                                <div className="feature-item">
                                    <RotateCcw className="feature-icon purple" />
                                    <span className="feature-text">Kolay İade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;