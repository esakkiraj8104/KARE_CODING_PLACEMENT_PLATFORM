// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>KARE Coding Platform</h4>
        <p>Empowering Students for Future Placements</p>
        <div className="footer-contact">
          <span>Email: placement@klu.ac.in</span> | 
          <span> Phone: +91 7397760760 / 04563 289042</span>
        </div>
        <div className="footer-credit">
          <p>© 2025 | Built by <strong>KARE STUDENTS</strong> | Dept of IT, KARE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
