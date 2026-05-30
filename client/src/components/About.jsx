import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-section">

      {/* BACKGROUND GLOW */}
      <div className="about-glow"></div>

      <div className="about-container">

        {/* IMAGE SIDE */}

        <div className="about-image">

          <div className="image-border"></div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Vardaan Enterprise"
          />

        </div>

        {/* CONTENT SIDE */}

        <div className="about-content">

          <span className="about-tag">
            ABOUT US
          </span>

           <div className="hero-line"></div>


          <h2>
            Smart Solutions For
            <span> Business Growth</span>
          </h2>

          <div className="about-line"></div>

          <p>
            <strong>Vardaan Enterprises</strong> is a trusted provider of
            <span> smart, technology-driven BPO solutions</span>
            for the Banking & Financial Services sector.
            We help organizations streamline operations through
            skilled manpower, advanced technology and process excellence.
          </p>

          <p>
            We specialize in
            <span>
              {" "}
              customer support, tele-marketing,
              market research and training services
            </span>
            , delivered through our scalable
            <span> Build–Operate–Train (BOT)</span> model.
            At Vardaan Enterprises, we focus on enabling
            growth, operational efficiency and long-term success.
          </p>

          

          {/* BUTTON */}
          <Link to="/about" >
            <button>
            Learn More
           </button>
          </Link>
          

        </div>

      </div>

    </section>
  );
}

export default About;