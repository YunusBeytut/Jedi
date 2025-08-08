import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Heart, Trash2 } from 'lucide-react';
import '../styles/favorites.css';

const Favorites = () => {
  const { favorites, toggleFavorite, addToCart } = useContext(ShopContext);

  return (
    <section className="favorites-section">
      <div className="favorites-card">
        <div className="favorites-header">
          <Heart className="favorites-icon" />
          <h2>My Favorites</h2>
        </div>
        {favorites.length === 0 ? (
          <div className="favorites-empty">You haven't added any favorite products yet.</div>
        ) : (
          <ul className="favorites-list">
            {favorites.map(product => (
              <li key={product.id} className="favorites-item">
                <img src={product.image} alt={product.name} className="favorites-img" />
                <div className="favorites-details">
                  <h3>{product.name}</h3>
                  <div className="favorites-actions">
                    <button className="favorites-to-cart" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                    <button className="favorites-remove" onClick={() => toggleFavorite(product)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Favorites;