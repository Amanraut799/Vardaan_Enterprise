import "./ContactPage.css";
import axios from "axios";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaListUl
} from "react-icons/fa";

import.meta.env.VITE_API_URL

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Failed To Send Message");
    }
  };

  return (
    <div className="contact-page">
      {/* HERO BANNER */}
      <section className="contact-banner">
        <div className="banner-overlay">
          <h1>Contact <span>Us</span></h1>
          <div className="banner-line"></div>
          <p>We are here to help you anytime.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        {/* LEFT SIDE: Contact Info */}
        <div className="contact-info-card">
          <span className="sub-title">GET IN TOUCH</span>
          <h2>Let’s Build Better <br /> Business Together</h2>
          <p className="description">
            Reach out to Vardaan Enterprises for professional consultancy,
            enterprise support, and technology-driven solutions.
          </p>

          {/* INDORE OFFICE */}
          <div className="office-card">
            <div className="office-header">
              <FaMapMarkerAlt className="header-icon" />
              <h3>INDORE</h3>
            </div>
            <div className="office-content">
              <p className="address">
                Plot No. 25, Building No. / Flat No. 401, 4th Floor, Platinum Plaza, 
                PU4, A.B. Road, Behind C-21 Mall, Indore, Madhya Pradesh – 452010
              </p>
              <div className="office-details-grid">
                <div className="office-detail">
                  <FaPhoneAlt />
                  <span>+91 8889710105</span>
                </div>
                <div className="office-detail">
                  <FaEnvelope />
                  <span>vardaanenterprises06@gmail.com</span>
                </div>
                <div className="office-detail">
                  <FaEnvelope />
                  <span>vardaanenterprises06@rediffmail.com</span>
                </div>
                <div className="office-detail">
                  <FaEnvelope />
                  <span>vardaan.ho01@gmail.com</span>
                </div>
                <div className="office-detail">
                  <FaListUl />
                  <span><b>GST NO:</b> 23BSCPC2882D1ZZ9</span>
                </div>
              </div>
            </div>
          </div>

          {/* BHOPAL OFFICE */}
          <div className="office-card">
            <div className="office-header">
              <FaMapMarkerAlt className="header-icon" />
              <h3>BHOPAL</h3>
            </div>
            <div className="office-content">
              <p className="address">
                2nd Floor, Shree Mohan Parisar, MP Nagar, Zone-1, 
                Bhopal, Madhya Pradesh – 462011
              </p>
              <div className="office-details-grid">
                <div className="office-detail">
                  <FaEnvelope />
                  <span>vardaanenterprises06@gmail.com</span>
                </div>
                <div className="office-detail">
                  <FaEnvelope />
                  <span>vardaanenterprises06@rediffmail.com</span>
                </div>
                <div className="office-detail">
                  <FaEnvelope />
                  <span>Vardaan.ho01@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Message Form */}
        <div className="contact-form-card">
          <h2>Send Message</h2>
          <p>Fill the form and our team will contact you shortly.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="feature-item">
          <div className="feature-icon"><FaHeadset /></div>
          <h3>Responsive Support</h3>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><FaHandshake /></div>
          <h3>Trusted Partnership</h3>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><FaChartLine /></div>
          <h3>Results Driven</h3>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><FaShieldAlt /></div>
          <h3>Reliable Solutions</h3>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;