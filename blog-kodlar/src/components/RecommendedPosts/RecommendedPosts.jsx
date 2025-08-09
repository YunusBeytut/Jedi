import { Link } from "react-router-dom"
import styles from "./RecommendedPosts.module.css"

const RecommendedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className={styles.recommendedContainer}>
      <h3 className={styles.heading}>Önerilen Yazılar</h3>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postItem}>
            <Link to={`/post/${post.slug}`}>
              <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.postImage} />
            </Link>
            <div className={styles.postContent}>
              <h4 className={styles.postTitle}>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </h4>
              <p className={styles.postMeta}>
                {post.author} - {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedPosts
