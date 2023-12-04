import React from "react";
import "../FileCSS/footer.css"
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="brand footer-brand">
        <a href="#">
          <img
            className="header-logo-image"
            src="https://img.freepik.com/free-vector/three-translucent-letters_1025-765.jpg?w=740&t=st=1701695357~exp=1701695957~hmac=28f87ea22493e73bb0e1ece2149c52c72ac796d9f07d46c4d79c7c48de01e27a"
            alt="Your App Logo"
          />
        </a>
      </div>
      <div className="container">
        <div className="site-footer-inner">
          <ul className="footer-links list-reset">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>

          <ul className="footer-social-links list-reset">
            <li>
              <a href="https://www.linkedin.com/in/mohd-saif-khan-3b4979202/">
                <span className="screen-reader-text">LinkedIn</span>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            &copy; 2023 FileDrive, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
