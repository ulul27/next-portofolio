'use client'

import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Project', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#home" style={{ letterSpacing: '1px' }}>
          <span style={{ color: '#222' }}>Fofana</span><span style={{ color: '#ff5e5e' }}>.</span>
        </a>
        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="mainNavbar"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu */}
        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''}`} id="mainNavbar">
          <ul className="navbar-nav align-items-lg-center mb-2 mb-lg-0 gap-lg-3">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <a className="nav-link fw-semibold text-dark" href={item.href} style={{ fontSize: '1rem' }}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="#contact" className="btn btn-danger px-4 py-2 fw-semibold rounded-pill shadow-sm" style={{ fontSize: '1rem', background: '#ff5e5e', border: 'none' }}>
                Hire us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 