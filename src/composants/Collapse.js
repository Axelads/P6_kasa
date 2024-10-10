import React, { useState } from 'react';
import { Icon } from '@material-ui/core'; // Si tu utilises Material UI pour les icônes
import { useLocation } from 'react-router-dom'; // Pour vérifier l'URL de la page

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtenir l'URL actuelle

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour éviter la duplication de classes
  const getClassName = (baseClass) => {
    return className && className.includes(baseClass) ? className : `${baseClass} ${className || ''}`;
  };

  return (
    <>
      {location.pathname === "/about" && ( // Afficher le collapse-about seulement sur la page Apropos
        <div className={getClassName("collapse-about")}>
          <div className="collapse-header" onClick={toggleCollapse}>
            <h3>{title}</h3>
            <span className={`arrow ${isOpen ? 'open' : ''}`}>
              <Icon>arrow_back_ios</Icon>
            </span>
          </div>
          <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
            <p>{content}</p>
          </div>
        </div>
      )}

      {location.pathname.startsWith("/logement") && ( // Afficher le collapse-logement seulement sur la page Logement
        <div className={getClassName("collapse-logement")}>
          <div className="collapse-header" onClick={toggleCollapse}>
            <h3>{title}</h3>
            <span className={`arrow ${isOpen ? 'open' : ''}`}>
              <Icon>arrow_back_ios</Icon>
            </span>
          </div>
          <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
            <div>{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Collapse;
