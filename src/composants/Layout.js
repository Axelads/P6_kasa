import React from 'react';
import Header from './Mise_en_page/Header/Header';
import Footer from './Mise_en_page/Footer/Footer';
import '../index.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;