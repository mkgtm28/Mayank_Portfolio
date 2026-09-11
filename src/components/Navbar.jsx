import { useState } from "react";
import { NavLink } from "react-router-dom";
import MgLogo from "./MgLogo";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">
  <img src="/mg-favicon.png" alt="MG" />
</span>
          <span className="logo-name">Mayank Gautam</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/resume" onClick={closeMenu}>
            Resume
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </div>

        {/* Resume Button */}
<a
  href="/Mayank_Resume.pdf"
  className="resume-btn"
  download
>
  Download Resume
  <span>↓</span>
</a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;