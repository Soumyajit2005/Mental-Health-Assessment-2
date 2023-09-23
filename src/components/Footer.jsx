import React from "react";
import "../styles/Footer.css"; // Import your custom CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} PsycheWell</p>
          <p>Contact us at: psycvhewell123@example.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;