'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'ulfdh244@gmail.com',
      link: 'mailto:ulfdh244@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Telepon',
      value: '+62 857-4000-4600',
      link: 'tel:+6285740004600'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Lokasi',
      value: 'Kudus ,Jawa Tengah, Indonesia',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={`${isVisible ? 'fade-in-up' : ''}`}>
              <h2 className="display-5 fw-bold mb-3">Hubungi Saya</h2>
              <p className="lead text-muted">
                Mari kita diskusikan proyek Anda atau sekedar menyapa
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="fw-bold mb-4">Informasi Kontak</h3>
              <p className="text-muted mb-4">
                Saya selalu terbuka untuk diskusi tentang proyek baru, 
                peluang kolaborasi, atau sekedar menyapa.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{ width: '40px', height: '40px' }}>
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{info.title}</h6>
                      <a href={info.link} className="text-muted text-decoration-none">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h6 className="fw-bold mb-3">Ikuti Saya</h6>
                <div className="d-flex gap-2">
                  <a href="https://github.com/ulul27" target="_blank" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/ulul_mna/" target="_blank" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="contact-form">
                <h3 className="fw-bold mb-4">Kirim Pesan</h3>
                
                <form action="https://formsubmit.co/ulfdh244@gmail.com" method="POST">
                  {/* Honeypot untuk mencegah spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  {/* Disable captcha */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  {/* Redirect setelah submit */}
                  <input type="hidden" name="_next" value="https://your-domain.com/thank-you" />
                  
                  {/* Template email */}
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Nama Lengkap <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Masukkan email"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">
                      Subjek <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Masukkan subjek pesan"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Pesan <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-custom w-100"
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 