import React from "react";
import heroImg from "../assets/name.png";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container text-center">
        {/* Logo */}
        <img src={heroImg} alt="Alfian Mutakim" style={{ height: "40px" }} className="mb-3" />

        {/* Deskripsi Singkat */}
        <p className="text-light small mb-4">
          A passionate Software Engineering student crafting real-world solutions through code, design, and collaboration.
        </p>

        {/* Garis Pemisah */}
        <hr className="border-secondary" />

        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          {/* Copyright */}
          <div className="text-light small">
            © {new Date().getFullYear()} <strong>Alfian Mutakim</strong>
          </div>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
            <span className="me-2">Follow me</span>
            <a
              href="https://wa.me/6285117495040"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fs-5"
              title="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/al_fianmutaqin?igsh=MWlyazJrYXptaWEyaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger fs-5"
              title="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alfianmutakim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fs-5"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/alfianmutaqin01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
