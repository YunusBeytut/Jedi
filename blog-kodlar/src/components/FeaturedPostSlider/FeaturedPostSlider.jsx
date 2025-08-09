"use client"

// src/components/FeaturedPostSlider/FeaturedPostSlider.jsx
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./FeaturedPostSlider.module.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const FeaturedPostSlider = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [posts.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  if (!posts || posts.length === 0) {
    return null
  }

  const currentPost = posts[currentIndex]

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <img src={currentPost.image || "/placeholder.svg"} alt={currentPost.title} className={styles.sliderImage} />
        <div className={styles.sliderContent}>
          <h2 className={styles.sliderTitle}>
            <Link to={`/post/${currentPost.slug}`}>{currentPost.title}</Link>
          </h2>
          <p className={styles.sliderDescription}>{currentPost.shortDescription}</p>
          <Link to={`/post/${currentPost.slug}`} className={styles.readMoreBtn}>
            Devamını Oku
          </Link>
        </div>
        <button onClick={goToPrevious} className={`${styles.sliderButton} ${styles.prev}`}>
          <FaChevronLeft />
        </button>
        <button onClick={goToNext} className={`${styles.sliderButton} ${styles.next}`}>
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.dots}>
        {posts.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default FeaturedPostSlider
