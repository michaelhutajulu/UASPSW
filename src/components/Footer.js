import React from 'react';
import './Footer.css'; // Pastikan untuk menambahkan styling footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SMAN 1 Laguboti. All rights reserved.</p>
        <p>Designed with ♥ for education.</p>
      </div>
    </footer>
  );
};

export default Footer;
