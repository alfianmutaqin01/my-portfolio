import techStack from "../data/techStack";
import heroImg from "../assets/profile.png";
import kampus from "../assets/gedung-telu-1.webp";
import awardIcon from "../assets/award.png";
const icons = import.meta.glob("../assets/achievements/*", {
  eager: true,
  as: "url",
});

const educationData = [
  {
    date: "Oktober 2022 – Sekarang",
    institution: "Telkom University – Purwokerto, Indonesia",
    degree: "S1 - Software Engineering, Faculty of Informatics",
    details:
      "Mendalami berbagai topik dalam rekayasa perangkat lunak modern, termasuk pemrograman berbasis web, pengujian perangkat lunak, manajemen proyek, dan desain antarmuka pengguna (UI/UX). Aktif sebagai asisten praktikum dan mentor program kewirausahaan. Berhasil mempertahankan IPK tinggi sambil terlibat aktif dalam organisasi dan berbagai ajang kompetisi nasional seperti PKM, P2MW, dan Innovillage.",
  },
  {
    date: "Jul 2019 – Jun 2022",
    institution: "SMK An-Nuur Boarding School",
    degree: "Akuntansi",
    details:
      "Mempelajari dasar-dasar akuntansi keuangan, perpajakan, dan manajemen keuangan. Dilengkapi dengan pelatihan keterampilan teknis seperti pengelolaan laporan keuangan, aplikasi pembukuan digital, serta pemahaman etika bisnis dan komunikasi profesional. Menunjukkan kedisiplinan tinggi dalam lingkungan asrama dan aktif dalam kegiatan organisasi sekolah.",
  },
];

const combinedExperience = [
  {
    section: "Experience",
    subtitle:
      "Professional journey in administration, education, and public service.",
    entries: [
      {
        date: "Feb 2024 – Present",
        place: "Telkom University – Purwokerto",
        role: "Laboratory Assistant – Software Engineering",
        description:
          "Assist lecturers in delivering practical classes by guiding students through technical exercises, diagnosing problems, and ensuring comprehension. Provide real-time support, feedback, and explanations on key software engineering topics.",
      },
      {
        date: "Sep 2022 – Aug 2023",
        place: "OSC Medcom.id",
        role: "Educational Writer & Contributor",
        description:
          "Created informative and persuasive educational content. Conducted topic research and audience analysis to develop impactful material that addressed relevant and realistic issues in society and education.",
      },
      {
        date: "Jun 2022 – Oct 2022",
        place: "RM. Harmoni – Wonosobo",
        role: "Finance Administrative Assistant",
        description:
          "Maintained daily financial records and monitored cash flow. Managed the documentation of financial files including invoices, contracts, and reports to ensure organizational clarity and accountability.",
      },
      {
        date: "Jan 2021 – Mar 2021",
        place: "Kantor Kelurahan Kalikajar – Wonosobo",
        role: "Public Services Administrative Staff",
        description:
          "Contributed to efficient public service operations through data input, coordination of document flow, and citizen service. Ensured accurate information processing while maintaining data confidentiality and security.",
      },
    ],
  },
  {
    section: "Organizational & Volunteer Experience",
    subtitle:
      "Empowering communities and leading creative initiatives through collaboration, innovation, and social impact.",
    entries: [
      {
        date: "Feb 2023 – Dec 2024",
        place: "Himpunan Mahasiswa Software Engineering – Telkom University",
        role: "Head of Creative Economy Department",
        description:
          "Spearheaded the Creative Economy Division to oversee financial initiatives and channel student creativity into impactful outputs. Managed fundraising programs, digital product monetization, and merchandise planning. Facilitated collaborations to transform ideas into tangible media using tools like Canva and Figma, while supporting the organization's financial sustainability.",
      },
      {
        date: "Dec 2023 – Dec 2024",
        place: "Satria Muda – Telkom University",
        role: "Entrepreneurship Mentor",
        description:
          "Mentored student entrepreneurs in business planning, branding, and digital marketing strategy. Provided one-on-one coaching, evaluated business proposals, and helped participants refine their pitch decks for real-world application.",
      },
      {
        date: "Oct 2024",
        place: "Precompetition IBCF – Telkom University",
        role: "Event Chair",
        description:
          "Spearheaded the planning and execution of a campus-wide precompetition event for IBCF. Managed over 20 team members, scheduled competition logistics, secured sponsors, and ensured a smooth, impactful experience for all participants.",
      },
      {
        date: "Apr 28 – May 5, 2024",
        place: "FLS2N (Banyumas & Purbalingga Region)",
        role: "Volunteer Coordinator",
        description:
          "Coordinated volunteers during the National Student Art Festival (FLS2N) regional stage. Oversaw registration, venue setup, technical support, and ensured seamless communication among participants, judges, and committees.",
      },
    ],
  },
];

