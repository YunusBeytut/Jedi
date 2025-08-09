"use client"
import { useParams } from "react-router-dom"
import SEO from "../../components/SEO/SEO"
import PostCard from "../../components/PostCard/PostCard"
import { getPostsByCategory } from "../../data/posts"
import styles from "./Category.module.css"

const Category = () => {
  const { categoryName } = useParams()
  const posts = getPostsByCategory(categoryName)

  return (
    <div className={styles.categoryPage}>
      <SEO title={`${categoryName} Kategorisi`} description={`${categoryName} kategorisindeki tüm yazılar.`} />
      <div className="container">
        <h1 className={styles.categoryTitle}>{categoryName} Kategorisi</h1>
        {posts.length > 0 ? (
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className={styles.noPosts}>Bu kategoride henüz yazı bulunmamaktadır.</p>
        )}
      </div>
    </div>
  )
}

export default Category
