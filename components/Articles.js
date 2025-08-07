'use client'

import { useState, useEffect } from 'react'
import articlesData from '../data/articles.json'
import { googleSheets } from '../lib/googleSheets'

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        
        const data = await googleSheets();
        console.log('API Data:', data);
        
        if (data && data.articles) {
          setArticles(data.articles)
        } else if (data && Array.isArray(data)) {
          setArticles(data)
        } else {
          console.log('Using fallback data')
          setArticles(articlesData)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Gagal memuat data artikel')
        setArticles(articlesData)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('articles')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="articles" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={`${isVisible ? 'fade-in-up' : ''}`}>
              <h2 className="display-5 fw-bold mb-3">Artikel Terbaru</h2>
              <p className="lead text-muted">
                Berbagi pengetahuan dan pengalaman dalam dunia teknologi
              </p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="row">
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <p className="mt-3 text-muted">Memuat artikel...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-warning" role="alert">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {error}
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && (
          <div className="row">
            {articles.map((article, index) => (
              <div key={article.id} className="col-lg-4 col-md-6 mb-4">
                <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="card article-card h-100 shadow-sm">
                    <div className="position-relative">
                      <div 
                        className="card-img-top bg-light d-flex align-items-center justify-content-center" 
                        style={{ height: '200px' }}
                      >
                        <i className="fas fa-newspaper text-muted" style={{ fontSize: '3rem' }}></i>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-2">
                        <span className="badge bg-secondary">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold mb-3">{article.title}</h5>
                      <p className="card-text text-muted flex-grow-1">{article.description}</p>
                    </div>
                    
                    <div className="card-footer bg-transparent border-0">
                      <div className="d-flex gap-2">
                        <a 
                          href={article.medium} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm flex-fill"
                        >
                          <i className="fab fa-medium me-1"></i>
                          Baca Artikel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Articles State */}
        {!loading && articles.length === 0 && !error && (
          <div className="row">
            <div className="col-12 text-center">
              <div className={`${isVisible ? 'fade-in' : ''}`}>
                <i className="fas fa-newspaper text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                <h5 className="text-muted">Belum ada artikel</h5>
                <p className="text-muted">Artikel akan muncul di sini</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!loading && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                <h4 className="fw-bold mb-3">Tertarik dengan artikel saya?</h4>
                <p className="text-muted mb-4">
                  Ikuti saya di Medium untuk mendapatkan artikel terbaru seputar teknologi
                </p>
                <a href="https://medium.com/@ulul27" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg btn-custom">
                  <i className="fab fa-medium me-2"></i>
                  Ikuti di Medium
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 