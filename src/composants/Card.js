import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className="card-link"> 
      <div className="logement-card">
        <img src={logement.cover} alt={logement.title} className="logement-cover" />
        <h2 className="logement-title">{logement.title}</h2>
      </div>
    </Link>
  );
};

export default Card;