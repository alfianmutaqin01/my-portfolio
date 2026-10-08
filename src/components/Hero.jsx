import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import techStack from "../data/techStack";
import {
  contact,
  typedRoles,
  stats,
  services,
  experiences,
  education,
  achievements,
  organizations,
} from "../data/profile";
import heroImg from "../assets/profile.png";
import kampus from "../assets/gedung-telu-1.webp";
import SectionHeading from "./SectionHeading";
import { SoftSkillGrid, SoftSkillMarquee } from "./SoftSkills";
import { Equalizer } from "./McGallery";
import "./Hero.css";

const achievementImages = import.meta.glob("../assets/achievements/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const cvUrl = `${import.meta.env.BASE_URL}CV_Alfian_Mutakim.pdf`;

const socialLinks = [
  { href: contact.linkedin, icon: "bi-linkedin", label: "LinkedIn" },
  { href: contact.github, icon: "bi-github", label: "GitHub" },
  { href: contact.instagram, icon: "bi-instagram", label: "Instagram" },
  { href: contact.tiktok, icon: "bi-tiktok", label: "TikTok" },
];

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types each word, pauses, deletes it, then moves to the next one.
function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 40, pause = 1800 } = {}) {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const word = words[index];
    const finishedTyping = !deleting && text === word;
    const delay = finishedTyping ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduced, typeSpeed, deleteSpeed, pause]);

  return reduced ? words[0] : text;
}

