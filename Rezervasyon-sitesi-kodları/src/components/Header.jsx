"use client"
import { useState, useEffect } from "react"
import "./Header.css"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <h2>
            <span className="reserve">Reserve</span>
            <span className="now">Now</span>
          </h2>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">Make Reservation</button>
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}