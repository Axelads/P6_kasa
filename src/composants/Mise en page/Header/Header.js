import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <h1>KASA</h1>
        </div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;