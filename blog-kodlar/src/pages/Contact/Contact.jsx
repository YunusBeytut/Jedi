"use client"

// src/pages/Contact/Contact.jsx
import { useState } from "react"
import SEO from "../../components/SEO/SEO"
import styles from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Gönderildi:", formData)
    alert("Mesajınız başarıyla gönderildi! (Konsolu kontrol edin)")
    setFormData({ name: "", email: "", message: "" }) // Formu sıfırla
  }

  return (
    <div className={styles.contactPage}>
      <SEO title="İletişim" description="Bizimle iletişime geçmek için formu doldurun." />
      <div className="container">
        <h1 className={styles.pageTitle}>İletişim</h1>
        <div className={styles.contactContent}>
          <p className={styles.introText}>
            Her türlü soru, öneri veya işbirliği talepleriniz için aşağıdaki formu doldurarak bizimle iletişime
            geçebilirsiniz. En kısa sürede size geri dönüş yapacağız.
          </p>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Adınız:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-posta Adresiniz:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mesajınız:</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Mesajı Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
