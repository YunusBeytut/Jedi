import React, { useState, useContext } from 'react';
import { Star, Heart, Filter, SortAsc, SortDesc } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import '../styles/products.css';

const categories = [
    { id: 'all', name: 'All' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Living' },
    { id: 'sports', name: 'Sports' }
];

const productsData = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45999,
        originalPrice: 49999,
        rating: 4.8,
        image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=iPhone+15',
        badge: 'New'
    },
    {
        id: 2,
        name: 'Samsung Galaxy Watch',
        category: 'electronics',
        price: 2999,
        originalPrice: 3499,
        rating: 4.6,
        image: 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=Galaxy+Watch',
        badge: 'Discount'
    },
    {
        id: 3,
        name: 'Nike Air Max',
        category: 'fashion',
        price: 899,
        originalPrice: 1199,
        rating: 4.7,
        image: 'https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=Nike+Air+Max',
        badge: 'Popular'
    },
    {
        id: 4,
        name: 'MacBook Air M2',
        category: 'electronics',
        price: 12999,
        originalPrice: 14999,
        rating: 4.9,
        image: 'https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=MacBook+Air',
        badge: 'Best Seller'
    },
    {
        id: 5,
        name: 'Home Decoration Set',
        category: 'home',
        price: 299,
        originalPrice: 399,
        rating: 4.4,
        image: 'https://via.placeholder.com/300x300/EF4444/FFFFFF?text=Decor+Set',
        badge: 'Discount'
    },
    {
        id: 6,
        name: 'Sports Shoes',
        category: 'sports',
        price: 599,
        originalPrice: 799,
        rating: 4.5,
        image: 'https://via.placeholder.com/300x300/06B6D4/FFFFFF?text=Sports+Shoes',
        badge: 'New'
    }
];

const sortOptions = [
    { id: 'default', label: 'Default' },
    { id: 'price-asc', label: 'Price (Low to High)' },
    { id: 'price-desc', label: 'Price (High to Low)' },
    { id: 'rating-desc', label: 'Rating (High to Low)' },
    { id: 'rating-asc', label: 'Rating (Low to High)' }
];

const Products = () => {
    const { addToCart, favorites, toggleFavorite } = useContext(ShopContext);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isAllProducts, setIsAllProducts] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default');

    // Filter and search
    let filteredProducts = productsData.filter(product => {
        if (!isAllProducts && selectedCategory !== 'all' && product.category !== selectedCategory) return false;
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    // Sort
    if (sortBy === 'price-asc') {
        filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating-desc') {
        filteredProducts = filteredProducts.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'rating-asc') {
        filteredProducts = filteredProducts.slice().sort((a, b) => a.rating - b.rating);
    }

    // "View All Products" function
    const handleViewAllProducts = () => {
        setSelectedCategory('all');
        setIsAllProducts(true);
    };

    // Reset Filters
    const handleResetFilters = () => {
        setSelectedCategory('all');
        setSearchTerm('');
        setSortBy('default');
        setIsAllProducts(false);
    };

    return (
        <div className="products">
            <div className="products-container">
                <div className="products-header">
                    <h2 className="products-title">Our Products</h2>
                    <div className="products-divider"></div>
                    <p className="products-subtitle">
                        We offer the highest quality products at the best prices.
                    </p>
                </div>

                <div className="products-toolbar">
                    <div className="category-filters">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setIsAllProducts(false);
                                }}
                                className={`category-button ${selectedCategory === category.id && !isAllProducts ? 'active' : ''}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="products-search-sort">
                        <div className="search-box">
                            <Filter size={20} className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search by product name..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="sort-box">
                            <select
                                value={sortBy}
                                onChange={e => setSortBy(e.target.value)}
                                className="sort-select"
                            >
                                {sortOptions.map(opt => (
                                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                                ))}
                            </select>
                            {sortBy.includes('asc') ? <SortAsc size={22} /> : <SortDesc size={22} />}
                        </div>
                        <button className="reset-filters-btn" onClick={handleResetFilters}>Reset Filters</button>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                    <div className="product-badge">
                                        <span className="badge-text">{product.badge}</span>
                                    </div>
                                    <div
                                        className={`product-wishlist ${favorites.some(f => f.id === product.id) ? 'active' : ''}`}
                                        onClick={() => toggleFavorite(product)}
                                    >
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
                                                    className={`star ${i < Math.floor(product.rating) ? 'filled' : 'empty'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="rating-text">({product.rating})</span>
                                    </div>
                                    <div className="product-pricing">
                                        <div className="price-container">
                                            <span className="current-price">₺{product.price.toLocaleString()}</span>
                                            <span className="original-price">₺{product.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="products-empty">No products found matching your criteria.</div>
                    )}
                </div>

                <div className="products-footer">
                    <button
                        className="view-all-button"
                        onClick={handleViewAllProducts}
                        disabled={isAllProducts}
                        style={isAllProducts ? { opacity: 0.65, pointerEvents: 'none' } : {}}
                    >
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;