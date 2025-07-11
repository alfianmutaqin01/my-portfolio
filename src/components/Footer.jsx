import React from "react";
import heroImg from '../assets/name.png';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container text-center">
        {/* Logo */}
        <img src={heroImg} alt="Logo" style={{ height: "40px" }} className="mb-3" />

        {/* Tagline */}
        <p className="text-muted small mb-4">
          Agency is a full-service agency, busy designing and building beautiful digital <br />
          products, brands, and experiences.
        </p>

        {/* Divider */}
        <hr className="border-secondary" />

        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          {/* Copyright */}
          <div className="text-muted small">
            © {new Date().getFullYear()}, <strong>Creative Agency</strong>.
          </div>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            <span className="me-2">Follow us</span>
            <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white fs-5"><i className="bi bi-behance"></i></a>
            <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
