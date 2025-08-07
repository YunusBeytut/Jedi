import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import '../styles/products.css';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'electronics', name: 'Elektronik' },
        { id: 'fashion', name: 'Moda' },
        { id: 'home', name: 'Ev & Yaşam' },
        { id: 'sports', name: 'Spor' }
    ];

    const products = [
        {
            id: 1,
            name: 'iPhone 15 Pro',
            category: 'electronics',
            price: '45.999',
            originalPrice: '49.999',
            rating: 4.8,
            image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=iPhone+15',
            badge: 'Yeni'
        },
        {
            id: 2,
            name: 'Samsung Galaxy Watch',
            category: 'electronics',
            price: '2.999',
            originalPrice: '3.499',
            rating: 4.6,
            image: 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=Galaxy+Watch',
            badge: 'İndirim'
        },
        {
            id: 3,
            name: 'Nike Air Max',
            category: 'fashion',
            price: '899',
            originalPrice: '1.199',
            rating: 4.7,
            image: 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Nike+Air+Max',
            badge: 'Popüler'
        },
        {
            id: 4,
            name: 'MacBook Air M2',
            category: 'electronics',
            price: '12.999',
            originalPrice: '14.999',
            rating: 4.9,
            image: 'https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=MacBook+Air',
            badge: 'Çok Satan'
        },
        {
            id: 5,
            name: 'Ev Dekorasyon Seti',
            category: 'home',
            price: '299',
            originalPrice: '399',
            rating: 4.4,
            image: 'https://via.placeholder.com/300x300/EF4444/FFFFFF?text=Dekor+Set',
            badge: 'İndirim'
        },
        {
            id: 6,
            name: 'Spor Ayakkabısı',
            category: 'sports',
            price: '599',
            originalPrice: '799',
            rating: 4.5,
            image: 'https://via.placeholder.com/300x300/06B6D4/FFFFFF?text=Spor+Ayakkabı',
            badge: 'Yeni'
        }
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="products">
            <div className="products-container">
                <div className="products-header">
                    <h2 className="products-title">Ürünlerimiz</h2>
                    <div className="products-divider"></div>
                    <p className="products-subtitle">
                        En kaliteli ürünleri en uygun fiyatlarla sizlere sunuyoruz
                    </p>
                </div>

                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <div className="product-badge">
                                    <span className="badge-text">{product.badge}</span>
                                </div>
                                <div className="product-wishlist">
                                    <Heart className="wishlist-icon" />
                                </div>
                            </div>

                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>

                                <div className="product-rating">
                                    <div className="rating-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`star ${i < Math.floor(product.rating) ? 'filled' : 'empty'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="rating-text">({product.rating})</span>
                                </div>

                                <div className="product-pricing">
                                    <div className="price-container">
                                        <span className="current-price">₺{product.price}</span>
                                        <span className="original-price">₺{product.originalPrice}</span>
                                    </div>
                                    <button className="add-to-cart-button">
                                        Sepete Ekle
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="products-footer">
                    <button className="view-all-button">
                        Tüm Ürünleri Görüntüle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;