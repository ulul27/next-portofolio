'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`} 
         style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={() => scrollToSection('home')}>
          <span className={isScrolled ? 'text-dark' : 'text-white'}>Portfolio</span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMobileMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isScrolled ? '' : 'text-white'}`}></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${isScrolled ? 'text-dark' : 'text-white'}`} 
                href="#" 
                onClick={() => scrollToSection('home')}
              >
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isScrolled ? 'text-dark' : 'text-white'}`} 
                href="#" 
                onClick={() => scrollToSection('about')}
              >
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isScrolled ? 'text-dark' : 'text-white'}`} 
                href="#" 
                onClick={() => scrollToSection('projects')}
              >
                Proyek
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${isScrolled ? 'text-dark' : 'text-white'}`} 
                href="#" 
                onClick={() => scrollToSection('contact')}
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 