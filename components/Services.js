export default function Services() {
  const services = [
    {
      icon: 'fas fa-pencil-ruler',
      title: 'Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      icon: 'fas fa-code',
      title: 'Programming',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Marketing',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]

  return (
    <section id="services" className="py-5" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="fw-bold" style={{ color: '#ff5e5e', fontSize: '1.1rem' }}>Services</span>
          <h2 className="fw-bold mt-2 mb-0" style={{ fontSize: '2.2rem', color: '#222' }}>We provide the best services</h2>
        </div>
        <div className="row justify-content-center g-4">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={s.title}>
              <div className={`h-100 text-center p-4 rounded-4 shadow-sm ${i === 1 ? 'bg-white border border-2 border-danger' : 'bg-light'}`} style={{ minHeight: 200, boxShadow: i === 1 ? '0 8px 32px rgba(255,94,94,0.08)' : undefined, zIndex: i === 1 ? 2 : 1 }}>
                <div className="mb-3 d-flex justify-content-center align-items-center" style={{ fontSize: '2.2rem', color: '#ff5e5e', width: 60, height: 60, margin: '0 auto' }}>
                  <i className={s.icon}></i>
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#222' }}>{s.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 