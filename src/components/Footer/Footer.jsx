import React from "react";
import "./Footer.scss";
import { FaTelegramPlane, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="scroll-up" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp />
        </button>
        <p className="footer-text">Made by Rudokopov</p>
        <div className="footer-icons">
          <a
            href="https://telegram.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