// Counts from 0 to `end` the first time the number scrolls into view.
function CountUp({ end, decimals = 0, prefix = "", suffix = "", duration = 1500 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? end : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Hero() {
  const typedRole = useTypewriter(typedRoles);

  return (
    <div className="home">
      <span className="home-blob home-blob-1" aria-hidden="true"></span>
      <span className="home-blob home-blob-2" aria-hidden="true"></span>

      {/* ---------- INTRO ---------- */}
      <section id="home" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5 py-lg-4">
            <div className="col-lg-7 text-start" data-aos="fade-right">
              <span className="status-badge mb-4">
                <span className="status-dot"></span>
                Currently a Web Developer at PT Berger Paints Indonesia
              </span>

              <p className="fs-5 fw-semibold mb-2">
                Hi there <span className="wave">👋</span> I'm
              </p>
              <h1 className="hero-name display-3 fw-bold mb-2">Alfian Mutakim</h1>
              <h2 className="h3 fw-semibold mb-4">
                <span className="visually-hidden">{typedRoles[0]}</span>
                <span className="typed-role" aria-hidden="true">
                  {typedRole}
                  <span className="typed-caret"></span>
                </span>
              </h2>

              <p className="lead hero-lead mb-4">
                I build web apps that make everyday work easier, from warehouse
                management systems to apps for local government. Software
                Engineering graduate from{" "}
                <span className="text-white fw-semibold">Telkom University</span>{" "}
                with a 3.95 GPA. Outside the code, I've hosted campus events as
                an MC, worked with customers on the sales floor, and led student
                teams, so I'm just as comfortable talking to people as I am
                writing code.
              </p>

              <p className="hero-location mb-4">
                <i className="bi bi-geo-alt-fill me-1"></i> Karawang, Indonesia
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link
                  to="/contact"
                  className="btn btn-primary custom-hover custom-rounded fw-bold px-4 py-3"
                >
                  Let's Talk <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <a
                  href={cvUrl}
                  download="CV_Alfian_Mutakim.pdf"
                  className="btn btn-outline-light custom-rounded fw-bold px-4 py-3"
                >
                  <i className="bi bi-download me-2"></i>Download CV
                </a>
                <div className="d-flex gap-3 fs-4 ms-sm-2">
                  {socialLinks.map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                    >
                      <i className={`bi ${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center" data-aos="fade-left">
              <div className="hero-photo-wrap">
                <img
                  src={heroImg}
                  alt="Alfian Mutakim"
                  className="hero-photo img-fluid rounded-4 shadow-lg"
                />
                <span className="float-badge float-badge-1">
                  <i className="bi bi-mortarboard-fill"></i> GPA 3.95
                </span>
                <span className="float-badge float-badge-2">
                  <i className="bi bi-code-slash"></i> Laravel · React
                </span>
                <span className="float-badge float-badge-3">
                  <i className="bi bi-mic-fill"></i> MC & Public Speaker
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------- TECH MARQUEE ---------- */}
      <section className="py-4">
        <p className="section-eyebrow text-center mb-4">Tools I work with</p>
        <div className="overflow-hidden">
          <div className="tech-marquee d-flex">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="tech-chip rounded-4 mx-3 px-4 py-3 d-flex align-items-center justify-content-center"
                title={tech.name}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ height: "32px", maxWidth: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="pt-2 pb-5">
        <div className="container">
          <div className="row g-3">
            {stats.map((stat, i) => (
              <div
                className="col-6 col-lg-3"
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="stat-card">
                  <div className="stat-value">
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EDUCATION ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading eyebrow="Education" title="Where I learned the craft" />
          <div className="edu-card mx-auto" data-aos="fade-up">
            <div className="row g-0 align-items-center">
              <div className="col-md-5">
                <img
                  src={kampus}
                  alt="Telkom University Purwokerto campus"
                  className="edu-image"
                />
              </div>
              <div className="col-md-7 p-4 p-lg-5 text-start">
                <p className="timeline-date mb-2">{education.date}</p>
                <h4 className="fw-bold mb-1">{education.institution}</h4>
                <p className="timeline-company mb-3">
                  {education.degree} · {education.location}
                </p>
                <span className="gpa-pill mb-3">
                  <i className="bi bi-star-fill me-1"></i> GPA {education.gpa}
                </span>
                <p className="timeline-desc mb-0">{education.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've been working"
            lead="From the computer lab to a warehouse system, each role taught me something about building for real users."
          />
          <div className="timeline">
            {experiences.map((exp) => (
              <div
                className={`timeline-item ${exp.current ? "is-current" : ""}`}
                key={`${exp.company}-${exp.date}`}
                data-aos="fade-up"
              >
                <span className="timeline-dot"></span>
                <div className="timeline-card">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <span className="timeline-company">
                      {exp.company} · {exp.location}
                    </span>
                    <span className="timeline-date">
                      {exp.current && <span className="now-badge me-2">Now</span>}
                      {exp.date}
                    </span>
                  </div>
                  <h5 className="fw-bold mt-2 mb-2">{exp.role}</h5>
                  <p className="timeline-desc mb-2">{exp.description}</p>
                  <div>
                    {exp.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ACHIEVEMENTS ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Awards & Achievements"
            title="A few things I'm proud of"
          />
          <div className="row g-4">
            {achievements.map((item, i) => (
              <div
                className="col-md-6 col-lg-4"
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={(i % 3) * 100}
              >
                <div className="achievement-card">
                  <div className="achievement-icon">
                    {item.image ? (
                      <img
                        src={achievementImages[`../assets/achievements/${item.image}`]}
                        alt=""
                      />
                    ) : (
                      <i className={`bi ${item.icon}`}></i>
                    )}
                  </div>
                  <div className="text-start">
                    <span className="achievement-badge">{item.badge}</span>
                    <h5 className="fw-bold mt-2 mb-1">{item.title}</h5>
                    <p className="achievement-issuer mb-2">{item.issuer}</p>
                    <p className="timeline-desc small mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ORGANIZATIONS ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Beyond Work"
            title="Leadership & community"
            lead="Leading teams, hosting events, and mentoring other students taught me as much as any course did."
          />
          <div className="row g-4">
            {organizations.map((org, i) => (
              <div
                className="col-md-6"
                key={org.role}
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 100}
              >
                <div className="org-card">
                  <p className="timeline-date mb-1">{org.date}</p>
                  <h5 className="fw-bold mb-1">{org.role}</h5>
                  <p className="timeline-company mb-2">{org.org}</p>
                  <p className="timeline-desc small mb-0">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT I DO ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Hard Skills"
            title="Turning real workflows into reliable web apps"
            lead="I like working where code meets day-to-day operations: understanding how people actually work, then building something that helps."
          />
          <div className="row g-4">
            {services.map((service, i) => (
              <div
                className="col-md-6 col-lg-4"
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
              >
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SOFT SKILLS ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading
            eyebrow="Soft Skills"
            title="The people side of the job"
            lead="Good software starts with understanding people. These are the skills I bring to the table besides code, each one learned on the job."
          />
          <SoftSkillGrid />
          <div className="text-center mt-4" data-aos="fade-up">
            <Link to="/skills#on-the-mic" className="soft-link">
              <Equalizer /> See me on the mic <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <SoftSkillMarquee />
        </div>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="py-5">
        <div className="container">
          <div className="cta-box text-center" data-aos="zoom-in">
            <h2 className="fw-bold mb-3">
              Got a project or a role in mind? <span className="wave">👋</span>
            </h2>
            <p className="section-lead mb-4">
              I'm always happy to chat about web development, business systems,
              or new opportunities. Drop me a message and let's see what we can
              build together. (And yes, I can host your next event too 🎤)
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                to="/contact"
                className="btn btn-primary custom-hover custom-rounded fw-bold px-4 py-3"
              >
                Say Hello <i className="bi bi-send-fill ms-1"></i>
              </Link>
              <a
                href={`mailto:${contact.email}`}
                className="btn btn-outline-light custom-rounded fw-bold px-4 py-3"
              >
                <i className="bi bi-envelope-fill me-2"></i>
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
