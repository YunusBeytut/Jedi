"use client"

// src/components/Navbar/Navbar.jsx
import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { getCategories } from "../../data/posts"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const categories = getCategories()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} ${styles.navbarContent}`}>
        <Link to="/" className={styles.logo}>
          Your Blog Name
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Anasayfa
            </Link>
          </li>
          <li className={styles.dropdown}>
            <span className={styles.dropbtn}>Kategoriler</span>
            <div className={styles.dropdownContent}>
              {categories.map((category) => (
                <Link key={category} to={`/category/${category}`} onClick={() => setIsOpen(false)}>
                  {category}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              Hakkında
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
