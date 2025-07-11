import techStack from '../data/techStack';
import heroImg from '../assets/profile.png';
import kampus from '../assets/gedung-telu-1.webp';


const educationData = [
  {
    date: "Jun 2022 – Sekarang",
    institution: "Institut Teknologi Telkom Purwokerto",
    degree:
      "S1 Software Engineering, Faculty of Informatics. GPA 3.97 out of 4.00",
    details:
      "Relevant courses: Programming, Software Engineering Models and Methods, Software Requirements Engineering, Interaction Design. Able to maintain a high GPA with multiple bootcamps and involvement in organizations.",
  },
  {
    date: "Jul 2019 – Jun 2022",
    institution: "SMK Telkom Purwokerto",
    degree: "Software Engineering",
    details:
      "Relevant courseworks: Leadership and Communication Skills, Technology Literacy, Computational Thinking, Basic Programming, Database, Software Requirements Engineering, Graphic Design, Entrepreneurship, Programming with Frameworks.",
  },
];
const combinedExperience = [
  {
    section: "Internship and Bootcamp Experience",
    subtitle: "A comprehensive overview of my journey",
    entries: [
      {
        date: "Jan 2024 – Apr 2024",
        place: "Smartpath.id",
        role: "Web Developer Career Planning and Preparation Bootcamp Participants",
        description:
          "Learn about web programming, user interface design, application development and current frameworks. Contribute to practical projects to apply learned concepts and skills. Opportunities to collaborate with fellow participants and instructors, share knowledge, and build professional networks.",
      },
      {
        date: "Apr 2023 – Mei 2023",
        place: "Software Engineering Student Association IT Telkom Purwokerto",
        role: "UI / UX Design Bootcamp Participants",
        description:
          "Learn the basic principles of UI and UX design, including element placement, interaction flow, and design aesthetics. Participate in completing a final project by implementing UI/UX design into a real product or mobile application using Figma.",
      },
      {
        date: "Jul 2022 – Agst 2022",
        place: "Digitalent Kominfo",
        role: "VSGA Junior Web Development Bootcamp Participants",
        description:
          "Implement web technologies using various tools. Intensive training on basics of programming with HTML, PHP, XAMPP, JavaScript. Created a web-based application and conducted testing for certification.",
      },
      {
        date: "Des 2020 – Maret 2021",
        place: "PT Metafora Indonesia Teknologi (IDMETAFORA)",
        role: "Web Developer Interns",
        description:
          "Responsible for data input and ERP module development. Explored data linking strategies and dynamic interface design on web platforms.",
      },
    ],
  },
  {
    section: "Organizational & Committee Experience",
    subtitle:
      "Weaving stories of leadership and team collaboration in a variety of exciting experiences.",
    entries: [
      {
        date: "Feb 2023 – Sekarang",
        place: "Himpunan Mahasiswa Software Engineering IT Telkom Purwokerto",
        role: "Staff of the media and information division",
        description:
          "Designed 40+ certificates, covered and published activities, created visual and written content using Canva and Figma. Collaborated with team to support other divisions.",
      },
      {
        date: "Jun 2023",
        place: "General Election of Faculty of Informatics IT Telkom Purwokerto",
        role: "Staff of IT System Division",
        description:
          "Collaborated on system improvements, entered election data, and sent mass email notifications with credentials to students.",
      },
      {
        date: "Agst 2020 – Jun 2021",
        place: "Stematel Computer Club SMK Telkom Purwokerto",
        role: "Staff Division Web Design Presenters",
        description:
          "Designed training curriculum, taught HTML, CSS, JavaScript, and Figma. Guided members on projects and provided feedback.",
      },
    ],
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="bg-dark text-white py-5 position-relative overflow-hidden"
    >
      <div className="container">
        {/* ---------- TOP : HEADLINE ---------- */}
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
        src={heroImg}
        alt="Alfian Mutakim"
        className="img-fluid rounded-4 shadow-lg"
        style={{ maxWidth: '80%' }}
      />
          </div>
          {/* TEXT SIDE */}
          <div className="col-lg-6 text-start" data-aos="fade-right">
            <p className="text-warning fw-semibold mb-2">Hello, I'm</p>
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#845ef7' }}>Alfian Mutakim</h1>

            <p className="lead mb-4 text-light">
  Software Engineering student at <span className="text-danger fw-bold">Telkom University</span> who combines
  coding, UI/UX design, and administrative expertise to craft real‑world digital solutions.
</p>


            <div className="row align-items-center mb-4">

  <div className="col-auto">
    <a
      href="/cv-alfian.pdf"
      className="btn btn-primary custom-hover px-4 py-3 custom-rounded fw-bold"
      download
    >
      Download CV
    </a>
  </div>

  {/* Kolom Icon Sosial */}
  <div className="col-auto">
    <div className="d-flex gap-3 fs-4">
      <a
        href="https://github.com/alfianmutaqin01"
        className="text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href="www.linkedin.com/in/alfianmutakim"
        className="text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/al_fianmutaqin?igsh=MWlyazJrYXptaWEyaQ=="
        className="text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a
        href="#"
        className="text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>

</div>


          </div>
        </div>
        <br />
        <br />
        <section className="bg-xolio-dark py-5">
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          {techStack.slice(0, 5).map((tech, idx) => (
            <div
              key={idx}
              className="bg-dark rounded-4 px-4 py-3 d-flex align-items-center justify-content-center shadow"
              style={{ width: '160px', height: '80px' }}
            >
              <img src={tech.logo} alt={tech.name} style={{ height: '32px', maxWidth: '100%' }} />
            </div>
          ))}
        </div>
      </section>

      <div className="container text-center">
  <p className="text-primary fw-bold mb-2">Topics of Interest</p>
  <h5 className="fw-bold mb-5">
    Empowering communities with user-friendly and purposeful digital solutions.
  </h5>
  <div className="row">
    {/* Card 1: Front-end Development */}
    <div className="col-md-4 mb-4">
      <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
        <div className="mb-3">
          <i className="bi bi-code-slash fs-1 text-primary"></i>
        </div>
        <h5 className="fw-bold">Front-end Development</h5>
        <p className="text-light">
          Building responsive and interactive web interfaces with clean code and optimized performance.
        </p>
      </div>
    </div>

    {/* Card 2: Back-end Development */}
    <div className="col-md-4 mb-4">
      <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
        <div className="mb-3">
          <i className="bi bi-hdd-stack fs-1 text-primary"></i>
        </div>
        <h5 className="fw-bold">Back-end Development</h5>
        <p className="text-light">
          Creating robust server-side logic and database systems that support scalable applications.
        </p>
      </div>
    </div>

    {/* Card 3: UI/UX Design */}
    <div className="col-md-4 mb-4">
      <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
        <div className="mb-3">
          <i className="bi bi-palette fs-1 text-primary"></i>
        </div>
        <h5 className="fw-bold">UI/UX Design</h5>
        <p className="text-light">
          Creating seamless user experiences with attention to usability and aesthetic clarity.
        </p>
      </div>
    </div>

    {/* Card 4: System Administration */}
    <div className="col-md-4 mb-4">
      <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
        <div className="mb-3">
          <i className="bi bi-gear fs-1 text-primary"></i>
        </div>
        <h5 className="fw-bold">System Administration</h5>
        <p className="text-light">
          Managing administrative workflows and digital documentation for efficiency.
        </p>
      </div>
    </div>

    {/* Card 5: Writing & Content */}
    <div className="col-md-4 mb-4">
      <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
        <div className="mb-3">
          <i className="bi bi-pen fs-1 text-primary"></i>
        </div>
        <h5 className="fw-bold">Writing & Content</h5>
        <p className="text-light">
          Producing impactful educational content and concise writing for media and digital needs.
        </p>
      </div>
    </div>

    {/* Card 6: Communication */}
    <div className="col-md-4 mb-4">
      <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
        <div className="mb-3">
          <i className="bi bi-mic fs-1 text-primary"></i>
        </div>
        <h5 className="fw-bold">Communication</h5>
        <p className="text-light">
          Experienced in public speaking, mentoring, and team collaboration.
        </p>
      </div>
    </div>
  </div>
</div>


<section className="bg-dark text-white py-5 px-3">
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* LEFT: Illustration */}
          <div className="col-md-6 text-center">
            <img
        src={kampus}
        alt="Alfian Mutakim"
        className="img-fluid"
        style={{ maxWidth: '80%' }}
      />
          </div>

          {/* RIGHT: Header */}
          <div className="col-md-6 text-start">
            <p className="text-warning fw-semibold mb-2 text-uppercase">Education</p>
            <h2 className="fw-bold mb-3">My Educational History</h2>
            <p className="text-secondary">
              My educational history and what I have learned.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="row">
          {educationData.map((edu, index) => (
            <div className="col-12 mb-5" key={index}>
              <div className="p-4 border-start border-4 border-primary">
                <h6 className="text-primary mb-1">{edu.date}</h6>
                <h5 className="fw-bold">{edu.institution}</h5>
                <p className="mb-1 fw-semibold">{edu.degree}</p>
                <p className="text-secondary mb-0">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* ---------- BOTTOM : CV MINI GRID ---------- */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5">
          {/* EDUCATION */}
          <div className="col" data-aos="fade-up">
            <div className="p-3 h-100 border border-secondary rounded-4 bg-dark-hover">
              <h5 className="text-info mb-2">
                <i className="bi bi-mortarboard-fill me-2" />
                Education
              </h5>
              <p className="mb-1 fw-semibold">
                S1 Software Engineering
              </p>
              <p className="small text-muted mb-0">
                Telkom University <br /> 2022 — present
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="col" data-aos="fade-up" data-aos-delay="100">
            <div className="p-3 h-100 border border-secondary rounded-4 bg-dark-hover">
              <h5 className="text-info mb-2">
                <i className="bi bi-briefcase-fill me-2" />
                Experience
              </h5>
              <ul className="small mb-0">
                <li>Asisten Praktikum (’24‑Now)</li>
                <li>OSC Writer (’22‑’23)</li>
                <li>Admin Keuangan (’22)</li>
                <li>Pelayanan Publik (’21)</li>
              </ul>
            </div>
          </div>

          {/* SKILLS */}
          <div className="col" data-aos="fade-up" data-aos-delay="200">
            <div className="p-3 h-100 border border-secondary rounded-4 bg-dark-hover">
              <h5 className="text-info mb-2">
                <i className="bi bi-lightning-charge-fill me-2" />
                Skills
              </h5>
              <p className="small mb-0">
                HTML&nbsp;/&nbsp;CSS&nbsp;/&nbsp;JS, React, PHP, Python,
                Figma&nbsp;&amp;&nbsp;Canva, Data Analysis, Problem Solving
              </p>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="col" data-aos="fade-up" data-aos-delay="300">
            <div className="p-3 h-100 border border-secondary rounded-4 bg-dark-hover">
              <h5 className="text-info mb-2">
                <i className="bi bi-trophy-fill me-2" />
                Achievements
              </h5>
              <ul className="small mb-0">
                <li>OSC Medcom.id Awardee</li>
                <li>Innovillage 2023</li>
                <li>P2MW &amp; KMI Expo</li>
                <li>PKM 2023 Submit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating shapes ala Xolio (optional) */}
      <span className="position-absolute top-0 start-50 translate-middle-x fs-1 text-primary opacity-25">
        ★
      </span>
    </section>
  );
}
<section className="bg-dark text-white py-5 px-3">
      <div className="container">
        {/* Education Section */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <p className="text-warning fw-semibold mb-2 text-uppercase">
              Education
            </p>
            <h2 className="fw-bold mb-3">My Educational History</h2>
            <p className="text-secondary">
              My educational history and what I have learned.
            </p>
          </div>
          <div className="row">
            {educationData.map((edu, index) => (
              <div className="col-12 mb-4" key={index}>
                <div className="p-4 border-start border-4 border-primary">
                  <h6 className="text-primary mb-1">{edu.date}</h6>
                  <h5 className="fw-bold mb-1">{edu.institution}</h5>
                  <p className="fw-semibold mb-1">{edu.degree}</p>
                  <p className="text-secondary mb-0">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Experience Section */}
        {combinedExperience.map((block, i) => (
          <div className="mb-5" key={i}>
            <div className="text-center mb-4">
              <p className="text-warning fw-semibold mb-2 text-uppercase">
                {block.section}
              </p>
              <h2 className="fw-bold mb-3">{block.subtitle}</h2>
            </div>
            <div className="row">
              {block.entries.map((item, idx) => (
                <div className="col-12 mb-4" key={idx}>
                  <div className="p-4 border-start border-4 border-primary">
                    <h6 className="text-primary mb-1">{item.date}</h6>
                    <h5 className="fw-bold mb-1">{item.place}</h5>
                    <p className="fw-semibold mb-1">{item.role}</p>
                    <p className="text-secondary mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

export default Hero;
