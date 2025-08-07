'use client'

import { useState, useEffect } from 'react'
import projectsData from '../data/projects.json'
import { googleSheets } from '../lib/googleSheets'

export default function Projects() {
  const [projects, setProjects] = useState(projectsData)
  const [filter, setFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        // Jika Anda ingin menggunakan Google Sheets, uncomment baris di bawah
        const data = await googleSheets();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
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

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const categories = ['all', 'Web Development']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const handleFilterChange = (category) => {
    setFilter(category)
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className={`${isVisible ? 'fade-in-up' : ''}`}>
              <h2 className="display-5 fw-bold mb-3">Proyek Terbaru</h2>
              <p className="lead text-muted">
                Beberapa proyek yang telah saya kerjakan dengan berbagai teknologi
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="btn-group" role="group">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleFilterChange(category)}
                  >
                    {category === 'all' ? 'Semua' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="card project-card h-100 shadow-sm">
                  <div className="position-relative">
                    <div 
                      className="card-img-top bg-light d-flex align-items-center justify-content-center" 
                      style={{ height: '200px' }}
                    >
                      <i className="fas fa-image text-muted" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-primary">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{project.description}</p>
                    
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge me-1 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card-footer bg-transparent border-0">
                    <div className="d-flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm flex-fill"
                      >
                        <i className="fab fa-github me-1"></i>
                        GitHub
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm flex-fill"
                      >
                        <i className="fas fa-external-link-alt me-1"></i>
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="row">
            <div className="col-12 text-center">
              <div className={`${isVisible ? 'fade-in' : ''}`}>
                <i className="fas fa-search text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                <h5 className="text-muted">Tidak ada proyek yang ditemukan</h5>
                <p className="text-muted">Coba pilih kategori yang berbeda</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className={`${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
              <h4 className="fw-bold mb-3">Tertarik dengan proyek saya?</h4>
              <p className="text-muted mb-4">
                Mari kita diskusikan bagaimana saya bisa membantu mewujudkan ide Anda
              </p>
              <a href="#contact" className="btn btn-primary btn-lg btn-custom">
                <i className="fas fa-paper-plane me-2"></i>
                Mulai Proyek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 