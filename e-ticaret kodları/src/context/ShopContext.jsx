import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState({
        name: 'Yunus Beytut',
        email: 'yunus@example.com',
        address: 'İstanbul, Türkiye',
        phone: '+90 555 555 55 55'
    });

    const addToCart = (product) => {
        setCart((prev) => {
            // Aynı ürün sepette varsa miktarı artır
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

    const incrementQuantity = (id) => setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));

    const decrementQuantity = (id) => setCart(cart.map(item =>
        item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
    ));

    const toggleFavorite = (product) => {
        setFavorites((prev) => {
            if (prev.find((item) => item.id === product.id)) {
                return prev.filter((item) => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    return (
        <ShopContext.Provider value={{
            cart, setCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity,
            favorites, toggleFavorite,
            user, setUser
        }}>
            {children}
        </ShopContext.Provider>
    );
};