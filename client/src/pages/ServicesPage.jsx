import "./ServicesPage.css";
import { useState } from "react";
import ourPresence from "/our_presence.png";
import {
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaMapMarkedAlt,
  FaUserTie,
} from "react-icons/fa";

function ServicesPage() {

  const [showMapModal, setShowMapModal] = useState(false);

  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Wide Presence",
      desc: "Strong manpower presence across Madhya Pradesh.",
    },
    {
      icon: <FaUserTie />,
      title: "Skilled Professionals",
      desc: "Experienced executives for banking & financial operations.",
    },
    {
      icon: <FaChartLine />,
      title: "Operational Excellence",
      desc: "Delivering efficiency and accuracy in every engagement.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trust & Reliability",
      desc: "Long-term partnerships through quality and commitment.",
    },
    {
      icon: <FaHandshake />,
      title: "Pan-State Coverage",
      desc: "Supporting clients with scalable business solutions.",
    },
  ];

  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="services-banner">
        <div className="banner-overlay">
          <span className="banner-tag">VARDAAN ENTERPRISES</span>
          <h1>Our <span>Services</span></h1>
          <div className="banner-line"></div>
          <p>
            Smart enterprise solutions designed for modern business growth.
          </p>
        </div>
      </section>

      {/* OPERATIONS SECTION */}
      <section className="operations-section">
        <div className="operations-container">
          {/* LEFT SIDE */}
          <div className="operations-left">
            <span>OUR PRESENCE</span>
            <h2>Operational Presence Across Madhya Pradesh</h2>
            <p>
              Vardaan Enterprises operates across multiple districts of Madhya Pradesh 
              with a strong network of skilled manpower and enterprise support services.
            </p>

            <div className="operations-stats">
              <div className="stat-box">
                <h3>25+</h3>
                <p>Operational Locations</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Skilled Executives</p>
              </div>
              <div className="stat-box">
                <h3>10+</h3>
                <p>Enterprise Clients</p>
              </div>
              <div className="stat-box">
                <h3>24/7</h3>
                <p>Operational Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="operations-right">
            <img
              src={ourPresence}
              alt="Operational Presence"
              className="presence-image"
              onClick={() => setShowMapModal(true)}
            />

            <div className="image-hint">
              Click to Expand
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      
      <section className="operations-section">
        <div className="features-header">
          <span>WHY CHOOSE US</span>
          <h2>Excellence In Every Operation</h2>
          <div className="header-underline"></div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

              {showMapModal && (
          <div
            className="map-modal-overlay"
            onClick={() => setShowMapModal(false)}
          >
            <div
              className="map-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setShowMapModal(false)}
              >
                ✕
              </button>

              <img
                src={ourPresence}
                alt="Operational Presence"
                className="map-modal-image"
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default ServicesPage;