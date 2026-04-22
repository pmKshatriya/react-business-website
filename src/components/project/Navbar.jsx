import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo Section */}
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
          <span>MiTx</span>
        </div>

        {/* Menu */}
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;