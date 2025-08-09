import { Link } from "react-router-dom"
import styles from "./SimilarPosts.module.css"

const SimilarPosts = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className={styles.similarPostsContainer}>
      <h2 className={styles.heading}>Benzer Yazılar</h2>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Link to={`/post/${post.slug}`}>
              <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.postImage} />
            </Link>
            <h3 className={styles.postTitle}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className={styles.postMeta}>
              {post.author} - {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimilarPosts
