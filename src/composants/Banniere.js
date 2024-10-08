import React from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

import homeImage from '../assets/img/Background_accueil.png';
import aboutImage from '../assets/img/Image_source2.png';

const Banniere = () => {
    const location = useLocation();
  
    return (
      <div className={`Section1 ${location.pathname === '/' ? 'home-banner' : location.pathname === '/about' ? 'about-banner' : ''}`}>
        {location.pathname === '/' ? (
          <>
            <p>Chez vous, partout et ailleurs</p>
            <img src={homeImage} alt="Accueil" className="background-image" />
          </>
        ) : location.pathname === '/about' ? (
          <img src={aboutImage} alt="A Propos" className="background-image" />
        ) : null}
      </div>
    );
  };
  
  export default Banniere;