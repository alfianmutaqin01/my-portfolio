import { softSkills, softSkillChips } from "../data/profile";
import "./common.css";

export function SoftSkillGrid() {
  return (
    <div className="row g-4">
      {softSkills.map((skill, i) => (
        <div
          className="col-md-6 col-lg-4"
          key={skill.title}
          data-aos="flip-up"
          data-aos-delay={(i % 3) * 100}
        >
          <div className="soft-card">
            <div className="soft-icon">
              <i className={`bi ${skill.icon}`}></i>
            </div>
            <h5 className="fw-bold">{skill.title}</h5>
            <p className="soft-desc mb-3">{skill.description}</p>
            <span className="soft-proof">
              <i className="bi bi-patch-check-fill me-1"></i>
              {skill.proof}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SoftSkillMarquee() {
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className="tech-marquee marquee-reverse d-flex">
        {[...softSkillChips, ...softSkillChips].map((chip, idx) => (
          <span className="skill-chip mx-2" key={idx}>
            <i className={`bi ${chip.icon} me-2`}></i>
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}
