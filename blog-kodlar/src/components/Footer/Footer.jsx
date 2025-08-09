import styles from "./Footer.module.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        <div className={styles.footerSection}>
          <h3>Blog Adı</h3>
          <p>En güncel haberler ve ilgi çekici yazılar için doğru adres.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Hızlı Linkler</h3>
          <ul>
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <a href="/about">Hakkında</a>
            </li>
            <li>
              <a href="/contact">İletişim</a>
            </li>
            <li>
              <a href="/category/Teknoloji">Teknoloji</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Bizi Takip Edin</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Blog Adı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
