import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

function FounderSpotlight() {
  return (
    <section className="founder-section">

      <motion.div
        className="founder-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE IMAGE */}

        <div className="founder-image-side">

          <div className="founder-image-wrapper">

            <img   
              src="\ceo_madem.png"
              alt="Founder"
              className="founder-image"
            />

          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}

        <div className="founder-content">

          <span className="founder-label">
            Founder & CEO
          </span>

          <h2>
            Mrs. <span>MINI CHAUHAN</span>
          </h2>

          <div className="founder-line"></div>

          <p className="founder-quote">
            “At Vardaan Enterprise, we believe in delivering ethical and transparent recovery solutions that build trust, strengthen financial stability, and create long-term value for our clients through professionalism and integrity.”
          </p>

          <p className="founder-description">
            With strong leadership and a commitment to excellence, Vardaan Enterprise continues to provide reliable loan recovery services focused on trust, compliance, efficiency, and customer satisfaction.
          </p>


        </div>

      </motion.div>

    </section>
  );
}

export default FounderSpotlight;