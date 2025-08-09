import { Link } from "react-router-dom"
import styles from "./PostCard.module.css"

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <Link to={`/post/${post.slug}`}>
        <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.cardImage} />
      </Link>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className={styles.cardDescription}>{post.shortDescription}</p>
        <div className={styles.cardMeta}>
          <span>Yazar: {post.author}</span>
          <span>Tarih: {post.date}</span>
        </div>
        <Link to={`/post/${post.slug}`} className={styles.readMoreBtn}>
          Devamını Oku
        </Link>
      </div>
    </div>
  )
}

export default PostCard
