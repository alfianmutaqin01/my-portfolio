import techStack from '../data/techStack';
function Services() {
  return (
    <section className="bg-xolio-dark text-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-warning fw-semibold">My Tools</p>
          <h2 className="display-5 fw-bold">What Tools I Use</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="bg-dark rounded-4 text-center p-4 shadow-sm h-100">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ height: '40px', marginBottom: '15px' }}
                />
                <h5 className="fw-bold mb-2">{tech.name}</h5>
                <p className="text-muted small">
                  Mastering {tech.name} helps me craft elegant solutions, intuitive
                  interfaces, and reliable systems in real-world projects.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
