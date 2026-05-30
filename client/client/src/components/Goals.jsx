import "./Goals.css";

import {
  FaEye,
  FaBullseye,
  FaGem,
} from "react-icons/fa";

function Goals() {

  const goals = [
    {
      icon: <FaEye />,
      title: "Vision",
      text:
        "Our vision is to become a trusted leader in ethical loan recovery services by delivering transparent, professional, and client-focused solutions that contribute to long-term financial stability and growth."
    },

    {
      icon: <FaBullseye />,
      title: "Mission",
      text:
        "Our mission is to deliver ethical, transparent, and result-oriented loan recovery solutions that build trust, strengthen financial stability, and create long-term value for our clients through professionalism and integrity."
    },

    {
      icon: <FaGem />,
      title: "Values",
      text:
        "Our values are rooted in integrity, transparency, professionalism, and respect, guiding us to deliver responsible recovery solutions while building lasting trust and strong relationships with our clients."
    }
  ];

  return (

    <section className="goals-section">

      <div className="goals-header">

        <h2>
          Our <span>Vision</span> & Mission
        </h2>

        <div className="goals-line"></div>

      </div>

      <div className="goals-container">

        {goals.map((item, index) => (

          <div className="goal-card" key={index}>

            <div className="goal-top">

              <div className="goal-icon">
                {item.icon}
              </div>

              <div className="goal-title">
                {item.title}
              </div>

            </div>

            <p>
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Goals;




















