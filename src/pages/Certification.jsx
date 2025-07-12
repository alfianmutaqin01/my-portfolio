import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Certification.css";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";
import cert7 from "../assets/cert7.png";
import cert8 from "../assets/cert8.png";
import cert9 from "../assets/cert9.png";
import cert10 from "../assets/cert10.png";
import cert11 from "../assets/cert11.png";
import cert12 from "../assets/cert12.png";
import cert13 from "../assets/cert13.png";
import cert14 from "../assets/cert14.png";
import cert15 from "../assets/cert15.png";

const certifications = [
  {
    title: "BNSP WEB Developer",
    issuer: "BBPVP Semarang",
    date: "Aug 2024",
    image: cert1,
    link: "https://drive.google.com/file/d/1GN4CCh3ug4l0CVzDx7mRIV7BhEe9HcWS/view?usp=sharing",
  },
  {
    title: "HKI Aplikasi Nukertrash",
    issuer: "Centra Inovasi TUP",
    date: "May 2024",
    image: cert2,
    link: "https://drive.google.com/file/d/1b5oeNCASIaB08V65adn3RyPEwiwDuEO1/view?usp=sharing",
  },
  {
    title: "NIB Central Sablon",
    issuer: "Kewirausahaan",
    date: "Aug 2023",
    image: cert3,
    link: "https://drive.google.com/file/d/14WmDBlPUkHYrM8bs7Uy_CEynL1zZhqfE/view?usp=sharing",
  },
  {
    title: "TOP 1 PKM Fakultas",
    issuer: "Fakultas Informatika",
    date: "Des 2022",
    image: cert4,
    link: "https://drive.google.com/file/d/1f1JpIhT9nk6lYeICiTkNthzrHvniHNBC/view?usp=sharing",
  },
  {
    title: "Pendanaan P2MW Nasional",
    issuer: "Simbelmawa",
    date: "Jul 2023",
    image: cert5,
    link: "https://drive.google.com/file/d/1ouQZKoASv7upx8_k6F4wvEc-TSAVodM5/view?usp=sharing",
  },
  {
    title: "Innovillage 2023",
    issuer: "Telkom Indonesia",
    date: "Feb 2024",
    image: cert6,
    link: "https://drive.google.com/file/d/1_V5lKdy9PQD91TIxrieuzi_lXerhdto0/view?usp=sharing",
  },
  {
    title: "Asisten Praktikum Pemrograman 1",
    issuer: "S1 Software Engineering",
    date: "Jun 2024",
    image: cert7,
    link: "https://drive.google.com/file/d/1bBso-Di1CutyBfPlmIvCdZ8QHEWmZJVw/view?usp=sharing",
  },
  {
    title: "Asisten Praktikum Sistem Operasi",
    issuer: "S1 Sistem Informasi",
    date: "Jan 2025",
    image: cert8,
    link: "https://drive.google.com/file/d/1lY-5ev4XjHpULqStc7NGy7YWAipAo21W/view?usp=sharing",
  },
  {
    title: "Asisten Praktikum Web Dev",
    issuer: "S1 Sistem Informasi",
    date: "Mei 2025",
    image: cert9,
    link: "https://drive.google.com/file/d/1k7ssPoxVbthbPXbBMFHUr2rD3PchMy-j/view?usp=sharing",
  },
  {
    title: "Intrenship HMSE Tel-U",
    issuer: "Telkom University Purwokerto",
    date: "Feb - Jun 2023",
    image: cert10,
    link: "https://drive.google.com/file/d/1YSX2eZ4EJi3twHFBiOLzAqm5l4jJi29q/view?usp=sharing",
  },
  {
    title: "International Bandung Choral Festival",
    issuer: "Bandung Choral Society",
    date: "Nov 2023",
    image: cert11,
    link: "https://drive.google.com/file/d/1uZgO3Hbgi6yMmhLZ-lLl09HLE8bSlHq8/view?usp=sharing",
  },
  {
    title: "ISEC 2023 Simbelmawa",
    issuer: "Simbelmawa",
    date: "Aug 2023",
    image: cert12,
    link: "https://drive.google.com/file/d/1ornCbWRPr4NPP7_t5G2Bfk6HhESLSQFE/view?usp=sharing",
  },
  {
    title: "Ngoprek UI/UX HMSE",
    issuer: "HMSE Tel-U Purwokerto",
    date: "Apr - Mei 2023",
    image: cert13,
    link: "https://drive.google.com/file/d/13-SQvb-eYti80INGXPhaOZ-AwHWBeTIW/view?usp=sharing",
  },
  {
    title: "Making A To do List Web",
    issuer: "MySkill.id",
    date: "Mar 2024",
    image: cert14,
    link: "https://drive.google.com/file/d/1oWgZ6VYKtP09OG55QmQ9zWPFYDSPYM87/view?usp=sharing",
  },
  {
    title: "Devisi Acara Fls2n Kab. banyumas dan Kab. Purbalingga",
    issuer: "Tel-u X Fls2n 2024",
    date: "Mei 2024",
    image: cert15,
    link: "https://drive.google.com/file/d/1rkMJzmF_5yq_QXgEARzrU88-cjYYwGXI/view?usp=sharing",
  },
];

function Certification() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold text-warning display-5 mb-3">
          My Certifications
        </h2>
        <p className="text-light mb-5 fs-5">
          Verified accomplishments from educational programs and workshops
        </p>

        <div className="row g-4 justify-content-center">
          {certifications.map((cert, i) => (
            <div className="col-sm-6 col-md-4" key={i}>
              <a
                href={cert.link}
                className="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="bg-light rounded-4 overflow-hidden shadow-lg cert-card h-100"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-100 cert-image"
                  />
                  <div className="p-3 text-dark text-start">
                    <h5 className="fw-bold mb-1">{cert.title}</h5>
                    <p className="mb-1 text-muted small">{cert.issuer}</p>
                    <p className="mb-0 text-secondary small">{cert.date}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
