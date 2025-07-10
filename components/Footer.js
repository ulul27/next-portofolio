export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-4 bg-white border-top">
      <div className="container text-center">
        <p className="mb-1 text-muted" style={{ fontSize: '1rem' }}>
          &copy; {currentYear} Fofana. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="#" className="text-muted"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-muted"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-muted"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-muted"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  )
} 