import React, { useState, useEffect } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import logements from '../../IDlogements';
import Banniere from '../Banniere';

const Home = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Verification de la taille d'ecran
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Nettoie le listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      <Banniere />

      <div className="Gallery">
        {logements.slice(0, isMobileView ? 3 : 6).map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <div className="logement-card">
              <h2 className="logement-title">{logement.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;