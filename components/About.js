'use client'

import { useEffect, useState } from 'react'

export default function About() {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skills = [
    { name: 'React', level: 95, icon: 'fab fa-react' },
    { name: 'JavaScript', level: 95, icon: 'fab fa-js-square' },
    { name: 'Next.js', level: 85, icon: 'fab fa-node-js' },
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' }
  ]

  const experiences = [
    {
      year: '2025',
      title: 'Frontend Developer',
      company: 'RWID',
      description: 'Membuat Website yang responsif dan interaktif menggunakan React.js.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={`${isVisible ? 'fade-in-up' : ''}`}>
              <h2 className="display-5 fw-bold mb-3">Tentang Saya</h2>
              <p className="lead text-muted">
                Saya adalah developer yang passionate dalam menciptakan solusi digital yang inovatif
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className={`${isVisible ? 'fade-in-up' : ''}`}>
              <h3 className="fw-bold mb-4">Siapa Saya?</h3>
              <p className="mb-4">
                Saya adalah seorang Full Stack Developer pengembang aplikasi web. Saya memiliki passion yang kuat dalam menciptakan 
                solusi digital yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa.
              </p>
              <p className="mb-4">
                Saya percaya bahwa teknologi harus memudahkan kehidupan manusia, itulah mengapa saya selalu 
                berusaha untuk menciptakan aplikasi yang intuitif, efisien, dan scalable.
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="text-center p-3">
                    <i className="fas fa-code text-primary mb-2" style={{ fontSize: '2rem' }}></i>
                    <h5 className="fw-bold">Web Development</h5>
                    <small className="text-muted">React, Node.js, Next</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="fw-bold mb-4">Keahlian Teknis</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <i className={`${skill.icon} me-2 text-primary`}></i>
                      <span className="fw-semibold">{skill.name}</span>
                    </div>
                    {/* <span className="text-muted">{skill.level}%</span> */}
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar bg-gradient" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: 'linear-gradient(45deg, #667eea, #764ba2)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="fw-bold text-center mb-5">Pengalaman Kerja</h3>
              <div className="row">
                {experiences.map((exp, index) => (
                  <div key={index} className="col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <div className="bg-primary text-white rounded-circle d-inline-block p-3 mb-3">
                          <i className="fas fa-briefcase"></i>
                        </div>
                        <h5 className="fw-bold">{exp.title}</h5>
                        <h6 className="text-primary mb-2">{exp.company}</h6>
                        <small className="text-muted mb-3 d-block">{exp.year}</small>
                        <p className="text-muted">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 