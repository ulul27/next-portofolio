export default function Testimonial() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Director',
      quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quasi ut asperiores incidunt pariatur ex, ea iste reprehenderit quos commodi reiciendis.'
    },
    {
      name: 'Mario',
      role: 'Marketing',
      quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quasi ut asperiores incidunt pariatur ex, ea iste reprehenderit quos commodi reiciendis.'
    },
    {
      name: 'Wesley',
      role: 'Programming',
      quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quasi ut asperiores incidunt pariatur ex, ea iste reprehenderit quos commodi reiciendis.'
    },
  ]

  return (
    <section id="testimonial" className="py-5" style={{ background: '#181818' }}>
      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((t, i) => (
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={i}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between position-relative">
                <div>
                  <i className="fas fa-quote-left fa-2x mb-3" style={{ color: '#ff5e5e' }}></i>
                  <p className="mb-4" style={{ color: '#222', fontSize: '1.1rem' }}>{t.quote}</p>
                </div>
                <div>
                  <h6 className="fw-bold mb-0" style={{ color: '#222' }}>{t.name}</h6>
                  <span className="text-muted" style={{ fontSize: '0.95rem' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 