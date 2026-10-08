import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import heroImg from "../assets/name.png";

const menuItems = [
  { to: "/home", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certification", label: "Certification" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="container">
        <Link
          to="/home"
          className="nav-link d-flex align-items-center gap-2"
          onClick={closeMenu}
        >
          <img
            src={heroImg}
            alt="Name"
            style={{ width: "75px", height: "30px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {menuItems.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink className="nav-link" to={to} onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
