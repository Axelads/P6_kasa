import React from 'react';
import Header from './Mise en page/Header/Header';
import Footer from './Mise en page/Footer/Footer';
import './Layout.scss';

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