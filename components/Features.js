export default function Features() {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Fast Learn',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Duisen risus euismod.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Friendly Support',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Duisen risus euismod.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Creative',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Duisen risus euismod.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Work Hard',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Duisen risus euismod.'
    },
  ]

  return (
    <section className="py-5" style={{ background: '#222' }}>
      <div className="container">
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-3" key={f.title}>
              <div className="h-100 d-flex flex-column align-items-center text-center p-4 rounded-4" style={{ background: '#232323', color: '#fff', minHeight: 220 }}>
                <div className="mb-3" style={{ fontSize: '2.5rem', color: '#ff5e5e' }}>
                  <i className={f.icon}></i>
                </div>
                <h5 className="fw-bold mb-2">{f.title}</h5>
                <p className="text-white-50 mb-0" style={{ fontSize: '1rem' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 