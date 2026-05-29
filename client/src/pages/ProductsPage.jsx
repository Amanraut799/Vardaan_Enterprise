import "./ProductsPage.css";
import {
  FaHeadset,
  FaChartLine,
  FaSearch,
  FaGraduationCap,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

function ProductsPage() {
  const Products = [
    {
      icon: <FaHeadset />,
      title: "Customer Support Solutions",
      desc: "Responsive inbound & outbound support ensuring superior customer experience.",
    },
    {
      icon: <FaChartLine />,
      title: "Inbound Tele-Marketing",
      desc: "Structured engagement models focused on lead qualification and conversion growth.",
    },
    {
      icon: <FaSearch />,
      title: "Surveys & Market Research",
      desc: "Customized research solutions delivering actionable insights for businesses.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Training & Quality Assurance",
      desc: "Performance-oriented training and quality frameworks for service excellence.",
    },
    {
      icon: <FaUsers />,
      title: "Skilled Manpower Solutions",
      desc: "Deployment of trained professionals for enterprise operations and services.",
    },
    {
      icon: <FaCogs />,
      title: "Technology-Enabled Operations",
      desc: "Secure automation and analytics systems for consistent service delivery.",
    },
  ];

  return (
    <div className="products-page">
      {/* =========================
          HERO BANNER
      ========================= */}
      <section className="products-banner">
        <div className="banner-overlay">
          <h1>Our <span>Products</span></h1>
          <div className="banner-line"></div>
          <p>
            Smart enterprise solutions designed for modern business growth.
          </p>
        </div>
      </section>

      {/* =========================
          SERVICES / PRODUCTS SECTION
      ========================= */}
      <section className="services-section">
        <div className="section-header">
          <span>WHAT WE OFFER</span>
          <h2>Professional Business Solutions</h2>
          <div className="header-underline"></div>
        </div>

        <div className="products-grid">
          {Products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="card-icon-wrapper">
                {product.icon}
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
              <div className="card-hover-border"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;