import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";
import alfathoniyyah from "../assets/alfathoniyyah.png";
import portofolio from "../assets/portofolio.png";
import eco from "../assets/eco.jpg";
import nukertrash from "../assets/nukertrash.png";
import nukertrash2 from "../assets/nukertrash2.png";
import esheep from "../assets/esheep.png";
import pringgading from "../assets/pringgading.png";
import komdaham from "../assets/komdaham.png";
import srs from "../assets/srs.png";

const projectData = [
  {
    title: "Nukertrash",
    subtitle: "Code Mobile App",
    image: nukertrash2,
    link: "https://github.com/alfianmutaqin01/Nukertrash",
  },
  {
    title: "Portofolio Alfian",
    subtitle: "Portofolio Pribadi",
    image: portofolio,
    link: "https://alfianmutaqin01.github.io/Protofolio.github.io/",
  },
  {
    title: "Esheep",
    subtitle: "UI/UX Mobile App Farm",
    image: esheep,
    link: "https://www.figma.com/design/pQSEfOB9qwshsTJwIFuSQD/E-Sheep?node-id=525-326&p=f&t=qFynBF8azUequ4hP-0",
  },
  {
    title: "Komdaham Kab. Wonosobo",
    subtitle: "Website Management Komdaham",
    image: komdaham,
    link: "https://github.com/alfianmutaqin01/KOMNASHAM",
  },
  {
    title: "Al-Fathoniyyah",
    subtitle: "Website Profil Sekolah",
    image: alfathoniyyah,
    link: "https://alfathoniyyah.rumah-al.com/",
  },
  {
    title: "Restaurant Pringgading",
    subtitle: " UI/UX Web RM. Pringgading",
    image: pringgading,
    link: "https://www.figma.com/design/SDencdlxvX7mxuej4E69i6/Untitled?node-id=426-353&t=pbFUR6CDHcreJmi0-0",
  },
  {
    title: "SRS dan SDD Document",
    subtitle: "Dokumentasi Proyek",
    image: srs,
    link: "https://drive.google.com/drive/folders/1-Z2V_vqO7Tl-dCpOvBXLBFJyFhr2Vcx_?usp=sharing",
  },
  {
    title: "Echo Weather",
    subtitle: "UI/UX Aplikasi Cuaca Lokal",
    image: eco,
    link: "https://www.figma.com/design/lIOnl6g7q3TdZFeByTx32K/eco-weather?t=8gIIyC421jWu9doS-0",
  },
  {
    title: "Nukertrash",
    subtitle: "UI/UX Mobile App Trash",
    image: nukertrash,
    link: "https://www.figma.com/design/he2Cc27uk5fx502hrlwrGz/NUKERTRASH?node-id=0-1&p=f&t=rLujUbf2aE2rZCV5-0",
  }
];

function Project() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="bg-dark text-white py-5">
      <div className="container text-center">
        <p className="text-warning fw-bold mb-1">Portfolio</p>
        <h2 className="fw-bold display-5 mb-4">
          UI/UX and Application Design
        </h2>
        <p className="text-light mb-4">
          Some recent work that showcases creativity, detail, and function.
        </p>

        {/* Grid */}
        <div className="row g-4">
          {projectData.map((project, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <a
                href={project.link}
                className="project-card d-block position-relative overflow-hidden rounded-4"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid w-100 rounded-4"
                />
                <div className="project-overlay text-start p-3">
                  <h5 className="fw-bold mb-1">{project.title}</h5>
                  <p className="small mb-0">{project.subtitle}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
