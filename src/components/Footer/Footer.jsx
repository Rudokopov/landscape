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
        <p className="footer-text">
          Остались вопросы?{" "}
          <a className="link" href="tel:+1234567890">
            +7 (964) 948-59-84
          </a>
        </p>
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
