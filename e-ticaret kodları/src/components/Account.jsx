import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { User, Edit2, Mail, MapPin, Phone } from 'lucide-react';
import '../styles/account.css';

const dummyOrders = [
    {
        id: 'ORD-20240023',
        date: '2024-07-28',
        status: 'Delivered',
        total: 2999,
        items: [
            { name: 'iPhone 15 Pro', qty: 1 },
            { name: 'Nike Air Max', qty: 2 }
        ]
    },
    {
        id: 'ORD-20240011',
        date: '2024-06-12',
        status: 'Shipping',
        total: 899,
        items: [
            { name: 'Home Decoration Set', qty: 1 }
        ]
    }
];

const Account = () => {
    const { user, setUser } = useContext(ShopContext);
    const [editMode, setEditMode] = useState(false);
    const [editUser, setEditUser] = useState(user);

    // Profile edit handlers
    const handleEditChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };
    const handleEditSave = (e) => {
        e.preventDefault();
        setUser(editUser);
        setEditMode(false);
    };

    return (
        <section className="account-section">
            <div className="account-card">
                <div className="account-avatar-box">
                    <User className="account-avatar" />
                </div>
                <div className="account-title-row">
                    <h2>My Account</h2>
                    <button className="account-edit-btn" title="Edit Profile" onClick={() => setEditMode(true)}>
                        <Edit2 size={20} /> Edit
                    </button>
                </div>
                {!editMode ? (
                    <>
                        <div className="account-info">
                            <div>
                                <Mail className="icon" />
                                <span>{user.email}</span>
                            </div>
                            <div>
                                <Phone className="icon" />
                                <span>{user.phone}</span>
                            </div>
                            <div>
                                <MapPin className="icon" />
                                <span>{user.address}</span>
                            </div>
                        </div>
                        <div className="account-orders">
                            <h3>Order History</h3>
                            {dummyOrders.map(order => (
                                <div key={order.id} className="order-card">
                                    <div className="order-row">
                                        <span className="order-id">{order.id}</span>
                                        <span className={`order-status ${order.status === 'Delivered' ? 'delivered' : 'shipping'}`}>{order.status}</span>
                                    </div>
                                    <div className="order-row">
                                        <span>{order.date}</span>
                                        <span>{order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}</span>
                                        <span className="order-total">₺{order.total.toLocaleString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <form className="account-edit-form" onSubmit={handleEditSave}>
                        <label>
                            Full Name
                            <input type="text" name="name" value={editUser.name} onChange={handleEditChange} required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" value={editUser.email} onChange={handleEditChange} required />
                        </label>
                        <label>
                            Phone
                            <input type="text" name="phone" value={editUser.phone} onChange={handleEditChange} required />
                        </label>
                        <label>
                            Address
                            <input type="text" name="address" value={editUser.address} onChange={handleEditChange} required />
                        </label>
                        <div className="account-edit-actions">
                            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
                            <button type="submit" className="save">Save</button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Account;