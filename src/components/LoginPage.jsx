import React, { useState } from 'react';
import "../styles/pages/LoginPage.css";

// Tek kullanıcı hesabı
const validUser = {
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User"
};

function LoginPage({ onLogin, onNavigate }) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (form.email === validUser.email && form.password === validUser.password) {
            setSuccess("Giriş başarılı! Yönlendiriliyorsunuz...");
            setTimeout(() => {
                onLogin(validUser);
                onNavigate("home");
            }, 1500);
        } else {
            setError("E-posta veya şifre hatalı!");
        }
    };

    return (
        <div className="login-page">
            {/* Decorative SVG background */}
            <svg className="login-wave-bg" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#loginGradient1)" fillOpacity="0.19"
                    d="M0,80L80,112C160,144,320,208,480,213.3C640,219,800,165,960,133.3C1120,101,1280,91,1360,85.3L1440,80L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
                <defs>
                    <linearGradient id="loginGradient1" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#b09cf7" />
                        <stop offset="1" stopColor="#7e5fff" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2 className="login-title">Giriş Yap</h2>
                        <p className="login-subtitle">
                            Professional Blog'a hoş geldiniz
                        </p>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">E-posta</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="ornek@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Şifre</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                            />
                        </div>

                        {error && <div className="login-error">{error}</div>}
                        {success && <div className="login-success">{success}</div>}

                        <button type="submit" className="login-btn">
                            Giriş Yap
                        </button>
                    </form>

                    <div className="demo-account">
                        <h4>Demo Hesap Bilgileri:</h4>
                        <div className="demo-details">
                            <div className="demo-item">
                                <strong>E-posta:</strong> admin@example.com
                            </div>
                            <div className="demo-item">
                                <strong>Şifre:</strong> admin123
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="back-btn"
                        onClick={() => onNavigate("home")}
                    >
                        ← Ana Sayfaya Dön
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;