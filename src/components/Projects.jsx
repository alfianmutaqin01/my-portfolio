function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      image: 'https://xolio-react.netlify.app/img/banner/h2_banner_img.png',
      description: 'A modern e-commerce website built with React and Bootstrap.',
    },
    {
      title: 'Portfolio Website',
      image: 'https://via.placeholder.com/600x400',
      description: 'My personal portfolio showcasing web projects and design work.',
    },
    {
      title: 'Weather App',
      image: 'https://via.placeholder.com/600x400',
      description: 'A weather forecasting web app with real-time climate data.',
    },
  ];

  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="text-primary fw-semibold mb-2">Portfolio</p>
        <h2 className="fw-bold mb-5">Recent Work</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="project-card shadow">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-title">{project.title}</div>
                  <button className="project-btn">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
