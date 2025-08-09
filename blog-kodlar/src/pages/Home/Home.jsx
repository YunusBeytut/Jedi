import SEO from "../../components/SEO/SEO"
import FeaturedPostSlider from "../../components/FeaturedPostSlider/FeaturedPostSlider"
import RecommendedPosts from "../../components/RecommendedPosts/RecommendedPosts"
import PostCard from "../../components/PostCard/PostCard"
import { getPosts, getFeaturedPosts, getRecommendedPosts, getCategories } from "../../data/posts"
import styles from "./Home.module.css"
import { Link } from "react-router-dom"

const Home = () => {
  const allPosts = getPosts()
  const featuredPosts = getFeaturedPosts()
  const recommendedPosts = getRecommendedPosts().slice(0, 3) // Get top 3 recommended
  const latestPosts = allPosts.slice(0, 6) // Get top 6 latest posts
  const categories = getCategories()

  return (
    <div className={styles.homePage}>
      <SEO title="Anasayfa" description="Blogumuzun anasayfası, öne çıkan ve en yeni yazılar." />
      <div className="container">
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`} className={styles.categoryButton}>
              {category}
            </Link>
          ))}
        </div>

        <div className={styles.heroSection}>
          <div className={styles.mainBanner}>
            <FeaturedPostSlider posts={featuredPosts} />
          </div>
          <div className={styles.recommendedSidebar}>
            <RecommendedPosts posts={recommendedPosts} />
          </div>
        </div>

        <section className={styles.latestPostsSection}>
          <h2 className={styles.sectionTitle}>En Son Yazılar</h2>
          <div className={styles.postsGrid}>
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
