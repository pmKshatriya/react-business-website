import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/img/logo.png" alt="logo" />
            <span>MiTx</span>
          </div>
          <p>We provide modern digital solutions for your business growth.</p>
          <p className="copyright">
            © 2026 MiTx. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

    </footer>
  );
}

export default Footer;