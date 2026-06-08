import "./Hero.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Hero() {

  const slides = [

    {
      title: "Empowering Businesses Through Smart Recovery",
      highlight: "Smart Recovery",
      desc:
        "Ethical debt recovery solutions, professional consultancy, and reliable financial support services.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    },

    {
      title: "Delivering Recovery Solutions With ",
      highlight: "Trust & Transparency",
      desc:
        "Delivering ethical and efficient loan recovery solutions built on trust, transparency, and professional excellence.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },

    {
      title: "Integrity Driven Recovery ",
      highlight: "Solutions.",
      desc:
        "Providing integrity-driven recovery solutions focused on professionalism, transparency, and reliable financial support.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [slides.length]);

  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  };

  const prevSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  };

  return (

    <section className="hero">

      {/* BACKGROUND SLIDES */}

      {slides.map((slide, index) => (

        <div
          key={index}
          className={
            index === currentSlide
              ? "hero-slide active"
              : "hero-slide"
          }
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(15,23,42,0.82),
                rgba(15,23,42,0.82)
              ),
              url(${slide.image})
            `,
          }}
        ></div>

      ))}

      {/* LEFT BUTTON */}

      <button
        className="carousel-btn left-btn"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* RIGHT BUTTON */}

      <button
        className="carousel-btn right-btn"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* CONTENT */}

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>

            {slides[currentSlide].title
              .split(slides[currentSlide].highlight)[0]}

            <span>
              {slides[currentSlide].highlight}
            </span>

          </h1>

          <div className="hero-line"></div>

          <p>
            {slides[currentSlide].desc}
          </p>

          <div className="hero-buttons">
              <Link to="/services">
                <button className="primary-btn">
                  Explore Services
                </button>
              </Link>

            <Link to="/contact">

              <button className="secondary-btn">
                Contact Us
              </button>

            </Link>

          </div>

          {/* DOTS */}

          <div className="hero-dots">

            {slides.map((_, index) => (

              <span
                key={index}
                className={
                  currentSlide === index
                    ? "dot active-dot"
                    : "dot"
                }
                onClick={() => setCurrentSlide(index)}
              ></span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;