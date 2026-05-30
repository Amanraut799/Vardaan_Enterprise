import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo_new.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper utility to safely toggle state values
  const handleNavigationClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={handleNavigationClick}>
          <img
            src={logo}
            alt="Vardaan Enterprise Logo"
            className="logo-img"
          />
        </Link>
      </div>

      <nav>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={handleNavigationClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavigationClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleNavigationClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={handleNavigationClick}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavigationClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Accessible, CSS-animated interactive hamburger token */}
      <button 
        className={menuOpen ? "hamburger open" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;