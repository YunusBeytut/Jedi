import React from "react";
import "../styles/components/Header.css";

function Header({ onNavigate, user, onLogout }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-logo-title" onClick={() => onNavigate("home")}>
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Professional Blog</span>
      </div>
      <ul className="navbar-links">
        <li onClick={() => onNavigate("home")}>Home</li>
        <li onClick={() => onNavigate("about")}>About</li>
        <li onClick={() => onNavigate("contact")}>Contact</li>
        <li onClick={() => onNavigate("services")}>Services</li>
        <li onClick={() => onNavigate("team")}>Our Team</li>
      </ul>
      <div className="navbar-actions">
        {user ? (
          // Kullanıcı giriş yapmışsa
          <>
            <span className="user-welcome">Hoş geldin, {user.name}!</span>
            <button className="navbar-btn-logout" onClick={onLogout}>
              Çıkış Yap
            </button>
          </>
        ) : (
          // Kullanıcı giriş yapmamışsa
          <>
            
            <button className="navbar-btn navbar-btn-signup" onClick={() => onNavigate("login")}>
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;