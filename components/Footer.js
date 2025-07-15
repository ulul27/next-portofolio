export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">PORTOFOLIO</h5>
            <p className="text-muted">
              Saya adalah seorang Full Stack Developer yang passionate dalam menciptakan 
              aplikasi web dan mobile yang inovatif dan user-friendly.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="text-white text-decoration-none">
                <i className="fab fa-github fs-5"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="fab fa-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="fab fa-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="fab fa-instagram fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">Navigasi</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-muted text-decoration-none">Beranda</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-muted text-decoration-none">Tentang</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-muted text-decoration-none">Proyek</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-muted text-decoration-none">Kontak</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">Layanan</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-muted">Web Development</span>
              </li>
              <li className="mb-2">
                <span className="text-muted">Mobile Development</span>
              </li>
              <li className="mb-2">
                <span className="text-muted">UI/UX Design</span>
              </li>
              <li className="mb-2">
                <span className="text-muted">Consulting</span>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">Kontak</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-envelope me-2 text-muted"></i>
                <span className="text-muted">hello@example.com</span>
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2 text-muted"></i>
                <span className="text-muted">+62 812-3456-7890</span>
              </li>
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-muted"></i>
                <span className="text-muted">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted mb-0">
              © {currentYear} Portfolio. Dibuat dengan ❤️ menggunakan Next.js & Bootstrap
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <p className="text-muted mb-0">
              <a href="#" className="text-muted text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 