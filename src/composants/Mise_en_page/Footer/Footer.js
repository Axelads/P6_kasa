import React from 'react';
import './Footer.scss';
import footerImage from '../../../assets/img/footerLogo.png' 
const Footer = () => {
  return (
    <footer className="footer">
      <section className="section_footer">
        <img src={footerImage} alt="© 2020 Kasa. All rights reserved" className="footer-image" />
        <p>© 2020 Kasa. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;