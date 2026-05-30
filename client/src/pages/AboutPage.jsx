import "./AboutPage.css";

import {
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaLaptopCode,
  FaUserTie,
} from "react-icons/fa";

function AboutPage() {
  return (
    <div className="about-page">

      {/* =========================
          HERO BANNER
      ========================= */}

      <section className="about-banner">

        <div className="banner-overlay">

          <h1>
            About <span>Us</span>
          </h1>

          <div className="hero-line"></div>

          <p>
            Smart Solutions. Stronger Tomorrow.
          </p>

        </div>

      </section>

      {/* =========================
          IMAGE SECTION
      ========================= */}

      <section className="about-images-section">

        <div className="about-images">

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="Finance"
            />
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Business"
            />
          </div>

        </div>

      </section>

      {/* =========================
          ABOUT CONTENT
      ========================= */}

      <section className="about-content-section">

        <div className="about-content-card">

          <div className="content-row">

            <div className="content-icon">
              <FaShieldAlt />
            </div>

            <div className="content-text">

              <p>
                <strong>Vardaan Enterprises</strong> is a trusted provider of
                <span> smart, technology-driven BPO </span>
                solutions for the
                <span> Banking & Financial Services </span>
                sector. With a strong presence in
                <span> Madhya Pradesh, </span>
                we help organizations streamline operations through skilled
                manpower, advanced technology, and process excellence.
              </p>

            </div>

          </div>

          <div className="divider"></div>

          <div className="content-row">

            <div className="content-icon">
              <FaUsers />
            </div>

            <div className="content-text">

              <p>
                We specialize in
                <span> customer support, tele-marketing, market research, </span>
                and
                <span> training & quality services, </span>
                delivered through our scalable
                <span> Build–Operate–Train (BOT) </span>
                model. At Vardaan Enterprises, we don’t just support businesses —
                we
                <span> enable growth, efficiency, </span>
                and
                <span> long-term success.</span>
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FEATURES
      ========================= */}

      <section className="features-section">

        <div className="feature-item">

          <div className="feature-icon">
            <FaUserTie />
          </div>

          <h3>
            Skilled
            <br />
            Manpower
          </h3>

        </div>

        <div className="feature-item">

          <div className="feature-icon">
            <FaLaptopCode />
          </div>

          <h3>
            Advanced
            <br />
            Technology
          </h3>

        </div>

        <div className="feature-item">

          <div className="feature-icon">
            <FaChartLine />
          </div>

          <h3>
            Process
            <br />
            Excellence
          </h3>

        </div>

        <div className="feature-item">

          <div className="feature-icon">
            <FaHandshake />
          </div>

          <h3>
            Long-term
            <br />
            Success
          </h3>

        </div>

      </section>

    </div>
  );
}

export default AboutPage;