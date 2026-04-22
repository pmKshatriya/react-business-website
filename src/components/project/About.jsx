import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Us</h2>

      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-left">
          <img src="/img/about.png" alt="about" />
        </div>

        {/* Right Side Content */}
        <div className="about-right">
          <h3>About Company</h3>
          <p>
            We are a leading company providing high-quality services to help businesses grow.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver the best solutions with innovation and reliability.
          </p>

          <h3>Our Vision</h3>
          <p>
            To become a trusted brand and help clients achieve success globally.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;