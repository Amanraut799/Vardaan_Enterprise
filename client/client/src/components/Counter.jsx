import "./Counter.css";

function Counter() {

  const stats = [
    {
      number: "250+",
      title: "Happy Clients",
    },

    {
      number: "500+",
      title: "Projects Completed",
    },

    {
      number: "10+",
      title: "Years Experience",
    },

    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="counter-section">

      <div className="counter-container">

        {stats.map((item, index) => (

          <div className="counter-card" key={index}>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Counter;