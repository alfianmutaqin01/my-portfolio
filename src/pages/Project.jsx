import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { projects, projectCategories } from "../data/projects";
import "./Project.css";

const images = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const imageUrl = (fileName) => fileName && images[`../assets/projects/${fileName}`];

const linkTypes = [
  { key: "live", label: "Live Site", icon: "bi-box-arrow-up-right" },
  { key: "code", label: "Code", icon: "bi-github" },
  { key: "design", label: "Figma", icon: "bi-vector-pen" },
  { key: "docs", label: "Docs", icon: "bi-file-earmark-text" },
];

const categoryLabel = Object.fromEntries(
  projectCategories.map(({ id, label }) => [id, label])
);

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

function ProjectArt({ project }) {
  const src = imageUrl(project.image);

  if (src) {
    return <img src={src} alt={project.title} className="project-image" loading="lazy" />;
  }

  // Illustrated app window for projects without a screenshot
  return (
    <div className="project-art" aria-hidden="true">
      <div className="art-window">
        <div className="art-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="art-body">
          <i className={`bi ${project.icon || "bi-window"}`}></i>
          <div className="art-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({ project }) {
  const links = linkTypes.filter(({ key }) => project.links?.[key]);

  if (links.length === 0) {
    return project.note ? (
      <p className="project-note mb-0">
        <i className="bi bi-lock-fill me-2"></i>
        {project.note}
      </p>
    ) : null;
  }

  return (
    <div className="d-flex flex-wrap gap-2">
      {links.map(({ key, label, icon }) => (
        <a
          key={key}
          href={project.links[key]}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`bi ${icon} me-2`}></i>
          {label}
        </a>
      ))}
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
      {project.status && (
        <span className="project-status">
          <span className="status-pulse"></span>
          {project.status}
        </span>
      )}
      <span className="project-category">{categoryLabel[project.category]}</span>
      {project.year && <span className="project-year">{project.year}</span>}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <article className="featured-card" data-aos="fade-up">
      <div className="row g-0 align-items-stretch">
        <div className={`col-lg-6 featured-media ${reversed ? "order-lg-2" : ""}`}>
          <ProjectArt project={project} />
        </div>
        <div className="col-lg-6 p-4 p-lg-5 text-start">
          <ProjectMeta project={project} />
          <p className="project-context mb-1">{project.context}</p>
          <h3 className="fw-bold mb-3">{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          {project.highlights && (
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>
                  <i className="bi bi-check2-circle"></i>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="mb-4">
            {project.tags.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-media">
        <ProjectArt project={project} />
      </div>
      <div className="p-4 d-flex flex-column flex-grow-1 text-start">
        <ProjectMeta project={project} />
        <h5 className="fw-bold mb-1">{project.title}</h5>
        <p className="project-context small mb-2">{project.context}</p>
        <p className="project-summary small flex-grow-1">{project.summary}</p>
        <div className="mb-3">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function Project() {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((p) => p.category === filter);

  const countFor = (id) =>
    id === "all"
      ? otherProjects.length
      : otherProjects.filter((p) => p.category === id).length;

  return (
    <div className="projects-page text-white">
      {/* ---------- HEADER ---------- */}
      <section className="pt-5 pb-4">
        <div className="container text-center" data-aos="fade-up">
          <p className="section-eyebrow mb-2">Projects</p>
          <h1 className="display-5 fw-bold mb-3">Things I've built and designed</h1>
          <p className="section-lead">
            Real systems for real users, plus the UI/UX work and documentation
            behind them.
          </p>
        </div>
      </section>

      {/* ---------- LATEST WORK ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Work"
            title="What I've been building lately"
            lead="Production systems for a company, a university, and a local community."
          />
          <div className="d-flex flex-column gap-4">
            {featuredProjects.map((project, i) => (
              <FeaturedProject project={project} index={i} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MORE PROJECTS ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="More Projects"
            title="Apps, designs, and documents"
          />

          <div
            className="d-flex flex-wrap justify-content-center gap-2 mb-5"
            role="tablist"
            aria-label="Filter projects"
          >
            {projectCategories.map(({ id, label }) => {
              const count = countFor(id);
              if (count === 0) return null;

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={filter === id}
                  className={`filter-pill ${filter === id ? "is-active" : ""}`}
                  onClick={() => setFilter(id)}
                >
                  {label}
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="row g-4" key={filter}>
            {visible.map((project, i) => (
              <div
                className="col-md-6 col-lg-4 project-enter"
                key={project.title}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}

            {filter === "all" && (
              <div
                className="col-md-6 col-lg-4 project-enter"
                style={{ animationDelay: `${visible.length * 70}ms` }}
              >
                <div className="coming-card">
                  <div className="coming-icon">
                    <i className="bi bi-hourglass-split"></i>
                  </div>
                  <h5 className="fw-bold mb-2">More on the way</h5>
                  <p className="project-summary small mb-4">
                    New projects are in progress and will show up here soon.
                  </p>
                  <Link to="/contact" className="project-link">
                    <i className="bi bi-chat-dots me-2"></i>Got one in mind?
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
