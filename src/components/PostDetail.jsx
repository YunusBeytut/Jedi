import React, { useState, useEffect } from "react";
import posts from "../data/posts";
import "../styles/components/PostDetail.css";

function PostDetail({ postId, onBack }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    // Post yükleme simulasyonu
    const timer = setTimeout(() => {
      const foundPost = posts.find(p => p.id === postId);
      setPost(foundPost);
      
      // Okuma süresi hesaplama (ortalama 200 kelime/dakika)
      if (foundPost && foundPost.content) {
        const wordCount = foundPost.content.split(' ').length;
        const estimatedTime = Math.ceil(wordCount / 200);
        setReadingTime(estimatedTime);
      }
      
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [postId]);

  // Klavye navigasyonu
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onBack]);

  // Sosyal medya paylaşım fonksiyonları
  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = `${post.title} - ${post.desc.substring(0, 100)}...`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Kısa süre için başarılı mesajı gösterilebilir
      alert('Link kopyalandı!');
    } catch (err) {
      console.error('Link kopyalanamadı:', err);
    }
  };

  if (loading) {
    return (
      <section className="post-detail" aria-label="Post Detail Loading">
        <div className="loading-skeleton">
          <div className="skeleton-title"></div>
          <div className="skeleton-date"></div>
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="post-detail post-not-found" aria-label="Post Detail">
        <div className="not-found-content">
          <h2>😕 Yazı Bulunamadı</h2>
          <p>Aradığınız yazı mevcut değil veya kaldırılmış olabilir.</p>
          <div className="action-buttons">
            <button onClick={onBack} type="button" aria-label="Geri Dön" className="back-button">
              ← Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className="post-detail" aria-label="Post Detail">
      {/* Header Bölümü */}
      <header className="post-header">
        <div className="post-meta">
          <button onClick={onBack} type="button" aria-label="Geri Dön" className="back-button-inline">
            ← Geri
          </button>
          <span className="reading-time">{readingTime} dk okuma</span>
        </div>
        
        <h1 className="post-title">{post.title}</h1>
        
        <div className="post-info">
          <time className="post-date" dateTime={post.date}>
            📅 {new Date(post.date).toLocaleDateString('tr-TR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>
      </header>

      {/* Görsel Bölümü */}
      {post.img && (
        <figure className="post-image-container">
          <img 
            src={post.img} 
            alt={post.title} 
            className="post-image"
            loading="lazy"
          />
        </figure>
      )}

      {/* Özet Bölümü */}
      {post.desc && (
        <div className="post-summary">
          <p className="post-description">{post.desc}</p>
        </div>
      )}

      {/* İçerik Bölümü */}
      <main className="post-content">
        {post.content}
      </main>

      {/* Footer Bölümü */}
      <footer className="post-footer">
        <div className="post-actions">
          <div className="share-section">
            <h3>Bu yazıyı paylaş:</h3>
            <div className="share-buttons">
              <button 
                onClick={shareOnTwitter}
                type="button"
                aria-label="Twitter'da Paylaş"
                className="share-button twitter"
              >
                🐦 Twitter
              </button>
              <button 
                onClick={shareOnLinkedIn}
                type="button"
                aria-label="LinkedIn'de Paylaş"
                className="share-button linkedin"
              >
                💼 LinkedIn
              </button>
              <button 
                onClick={copyToClipboard}
                type="button"
                aria-label="Linki Kopyala"
                className="share-button copy"
              >
                📋 Kopyala
              </button>
            </div>
          </div>

          <div className="navigation-section">
            <button onClick={onBack} type="button" aria-label="Ana Sayfaya Dön" className="back-button-main">
              ← Tüm Yazılar
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default PostDetail;