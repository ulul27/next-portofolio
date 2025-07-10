'use client'

import projectsData from '../data/projects.json'

export default function Projects() {
  // Only show 4 projects for the grid
  const projects = projectsData.slice(0, 4)

  return (
    <section id="projects" className="py-5" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="fw-bold" style={{ color: '#ff5e5e', fontSize: '1.1rem' }}>Portfolio</span>
          <h2 className="fw-bold mt-2 mb-0" style={{ fontSize: '2.2rem', color: '#222' }}>See our awesome done project</h2>
        </div>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div className="col-md-6 col-lg-6" key={project.id}>
              <div className="card border-0 shadow-sm h-100 overflow-hidden rounded-4" style={{ background: '#faf7f7' }}>
                <div style={{ height: 220, background: '#eee', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-2" style={{ color: '#222' }}>{project.title}</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 