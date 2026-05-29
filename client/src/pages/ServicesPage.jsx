import "./ServicesPage.css";
import {
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaMapMarkedAlt,
  FaUserTie,
} from "react-icons/fa";

function ServicesPage() {
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
          <h1>Core <span>Services</span></h1>
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
              src="/src/assets/our_presence.png"
              alt="Operational Presence"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40";
              }}
            />
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
    </div>
  );
}

export default ServicesPage;