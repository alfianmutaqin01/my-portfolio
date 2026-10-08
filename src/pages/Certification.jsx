import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Lightbox from "../components/Lightbox";
import {
  certifications,
  certificationCategories,
  featuredCertification,
} from "../data/certifications";
import "./Certification.css";

const images = import.meta.glob("../assets/certificates/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const imageUrl = (fileName) => images[`../assets/certificates/${fileName}`];

const categoryLabel = Object.fromEntries(
  certificationCategories.map(({ id, label }) => [id, label])
);

const countFor = (id) =>
  id === "all"
    ? certifications.length
    : certifications.filter((c) => c.category === id).length;

const summary = [
  { value: certifications.length + 1, label: "Certificates" },
  { value: 1, label: "National competency (BNSP)" },
  { value: countFor("teaching"), label: "Teaching assignments" },
  { value: countFor("achievements"), label: "Awards, funding & IP" },
];

function Certification() {
  const [filter, setFilter] = useState("all");
  const [preview, setPreview] = useState(null);

  const visible =
    filter === "all"
      ? certifications
      : certifications.filter((c) => c.category === filter);

  const openPreview = (cert) =>
    setPreview({ ...cert, src: imageUrl(cert.image) });

  return (
    <div className="cert-page text-white">
      {/* ---------- HEADER ---------- */}
      <section className="pt-5 pb-4">
        <div className="container text-center" data-aos="fade-up">
          <p className="section-eyebrow mb-2">Certifications</p>
          <h1 className="display-5 fw-bold mb-3">Proof, not just promises</h1>
          <p className="section-lead mb-5">
            Certificates from national programs, teaching assignments, workshops,
            and events. Click any of them to take a closer look.
          </p>

          <div className="row g-3 justify-content-center">
            {summary.map((item, i) => (
              <div
                className="col-6 col-lg-3"
                key={item.label}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="cert-stat">
                  <div className="cert-stat-value">{item.value}</div>
                  <div className="cert-stat-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED ---------- */}
      <section className="py-5">
        <div className="container">
          <article className="cert-featured" data-aos="fade-up">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6">
                <button
                  type="button"
                  className="cert-featured-media"
                  onClick={() => openPreview(featuredCertification)}
                  aria-label={`Preview ${featuredCertification.title}`}
                >
                  <img
                    src={imageUrl(featuredCertification.image)}
                    alt={featuredCertification.title}
                  />
                  <span className="cert-zoom">
                    <i className="bi bi-zoom-in"></i>
                  </span>
                </button>
              </div>
              <div className="col-lg-6 p-4 p-lg-5 text-start">
                <span className="cert-ribbon mb-3">
                  <i className="bi bi-patch-check-fill me-2"></i>
                  Highlighted Certification
                </span>
                <h2 className="fw-bold mb-1">{featuredCertification.title}</h2>
                <p className="cert-issuer mb-3">
                  {featuredCertification.issuer} · {featuredCertification.date}
                </p>
                <p className="cert-text mb-4">{featuredCertification.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="cert-button cert-button-primary"
                    onClick={() => openPreview(featuredCertification)}
                  >
                    <i className="bi bi-eye me-2"></i>Preview
                  </button>
                  <a
                    href={featuredCertification.link}
                    className="cert-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>Original File
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- ALL CERTIFICATES ---------- */}
      <section className="py-5">
        <div className="container">
          <SectionHeading eyebrow="All Certificates" title="The full collection" />

          <div
            className="d-flex flex-wrap justify-content-center gap-2 mb-5"
            role="tablist"
            aria-label="Filter certificates"
          >
            {certificationCategories.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                className={`filter-pill ${filter === id ? "is-active" : ""}`}
                onClick={() => setFilter(id)}
              >
                {label}
                <span className="filter-count">{countFor(id)}</span>
              </button>
            ))}
          </div>

          <div className="row g-4" key={filter}>
            {visible.map((cert, i) => (
              <div
                className="col-sm-6 col-lg-4 cert-enter"
                key={cert.title}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <button
                  type="button"
                  className="cert-card"
                  onClick={() => openPreview(cert)}
                  aria-label={`Preview ${cert.title}`}
                >
                  <div className="cert-media">
                    <img src={imageUrl(cert.image)} alt="" loading="lazy" />
                    <span className="cert-zoom">
                      <i className="bi bi-zoom-in"></i>
                    </span>
                  </div>
                  <div className="cert-body">
                    <span className="cert-category">{categoryLabel[cert.category]}</span>
                    <h5 className="fw-bold mt-2 mb-1">{cert.title}</h5>
                    <p className="cert-issuer small mb-1">{cert.issuer}</p>
                    <p className="cert-date mb-0">
                      <i className="bi bi-calendar3 me-1"></i>
                      {cert.date}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {preview && (
        <Lightbox
          src={preview.src}
          title={preview.title}
          subtitle={`${preview.issuer} · ${preview.date}`}
          action={{
            href: preview.link,
            label: "Open original file",
            icon: "bi-box-arrow-up-right",
          }}
          onClose={() => setPreview(null)}
        />
      )}
    </div>
  );
}

export default Certification;
