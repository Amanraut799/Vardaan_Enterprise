import "./Footer.css";

import logo from "../assets/logo_new.png";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <img
            src={logo}
            alt="Vardaan Enterprise Logo"
            className="footer-logo"
          />

          {/* <p>
            Empowering businesses through smart recovery,
            professional consultancy, and reliable enterprise
            solutions for long-term financial growth.
          </p> */}

          {/* <div className="footer-socials">

            <a href="/">
              <FaLinkedinIn />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

          </div> */}

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>

        </div>

        {/* SERVICES */}

        <div className="footer-links">

          <h3>Our Services</h3>

          <a href="/">Debt Recovery</a>
          <a href="/">Business Consultancy</a>
          <a href="/">Customer Support</a>
          <a href="/">Recovery Solutions</a>
          <a href="/">Enterprise Services</a>
          <a href="https://vardaantechhub.com">Vardaan Tech Hub </a>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>
            Vardaan.ho01@gmail.com
          </p>

          <p>
            +91 8889710105
          </p>

          <p>
            Indore, Madhya Pradesh, India
          </p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Vardaan Enterprise.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  );
}

export default Footer;