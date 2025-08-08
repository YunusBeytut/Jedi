import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import '../styles/cart.css';

const Cart = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(ShopContext);

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <section className="cart-section">
            <div className="cart-card">
                <div className="cart-header">
                    <ShoppingCart className="cart-icon" />
                    <h2>My Cart</h2>
                </div>
                {cart.length === 0 ? (
                    <div className="cart-empty">Your cart is empty. Start shopping!</div>
                ) : (
                    <>
                        <ul className="cart-list">
                            {cart.map(product => (
                                <li key={product.id} className="cart-item">
                                    <img src={product.image} alt={product.name} className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <h3>{product.name}</h3>
                                        <div className="cart-item-quantity">
                                            <button onClick={() => decrementQuantity(product.id)}>
                                                <Minus size={18} />
                                            </button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => incrementQuantity(product.id)}>
                                                <Plus size={18} />
                                            </button>
                                        </div>
                                        <div className="cart-item-price">₺{product.price * product.quantity}</div>
                                    </div>
                                    <button className="cart-remove" onClick={() => removeFromCart(product.id)}>
                                        <Trash2 size={20} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-total">
                            <span>Total:</span>
                            <span className="cart-total-price">₺{totalPrice.toLocaleString()}</span>
                        </div>
                        <button className="cart-checkout">Checkout</button>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;