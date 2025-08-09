import SEO from "../../components/SEO/SEO"
import SocialIcons from "../../components/SocialIcons/SocialIcons"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <SEO title="Hakkımızda" description="Blogumuzun amacı ve yazar tanıtımı." />
      <div className="container">
        <h1 className={styles.pageTitle}>Hakkımızda</h1>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Blogumuzun Amacı</h2>
          <p>
            Bu blog, okuyucularına güncel ve ilgi çekici konularda derinlemesine bilgi sunmayı amaçlamaktadır.
            Teknoloji, yaşam, sağlık, finans ve daha birçok alanda uzman yazarlarımız tarafından hazırlanan özgün
            içeriklerle, bilgiye ulaşımı kolaylaştırmayı ve okuyucularımızın ufkunu genişletmeyi hedefliyoruz. Amacımız,
            sadece bilgi vermek değil, aynı zamanda düşündürmek, ilham vermek ve topluluk oluşturmaktır.
          </p>
          <p>
            Her bir yazımız, titiz bir araştırma ve özenli bir yazım sürecinden geçerek sizlere ulaştırılmaktadır.
            Bilginin gücüne inanıyor ve bu gücü herkesle paylaşmaktan mutluluk duyuyoruz.
          </p>
        </div>
        <div className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>Yazar Tanıtımı: Yunus Beytut</h2>
          <div className={styles.authorInfo}>
            <img src="https://picsum.photos/seed/author/200/200" alt="Ayşe Yılmaz" className={styles.authorImage} />
            <p>
              Merhaba! Ben Yunus Beytut, bu blogun kurucusu ve baş yazarıyım. Yıllardır teknoloji ve dijital dönüşüm
              alanında çalışıyorum. Bilgiyi paylaşmayı ve yeni şeyler öğrenmeyi çok seviyorum. Bu blogu, tutkularımı ve
              deneyimlerimi sizlerle paylaşmak, aynı zamanda farklı bakış açılarını bir araya getirmek amacıyla kurdum.
            </p>
            <p>
              Yazılarımda genellikle yapay zeka, sürdürülebilirlik, dijital pazarlama ve kişisel gelişim gibi konulara
              odaklanıyorum. Umarım içeriklerim sizlere faydalı olur ve keyifli okumalar dilerim!
            </p>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}

export default About
