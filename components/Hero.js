'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={`${isVisible ? 'fade-in-up' : ''}`}>
              <h1 className="display-4 fw-bold mb-4">
                Halo, Saya <span className="text-warning">Developer</span>
              </h1>
              <p className="lead mb-4">
                Saya adalah seorang Full Stack Developer yang passionate dalam menciptakan 
                aplikasi web dan mobile yang inovatif dan user-friendly. 
                Berpengalaman dalam React, Node.js, dan berbagai teknologi modern.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="btn btn-warning btn-lg btn-custom"
                  onClick={() => scrollToSection('projects')}
                >
                  <i className="fas fa-eye me-2"></i>
                  Lihat Proyek
                </button>
                <button 
                  className="btn btn-outline-light btn-lg btn-custom"
                  onClick={() => scrollToSection('contact')}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Hubungi Saya
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className={`${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="position-relative">
                <div className="bg-warning rounded-circle d-inline-block p-4 mb-3">
                  <i className="fas fa-code text-white" style={{ fontSize: '4rem' }}></i>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle">
                  <div className="bg-primary rounded-circle p-2">
                    <i className="fas fa-mobile-alt text-white"></i>
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-0 translate-middle">
                  <div className="bg-success rounded-circle p-2">
                    <i className="fas fa-palette text-white"></i>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="row text-center">
                  <div className="col-4">
                    <h4 className="fw-bold">5+</h4>
                    <small>Tahun Pengalaman</small>
                  </div>
                  <div className="col-4">
                    <h4 className="fw-bold">50+</h4>
                    <small>Proyek Selesai</small>
                  </div>
                  <div className="col-4">
                    <h4 className="fw-bold">30+</h4>
                    <small>Klien Puas</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="text-center">
          <div className="text-white mb-2">
            <i className="fas fa-chevron-down"></i>
          </div>
          <small className="text-white-50">Scroll untuk melihat lebih lanjut</small>
        </div>
      </div>
    </section>
  )
} 