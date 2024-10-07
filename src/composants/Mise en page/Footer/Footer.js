import React from 'react';
import './Footer.scss';
import footerImage from '../../img/Footer_Size=Desktop.png' 
const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerImage} alt="© 2020 Kasa. All rights reserved" className="footer-image" />
    </footer>
  );
};

export default Footer;