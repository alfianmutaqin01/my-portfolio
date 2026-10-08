import { Link } from "react-router-dom";
import techStack, { techCategories } from "../data/techStack";
import SectionHeading from "../components/SectionHeading";
import { SoftSkillGrid, SoftSkillMarquee } from "../components/SoftSkills";
import McGallery, { Equalizer } from "../components/McGallery";
import "./Skill.css";

const jumpLinks = [
  { hash: "hard-skills", label: "Hard Skills", icon: "bi-code-slash" },
  { hash: "soft-skills", label: "Soft Skills", icon: "bi-people" },
  { hash: "on-the-mic", label: "On the Mic", icon: "bi-mic" },
];

function Skill() {
  return (
    <div className="skills-page text-white">
      {/* ---------- HEADER ---------- */}
      <section className="pt-5 pb-4">
        <div className="container text-center" data-aos="fade-up">
          <p className="section-eyebrow mb-2">Skills</p>
          <h1 className="display-5 fw-bold mb-3">What I bring to the table</h1>
          <p className="section-lead mb-4">
            Technical skills to build the right thing, and people skills to make
            sure it really is the right thing.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {jumpLinks.map(({ hash, label, icon }) => (
              <Link key={hash} to={`/skills#${hash}`} className="jump-pill">
                <i className={`bi ${icon} me-2`}></i>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HARD SKILLS ---------- */}
      <section id="hard-skills" className="skills-anchor py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Hard Skills"
            title="Tools of the trade"
            lead="What I reach for when building, from the first wireframe to the final deploy."
          />
          <div className="row g-4">
            {techCategories.map((category, i) => {
              const tools = techStack.filter(
                (tech) => tech.category === category.id
              );
              const isLastOdd =
                i === techCategories.length - 1 && techCategories.length % 2 === 1;

              return (
                <div
                  className={isLastOdd ? "col-12" : "col-md-6"}
                  key={category.id}
                  data-aos="fade-up"
                  data-aos-delay={(i % 2) * 100}
                >
                  <div className="tool-group">
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span className="tool-group-icon">
                        <i className={`bi ${category.icon}`}></i>
                      </span>
                      <h5 className="fw-bold mb-0">{category.title}</h5>
                    </div>
                    <p className="soft-desc small mb-3">{category.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span className="tool-item" key={tool.name}>
                          <span className="tool-logo">
                            <img src={tool.logo} alt="" loading="lazy" />
                          </span>
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- SOFT SKILLS ---------- */}
      <section id="soft-skills" className="skills-anchor py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Soft Skills"
            title="The people side of the job"
            lead="Learned on stage, on the sales floor, in the computer lab, and while leading student teams."
          />
          <SoftSkillGrid />
        </div>
        <div className="mt-5">
          <SoftSkillMarquee />
        </div>
      </section>

      {/* ---------- ON THE MIC ---------- */}
      <section id="on-the-mic" className="skills-anchor py-5">
        <div className="container">
          <SectionHeading
            eyebrow={
              <>
                <Equalizer /> <span className="ms-1">On the Mic</span>
              </>
            }
            title="Seminars, stages, and Sunday mornings"
            lead="From formal seminars to a casual Car Free Day crowd, here are some of the events I've hosted as MC."
          />
          <McGallery />

          <div className="text-center mt-5" data-aos="fade-up">
            <p className="section-lead mb-3">
              Need a developer for your team, or an MC for your next event?
            </p>
            <Link
              to="/contact"
              className="btn btn-primary custom-hover custom-rounded fw-bold px-4 py-3"
            >
              Let's Talk <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
