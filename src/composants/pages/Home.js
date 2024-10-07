import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/Background_accueil.png';
import logements from '../../IDlogements';

const Home = () => {
  console.log(logements);
  return (
    <div className="home">
      <div className="Section1">
        <img src={backgroundImage} alt="Background Accueil" className="background-image" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
       <div className="Gallery">
        {logements.slice(0, 6).map((logement) => (
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