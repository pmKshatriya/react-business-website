import React from "react";
import "./Hero.css";

function Hero() {

  const handleClick = () => {
    alert("Welcome! Let's get started 🚀");
  };

  return (
    <section className="hero" id="home">

      {/* Left Side Image */}
      <div className="hero-left">
        <img src="/img/hero.png" alt="hero" />
      </div>

      {/* Right Side Text */}
      <div className="hero-right">
        <h1>Grow Your Business With Us</h1>
        <p>
          We provide high-quality services to boost your brand and reach your goals faster.
        </p>
        <button onClick={handleClick}>Get Started</button>
      </div>

    </section>
  );
}

export default Hero;