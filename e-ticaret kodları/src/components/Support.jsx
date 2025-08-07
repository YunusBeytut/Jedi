import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import '../styles/support.css';

const Support = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqData = [
        {
            id: 1,
            question: 'Siparişimi nasıl takip edebilirim?',
            answer: 'Siparişinizi takip etmek için hesabınıza giriş yapın ve "Siparişlerim" bölümüne gidin. Buradan sipariş durumunuzu ve kargo takip numaranızı görebilirsiniz.'
        },
        {
            id: 2,
            question: 'İade işlemi nasıl yapılır?',
            answer: 'Ürünü teslim aldığınız tarihten itibaren 14 gün içinde iade edebilirsiniz. İade için ürünün ambalajının açılmamış olması gerekir. İade işlemi için müşteri hizmetlerimizle iletişime geçin.'
        },
        {
            id: 3,
            question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
            answer: 'Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kabul ediyoruz. Tüm ödeme işlemleri SSL sertifikası ile güvence altındadır.'
        },
        {
            id: 4,
            question: 'Kargo ücreti ne kadar?',
            answer: '150 TL ve üzeri alışverişlerde kargo ücretsizdir. 150 TL altındaki siparişlerde kargo ücreti 29.90 TL\'dir.'
        },
        {
            id: 5,
            question: 'Siparişim ne zaman gelir?',
            answer: 'Stokta bulunan ürünler aynı gün kargoya verilir. Teslimat süresi bulunduğunuz ile göre 1-3 iş günü arasında değişmektedir.'
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
                    <h2 className="support-title">Destek Merkezi</h2>
                    <div className="support-divider"></div>
                    <p className="support-subtitle">
                        Size yardımcı olmak için buradayız. Aşağıda sıkça sorulan soruları bulabilir
                        veya bizimle doğrudan iletişime geçebilirsiniz.
                    </p>
                </div>

                <div className="support-search">
                    <div className="search-container">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Sorunuzla ilgili anahtar kelime girin..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="support-content">
                    <div className="faq-section">
                        <h3 className="faq-title">Sıkça Sorulan Sorular</h3>

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
                        <h3 className="contact-title">Bizimle İletişime Geçin</h3>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-icon-container chat">
                                    <MessageCircle className="contact-icon" />
                                </div>
                                <h4 className="contact-method">Canlı Destek</h4>
                                <p className="contact-description">
                                    7/24 canlı destek hattımızdan anında yardım alın
                                </p>
                                <button className="contact-button">
                                    Sohbeti Başlat
                                </button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon-container phone">
                                    <Phone className="contact-icon" />
                                </div>
                                <h4 className="contact-method">Telefon Desteği</h4>
                                <p className="contact-description">
                                    Müşteri hizmetlerimizi arayarak destek alın
                                </p>
                                <button className="contact-button">
                                    +90 (212) 555 0123
                                </button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon-container email">
                                    <Mail className="contact-icon" />
                                </div>
                                <h4 className="contact-method">E-posta Desteği</h4>
                                <p className="contact-description">
                                    E-posta ile sorularınızı iletin, 24 saat içinde yanıtlayalım
                                </p>
                                <button className="contact-button">
                                    E-posta Gönder
                                </button>
                            </div>
                        </div>

                        <div className="support-hours">
                            <div className="hours-header">
                                <Clock className="hours-icon" />
                                <h4 className="hours-title">Destek Saatleri</h4>
                            </div>
                            <div className="hours-content">
                                <div className="hours-item">
                                    <span>Canlı Destek</span>
                                    <span>7/24 Aktif</span>
                                </div>
                                <div className="hours-item">
                                    <span>Telefon Desteği</span>
                                    <span>09:00 - 18:00 (Hafta içi)</span>
                                </div>
                                <div className="hours-item">
                                    <span>E-posta Desteği</span>
                                    <span>24 saat içinde yanıt</span>
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