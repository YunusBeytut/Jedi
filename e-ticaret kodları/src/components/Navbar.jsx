import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, ShoppingCart, Heart, User, Search } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import '../styles/navbar.css';

const Navbar = ({ activeSection, setActiveSection, isMobile, setIsMobile }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart, favorites } = useContext(ShopContext);

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
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'products', label: 'Products' },
        { id: 'contact', label: 'Contact' },
        { id: 'support', label: 'Support' }
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
                                <User className="nav-icon" onClick={() => setActiveSection('account')} />
                                <div className="icon-badge" onClick={() => setActiveSection('favorites')}>
                                    <Heart className="nav-icon" />
                                    {favorites.length > 0 && <span className="badge-count">{favorites.length}</span>}
                                </div>
                                <div className="cart-container" onClick={() => setActiveSection('cart')}>
                                    <ShoppingCart className="nav-icon" />
                                    {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
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
                            <User className="mobile-icon" onClick={() => setActiveSection('account')} />
                            <div className="icon-badge" onClick={() => setActiveSection('favorites')}>
                                <Heart className="mobile-icon" />
                                {favorites.length > 0 && <span className="badge-count">{favorites.length}</span>}
                            </div>
                            <div className="mobile-cart" onClick={() => setActiveSection('cart')}>
                                <ShoppingCart className="mobile-icon" />
                                {cart.length > 0 && <span className="mobile-cart-badge">{cart.length}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;