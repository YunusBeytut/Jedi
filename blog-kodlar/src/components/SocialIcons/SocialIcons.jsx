import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"
import styles from "./SocialIcons.module.css"

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  )
}

export default SocialIcons