const achievementData = [
  {
    title: "OSC Medcom.id Awardee",
    description:
      "Awardee of national scholarship competition held by Medcom.id.",
    icon: "osc.png",
  },
  {
    title: "Innovillage 2023",
    description:
      "Participant of social innovation program by Telkom Indonesia.",
    icon: "innovillage.png",
  },
  {
    title: "P2MW & KMI Expo",
    description: "Funded startup project and national expo participant.",
    icon: "p2mw.png",
  },
  {
    title: "PKM 2023",
    description:
      "Submitted proposal to National Student Creativity Program (PKM).",
    icon: "pkm.png",
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
              style={{ maxWidth: "80%" }}
            />
          </div>
          {/* TEXT SIDE */}
          <div className="col-lg-6 text-start" data-aos="fade-right">
            <p className="text-warning fw-semibold mb-2">Hello, I'm</p>
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#845ef7" }}>
              Alfian Mutakim
            </h1>

            <p className="lead mb-4 text-light">
              Software Engineering student at{" "}
              <span className="text-danger fw-bold">Telkom University</span> who
              combines coding, UI/UX design, and administrative expertise to
              craft real‑world digital solutions.
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
                style={{ width: "160px", height: "80px" }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ height: "32px", maxWidth: "100%" }}
                />
              </div>
            ))}
          </div>
        </section>
        <br />

        <section>
          <div className="container text-center">
            <div className="text-center mb-5">
              <p className="text-primary fw-semibold mb-2 text-uppercase">
                Topics of Interest
              </p>
              <h2 className="fw-bold">
                User-Friendly and Purposeful Digital solutions.
              </h2>
            </div>

            <div className="row">
              {/* Card 1: Front-end Development */}
              <div className="col-md-4 mb-4">
                <div className="border rounded-4 p-4 shadow-sm h-100 bg-dark text-white">
                  <div className="mb-3">
                    <i className="bi bi-code-slash fs-1 text-primary"></i>
                  </div>
                  <h5 className="fw-bold">Front-end Development</h5>
                  <p className="text-light">
                    Building responsive and interactive web interfaces with
                    clean code and optimized performance.
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
                    Creating robust server-side logic and database systems that
                    support scalable applications.
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
                    Creating seamless user experiences with attention to
                    usability and aesthetic clarity.
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
                    Managing administrative workflows and digital documentation
                    for efficiency.
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
                    Producing impactful educational content and concise writing
                    for media and digital needs.
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
                    Experienced in public speaking, mentoring, and team
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="bg-dark text-white py-5 px-3">
          <div className="container">
            {/* Education Header */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6 text-center">
                <img
                  src={kampus}
                  alt="Alfian Mutakim"
                  className="img-fluid w-75"
                  style={{ maxWidth: "80%" }}
                />
              </div>
              <div className="col-md-6 text-md-start text-center">
                <p className="text-danger fw-semibold mb-2 text-uppercase">
                  Education
                </p>
                <h2 className="fw-bold mb-3">My Educational History</h2>
                <p className="text-secondary mb-0">
                  My educational history and what I have learned.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="row">
              {educationData.map((edu, index) => (
                <div className="col-12 mb-5" key={index}>
                  <div className="p-4 border-start border-4 border-danger bg-secondary bg-opacity-10 rounded shadow-sm">
                    <h6 className="text-danger mb-1">{edu.date}</h6>
                    <h5 className="fw-bold text-white">{edu.institution}</h5>
                    <p className="mb-1 fw-semibold text-white-50">
                      {edu.degree}
                    </p>
                    <p className="text-white-50 mb-0">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark text-white py-5">
          <div className="container">
            {/* Title */}
            <div className="text-center mb-5">
              <p className="text-warning fw-semibold mb-2 text-uppercase">
                What I Achieve
              </p>
              <h2 className="fw-bold">Awards & Achievements</h2>
            </div>

            {/* Cards */}
            <div className="row g-4 justify-content-center">
              {achievementData.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="text-center p-4 bg-secondary bg-opacity-10 rounded-4 h-100">
                    <img
                      src={icons[`../assets/achievements/${item.icon}`]}
                      alt={item.title}
                      style={{ height: "48px" }}
                      className="mb-3"
                    />

                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-secondary small">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark text-white py-5">
          <div className="container text-center">
            {/* Heading */}
            <div className="text-center mb-5">
              <p className="text-primary fw-semibold mb-2 text-uppercase">
                Experience
              </p>
              <h2 className="fw-bold">My Professional Journey</h2>
            </div>

            {/* Cards */}
            <div className="row justify-content-center g-4">
              {combinedExperience[0].entries.map(
                ({ date, place, role, description }, index) => {
                  const bgStyles = [
                    {
                      className: "bg-black text-white",
                      style: {
                        border: "1px solid #111111ff",
                        background:
                          "linear-gradient(145deg, #111111ff, #111111ff)",
                      },
                    },
                    {
                      className: "text-light",
                      style: {
                        backgroundColor: "#bd6b0eff",
                        background:
                          "linear-gradient(145deg, #bd6b0eff, #bd6b0eff)",
                      },
                    },
                    {
                      className: "text-white",
                      style: {
                        backgroundColor: "#50565cff",
                        background:
                          "linear-gradient(145deg, #50565cff, #50565cff)",
                      },
                    },
                    {
                      className: "text-white",
                      style: {
                        backgroundColor: "#34265fff",
                        background:
                          "linear-gradient(145deg, #34265fff, #34265fff)",
                      },
                    },
                  ];

                  const { className, style } =
                    bgStyles[index % bgStyles.length];

                  return (
                    <div className="col-md-3" key={index}>
                      <div
                        className={`p-4 rounded-4 shadow-lg position-relative h-100 ${className} card-shadow card-hover`}
                        style={{
                          ...style,
                          transition: "all 0.3s ease",
                          minHeight: "360px",
                        }}
                      >
                        {/* Icon + Badge */}
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <i className="bi bi-briefcase-fill fs-3 opacity-75"></i>
                          <span className="badge bg-light text-dark small">
                            Experience
                          </span>
                        </div>

                        {/* Metadata */}
                        <p className="mb-1 fw-semibold small fst-italic">
                          {date} — {place}
                        </p>

                        {/* Role */}
                        <h5 className="fw-bold mb-3">{role}</h5>

                        {/* Description */}
                        <p className="small mb-0" style={{ lineHeight: "1.6" }}>
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        <section className="bg-dark text-white py-5">
          <div className="container">
            <div className="text-center mb-5">
              <p className="text-warning fw-semibold mb-2 text-uppercase">
                Organizational & Volunteer Experience
              </p>
              <h2 className="fw-bold">Leadership and Collaboration</h2>
            </div>

            <div className="d-flex flex-column gap-4">
              {combinedExperience[1].entries.map(
                ({ date, place, role, description }, i) => {
                  const colors = [
                    "warning",
                    "info",
                    "success",
                    "primary",
                    "danger",
                  ];
                  const color = colors[i % colors.length]; // urutkan bergantian

                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-3 position-relative shadow-sm bg-opacity-10 bg-light border-start border-4 border-${color}`}
                    >
                      {/* Badge */}
                      <span
                        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${color} text-dark d-none d-md-inline-block`}
                        style={{ top: "1rem", left: "auto" }}
                      >
                        Org
                      </span>

                      {/* Meta info */}
                      <div className={`mb-1 small fw-semibold text-${color}`}>
                        {date} | {place}
                      </div>

                      {/* Title */}
                      <h5 className="fw-semibold text-white mb-2">{role}</h5>

                      {/* Description */}
                      <p className="text-white-50 mb-0">{description}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Decorative floating shapes ala Xolio (optional) */}
      <span className="position-absolute top-0 start-50 translate-middle-x fs-1 text-primary opacity-25">
        ★
      </span>
    </section>
  );
}

export default Hero;
