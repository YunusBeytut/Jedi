import React from 'react';
import { Shield, Check, Heart } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">Biz Kimiz?</h2>
                    <div className="about-divider"></div>
                    <p className="about-subtitle">
                        2015'ten beri e-ticaret sektöründe öncü olan ShopMax, müşteri memnuniyetini
                        ön planda tutarak kaliteli hizmet sunmaya devam ediyor.
                    </p>
                </div>

                <div className="about-features">
                    <div className="feature-card">
                        <div className="feature-icon-container blue">
                            <Shield className="feature-icon" />
                        </div>
                        <h3 className="feature-title">Güvenilir</h3>
                        <p className="feature-description">
                            SSL sertifikası ve güvenli ödeme sistemleri ile alışverişinizi koruyoruz.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container green">
                            <Check className="feature-icon" />
                        </div>
                        <h3 className="feature-title">Kaliteli</h3>
                        <p className="feature-description">
                            Sadece orijinal ve kaliteli ürünler, titizlikle seçilmiş tedarikçilerden.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container purple">
                            <Heart className="feature-icon" />
                        </div>
                        <h3 className="feature-title">Müşteri Odaklı</h3>
                        <p className="feature-description">
                            Her müşterimiz bizim için değerli, 7/24 destek hizmeti sunuyoruz.
                        </p>
                    </div>
                </div>

                <div className="about-vision">
                    <div className="vision-content">
                        <div className="vision-text">
                            <h3 className="vision-title">Vizyonumuz</h3>
                            <p className="vision-description">
                                Türkiye'nin en güvenilir ve kullanıcı dostu e-ticaret platformu olmak.
                                Müşterilerimize en iyi alışveriş deneyimini sunarak, onların hayatlarını
                                kolaylaştırmayı hedefliyoruz.
                            </p>
                            <p className="vision-description">
                                Sürekli yenilikçi çözümler geliştirerek, e-ticaret sektöründe standartları
                                belirlemeye devam ediyoruz.
                            </p>
                        </div>
                        <div className="vision-stats">
                            <div className="stat-card blue">
                                <div className="stat-number">8+</div>
                                <div className="stat-label">Yıl Deneyim</div>
                            </div>
                            <div className="stat-card green">
                                <div className="stat-number">50K+</div>
                                <div className="stat-label">Mutlu Müşteri</div>
                            </div>
                            <div className="stat-card purple">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Ürün</div>
                            </div>
                            <div className="stat-card orange">
                                <div className="stat-number">99.9%</div>
                                <div className="stat-label">Memnuniyet</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;