'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-5" style={{ background: '#fff' }}>
      <div className="container text-center">
        <div className="mb-4">
          <span className="fw-bold" style={{ color: '#ff5e5e', fontSize: '1.1rem' }}>Give us a call</span>
        </div>
        <h2 className="fw-bold mb-3" style={{ color: '#ff5e5e', fontSize: '2.2rem', letterSpacing: 1 }}>
          +61 3 8376 6284
        </h2>
        <div className="mb-3">
          <a href="mailto:contact@qbrant.com" className="d-block text-dark fw-semibold mb-1" style={{ fontSize: '1.1rem' }}>contact@qbrant.com</a>
          <span className="text-muted" style={{ fontSize: '1rem' }}>121 King Street, Melbourne Victoria 3000 Australia</span>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="#" className="text-dark fs-4"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-dark fs-4"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-dark fs-4"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-dark fs-4"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  )
} 