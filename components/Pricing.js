export default function Pricing() {
  const plans = [
    {
      title: 'Design',
      price: 89,
      features: ['Update', 'Revision', 'Unlimited'],
      highlight: false,
    },
    {
      title: 'Programming',
      price: 99,
      features: ['Update', 'Revision', 'Unlimited'],
      highlight: true,
    },
    {
      title: 'Marketing',
      price: 69,
      features: ['Update', 'Revision', 'Unlimited'],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-5" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="fw-bold" style={{ color: '#ff5e5e', fontSize: '1.1rem' }}>Pricing</span>
          <h2 className="fw-bold mt-2 mb-0" style={{ fontSize: '2.2rem', color: '#222' }}>Choose our pricing</h2>
        </div>
        <div className="row justify-content-center g-4">
          {plans.map((plan, i) => (
            <div className="col-md-6 col-lg-4" key={plan.title}>
              <div className={`h-100 p-4 rounded-4 shadow-sm text-center ${plan.highlight ? 'bg-dark text-white border border-2 border-danger' : 'bg-white'}`} style={{ minHeight: 320, boxShadow: plan.highlight ? '0 8px 32px rgba(255,94,94,0.08)' : undefined, zIndex: plan.highlight ? 2 : 1 }}>
                <h5 className="fw-bold mb-2" style={{ color: plan.highlight ? '#fff' : '#222' }}>{plan.title}</h5>
                <div className="mb-3">
                  <span className="display-5 fw-bold" style={{ color: plan.highlight ? '#ff5e5e' : '#222' }}>${plan.price}</span>
                  <span className="text-muted ms-1">/mo</span>
                </div>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="fas fa-check-circle me-2" style={{ color: '#ff5e5e' }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn px-4 py-2 fw-semibold rounded-pill shadow-sm ${plan.highlight ? 'btn-danger' : 'btn-outline-danger'}`} style={{ fontSize: '1rem', background: plan.highlight ? '#ff5e5e' : undefined, border: plan.highlight ? 'none' : undefined }}>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 