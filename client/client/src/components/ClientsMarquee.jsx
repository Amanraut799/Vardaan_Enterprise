import "./ClientsMarquee.css";

function ClientsMarquee() {

  const clients = [

    {
      image: "src/assets/client_photo/AU-Logo.svg",
    },

    {
      image: "src/assets/client_photo/IDFC-logo-website.svg",
    },

    {
      image: "src/assets/client_photo/logo-ecofy-sticky.png",
    },

    {
      image: "src/assets/client_photo/tvs_credit_logo.svg",
    },

    {
      image: "src/assets/client_photo/chola_logo.svg",
    }

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