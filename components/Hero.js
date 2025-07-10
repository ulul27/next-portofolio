'use client'

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center" style={{ minHeight: '100vh', background: '#fff', paddingTop: '100px' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div>
              <h6 className="fw-bold mb-2" style={{ color: '#ff5e5e', fontSize: '1.1rem' }}>Hi There, I'm Fofana</h6>
              <h1 className="display-3 fw-bold mb-3" style={{ color: '#222', lineHeight: 1.1 }}>Full Stack<br />Developer</h1>
              <p className="lead text-muted mb-4" style={{ maxWidth: 480 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa voluptate incidunt nesciunt vero, commodi explicabo rem enim blanditiis debitis excepturi sapiente.
              </p>
              <div className="d-flex gap-3">
                <a href="#contact" className="btn btn-danger px-4 py-2 fw-semibold rounded-pill shadow-sm" style={{ background: '#ff5e5e', border: 'none', fontSize: '1rem' }}>Learn More</a>
                <a href="#projects" className="btn btn-outline-dark px-4 py-2 fw-semibold rounded-pill shadow-sm" style={{ fontSize: '1rem', borderWidth: 2 }}>See our work</a>
              </div>
            </div>
          </div>
          {/* Right: Photo */}
          <div className="col-lg-6 text-center position-relative">
            <div className="d-inline-block position-relative" style={{ zIndex: 1 }}>
              <img
                src="/images/profile-placeholder.png"
                alt="Profile"
                className="img-fluid rounded-4 shadow-lg"
                style={{ width: 300, height: 340, objectFit: 'cover', background: '#eee' }}
              />
              {/* Accent background */}
              <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: -20, left: -20, zIndex: -1 }}>
                <circle cx="170" cy="170" r="160" stroke="#ff5e5e" strokeWidth="2" fill="none" />
                <circle cx="170" cy="170" r="120" stroke="#ff5e5e" strokeWidth="1" fill="none" />
                <line x1="170" y1="10" x2="170" y2="330" stroke="#ff5e5e" strokeWidth="1" />
                <line x1="10" y1="170" x2="330" y2="170" stroke="#ff5e5e" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 