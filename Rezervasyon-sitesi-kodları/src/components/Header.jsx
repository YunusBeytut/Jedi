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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }

  const handleReservation = () => {
    alert("Reservation system coming soon!");
  }

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
          <button onClick={() => scrollToSection('home')} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About Us
          </button>
          <button onClick={() => scrollToSection('services')} className="nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <button className="btn-primary" onClick={handleReservation}>Make Reservation</button>
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