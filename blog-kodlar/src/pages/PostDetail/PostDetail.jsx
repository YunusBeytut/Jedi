"use client"

import { useParams } from "react-router-dom"
import SEO from "../../components/SEO/SEO"
import SimilarPosts from "../../components/SimilarPosts/SimilarPosts"
import { getPostBySlug, getPostsByCategory, getPosts } from "../../data/posts"
import styles from "./PostDetail.module.css"
import { Link } from "react-router-dom" // Link'i import etmeyi unutmayın

const PostDetail = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const allPosts = getPosts()

  if (!post) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "50px 0" }}>
        <SEO title="Yazı Bulunamadı" description="Aradığınız yazı bulunamadı." />
        <h1 className={styles.notFoundTitle}>Yazı Bulunamadı</h1>
        <p className={styles.notFoundText}>Aradığınız içerik mevcut değil veya silinmiş olabilir.</p>
      </div>
    )
  }

  // Get similar posts from the same category, excluding the current post
  const similarPosts = getPostsByCategory(post.category)
    .filter((p) => p.id !== post.id)
    .slice(0, 3) // Limit to 3 similar posts

  return (
    <div className={styles.postDetailPage}>
      <SEO title={post.title} description={post.shortDescription} />
      <div className="container">
        <article className={styles.postContent}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <img src={post.image || "/placeholder.svg"} alt={post.title} className={styles.coverImage} />
          <div className={styles.postMeta}>
            <span>Yazar: {post.author}</span>
            <span>Yayın Tarihi: {post.date}</span>
            <span>
              Kategori:{" "}
              <Link to={`/category/${post.category}`} className={styles.categoryLink}>
                {post.category}
              </Link>
            </span>
          </div>
          <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <SimilarPosts posts={similarPosts} />
      </div>
    </div>
  )
}

export default PostDetail
