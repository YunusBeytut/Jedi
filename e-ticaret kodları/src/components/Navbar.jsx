import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Heart, User, Search } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = ({ activeSection, setActiveSection, isMobile, setIsMobile }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setIsMobile]);

    const navItems = [
        { id: 'home', label: 'Ana Sayfa' },
        { id: 'about', label: 'Biz Kimiz' },
        { id: 'products', label: 'Ürünlerimiz' },
        { id: 'contact', label: 'İletişim' },
        { id: 'support', label: 'Destek' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <div className="brand-text">ShopMax</div>
                    </div>

                    {!isMobile ? (
                        <>
                            <div className="navbar-menu">
                                <div className="navbar-links">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="navbar-icons">
                                <Search className="nav-icon" />
                                <User className="nav-icon" />
                                <Heart className="nav-icon" />
                                <div className="cart-container">
                                    <ShoppingCart className="nav-icon" />
                                    <span className="cart-badge">3</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="mobile-menu-button">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="menu-toggle"
                            >
                                {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {isMobile && isMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="mobile-icons">
                            <Search className="mobile-icon" />
                            <User className="mobile-icon" />
                            <Heart className="mobile-icon" />
                            <div className="mobile-cart">
                                <ShoppingCart className="mobile-icon" />
                                <span className="mobile-cart-badge">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;