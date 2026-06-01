import "./ClientsMarquee.css";
import auLogo from "/client_photo/AU-Logo.svg";
import idfcLogo from "/client_photo/IDFC-logo-website.svg";
import ecofyLogo from "/client_photo/logo-ecofy-sticky.png";
import tvsLogo from "/client_photo/tvs_credit_logo.svg";
import cholaLogo from "/client_photo/chola_logo.svg";
import Bajaj_Finance from "/client_photo/Bajaj_Finance_Logo_2025.svg";

function ClientsMarquee() {

 const clients = [
  { image: auLogo },
  { image: idfcLogo },
  { image: ecofyLogo },
  { image: tvsLogo },
  { image: Bajaj_Finance },
  { image: cholaLogo }
];

  return (

    <section className="clients-section">

      <div className="clients-header">

        <span>OUR CLIENTS</span>

        <h2>
          Trusted By Growing
          Businesses
        </h2>

        <div className="clients-line"></div>

      </div>

      <div className="marquee">

        <div className="marquee-content">

          {clients.map((client, index) => (

            <div className="client-card" key={index}>

              <img
                src={client.image}
                alt="Client Logo"
                className="client-logo"
              />

            </div>

          ))}

          {/* DUPLICATE FOR SMOOTH LOOP */}

          {clients.map((client, index) => (

            <div
              className="client-card"
              key={index + "duplicate"}
            >

              <img
                src={client.image}
                alt="Client Logo"
                className="client-logo"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default ClientsMarquee;