'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nama minimal 2 karakter'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek harus diisi'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subjek minimal 5 karakter'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Telepon',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
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
                  <a href="#" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
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
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    Pesan Anda telah berhasil dikirim! Saya akan segera menghubungi Anda.
                    <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
                    <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Nama Lengkap <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Masukkan email"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">
                      Subjek <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Masukkan subjek pesan"
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Pesan <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-custom w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Kirim Pesan
                      </>
                    )}
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