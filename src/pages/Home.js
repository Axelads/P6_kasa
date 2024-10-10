import React from 'react';
import logements from '../IDlogements';
import Banniere from '../composants/Banniere';
import Card from '../composants/Card';

const Home = () => {
  
  return (
    <div className="home">
      <Banniere />

      <div className="Gallery">
      {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;