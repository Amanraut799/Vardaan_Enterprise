import "./ServicesPage.css";
import { useState } from "react";
import ourPresence from "/our_presence.png";
import {
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaMapMarkedAlt,
  FaUserTie,
  FaEye
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

  const presenceData = [
    { cityLeft: "BALAGHAT", execLeft: 1, cityRight: "MHOW", execRight: 1 },
    { cityLeft: "BETUL", execLeft: 1, cityRight: "MORENA", execRight: 1 },
    { cityLeft: "BHIND", execLeft: 1, cityRight: "NARSINGHPUR", execRight: 1 },
    { cityLeft: "BHOPAL", execLeft: 12, cityRight: "RAISEN", execRight: 1 },
    { cityLeft: "CHINDWADA", execLeft: 1, cityRight: "RAJGARH", execRight: 1 },
    { cityLeft: "DEWAS", execLeft: 2, cityRight: "RATLAM", execRight: 1 },
    { cityLeft: "DHAR", execLeft: 3, cityRight: "REWA/SATNA", execRight: 1 },
    { cityLeft: "GUNA", execLeft: 1, cityRight: "SAGAR", execRight: 1 },
    { cityLeft: "GWALIOR", execLeft: 3, cityRight: "SEHORE/ASTA", execRight: 1 },
    { cityLeft: "HOSANGABAD", execLeft: 1, cityRight: "SEONI", execRight: 1 },
    { cityLeft: "INDORE", execLeft: 11, cityRight: "SHIVPURI", execRight: 1 },
    { cityLeft: "JABALPUR", execLeft: 2, cityRight: "SHINGROLI-SIDHI", execRight: 1 },
    { cityLeft: "KATNI", execLeft: 1, cityRight: "UJJAIN", execRight: 4 },
    { cityLeft: "KHARGONE", execLeft: 1, cityRight: "", execRight: "" },
  ];

  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="services-banner">
        <div className="banner-overlay">
          <span className="banner-badge">WHAT WE OFFER</span>
          <h1>Our <span>Services</span></h1>
          <div className="hero-line"></div>
          <p>Smart enterprise solutions engineered meticulously for modern scale and business growth.</p>
        </div>
      </section>

      {/* OPERATIONS SECTION */}
      <section className="operations-section">
        <div className="operations-container">
          {/* LEFT SIDE */}
          <div className="operations-left">
            <span className="section-tag">OUR PRESENCE</span>
            <h2>Operational Presence Across Madhya Pradesh</h2>
            <p>
              Vardaan Enterprises operates across multiple premium sectors and key districts of Madhya Pradesh 
              with an optimized, robust network of skilled manpower and enterprise support frameworks.
            </p>

            <div className="operations-stats">
              <div className="stat-box">
                <div className="stat-circle"><h3>25+</h3></div>
                <p>Operational Locations</p>
              </div>
              <div className="stat-box">
                <div className="stat-circle"><h3>50+</h3></div>
                <p>Skilled Executives</p>
              </div>
              <div className="stat-box">
                <div className="stat-circle"><h3>10+</h3></div>
                <p>Enterprise Clients</p>
              </div>
              <div className="stat-box">
                <div className="stat-circle"><h3>24/7</h3></div>
                <p>Operational Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="operations-right" onClick={() => setShowMapModal(true)}>
            <div className="image-frame">
              <img src={ourPresence} alt="Operational Presence Map" className="presence-image" />
              <div className="image-overlay-layer">
                <div className="hint-pill">
                  <FaEye /> <span>Click to Expand Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEWIDE NETWORK GRID TABLE */}
      <section className="presence-section">
        <div className="features-header">
          <span className="section-tag">STATEWIDE NETWORK</span>
          <h2>Skilled Manpower Allocation Metrics</h2>
          <div className="header-underline"></div>
        </div>

        <div className="presence-wrapper">
          <div className="presence-table-container">
            <table className="custom-presence-table">
              <thead>
                <tr>
                  <th>CITY</th>
                  <th className="count-col">EXECUTIVES</th>
                  <th>CITY</th>
                  <th className="count-col">EXECUTIVES</th>
                </tr>
              </thead>
              <tbody>
                {presenceData.map((row, index) => (
                  <tr key={index}>
                    <td className="city-name">{row.cityLeft}</td>
                    <td className="count-col"><span className={`count-badge ${row.execLeft > 5 ? 'high' : ''}`}>{row.execLeft}</span></td>
                    <td className="city-name">{row.cityRight || "—"}</td>
                    <td className="count-col">
                      {row.execRight !== "" ? (
                        <span className={`count-badge ${row.execRight > 5 ? 'high' : ''}`}>{row.execRight}</span>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section-block">
        <div className="features-header">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2>Excellence In Every Single Operation</h2>
          <div className="header-underline"></div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="feature-card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MAP MODAL */}
      {showMapModal && (
        <div className="map-modal-overlay" onClick={() => setShowMapModal(false)}>
          <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowMapModal(false)}>✕</button>
            <img src={ourPresence} alt="Operational Presence Expanded" className="map-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;