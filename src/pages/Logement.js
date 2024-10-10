// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'; // Pour accéder à l'ID du logement
// import logements from '../IDlogements';


// const Logement = () => {
//   const { id } = useParams(); // Récupère l'ID de l'URL
//   const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant
//   const [currentIndex, setCurrentIndex] = useState(0); // Gère l'index de l'image actuelle

//   const pictures = logement.pictures;

//   // Fonction pour aller à l'image suivante
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
//   };

//   // Fonction pour aller à l'image précédente
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
//     );
//   };
//   const totalStars = 5;
//   const stars = Array.from({ length: totalStars }, (_, index) => 
//     index < logement.rating ? 'filled' : 'empty'
//   )
//   return (
//     <div className="logement">
//       <div className="carousel">
//         <img 
//           src={pictures[currentIndex]} 
//           alt={`Slide ${currentIndex + 1}`} 
//           className="carousel-image" 
//         />
//         <span onClick={prevSlide} className="carousel-arrow left-arrow material-icons">arrow_back_ios</span>
//         <span onClick={nextSlide} className="carousel-arrow right-arrow material-icons">arrow_back_ios</span>
//       </div>

//       <div className="logement-details">
//         <section>
//           <article className="title-location">
//             <h2>{logement.title}</h2>
//             <p>{logement.location}</p>
//           </article>
//           <article className="info-proprio">
//             <h3>{logement.host.name}</h3>
//             <div className="img-name">
//               <img src={logement.host.picture} alt={logement.host.name} className="name-image" />
//             </div>
//           </article>
//         </section>
//         <section className="Tag-etoiles">
//           <div className="tags">
//               {logement.tags.map((tag, index) => (
//                 <span key={index} className="tag">{tag}</span>
//               ))}
//             </div>
//             <div className="rating">
//           {stars.map((star, index) => (
//             <span key={index} className={`star ${star}`}>
//               {star === 'filled' ? '★' : '☆'}
//             </span>
//           ))}
//         </div>
//         </section>

  
        
//       </div>
//     </div>
//   );
// };

// export default Logement;

import React from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer l'ID dans l'URL
import Collapse from '../composants/Collapse';
import collapseLogement from '../assets/donnes/CollapseLogement'; // Contient les titres
import logements from '../IDlogements'; // Contient les descriptions et équipements

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant

  // Si le logement n'existe pas, gérer le cas d'erreur
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      {collapseLogement.map((info) => (
        <Collapse 
          key={info.id} 
          title={info.title}
          // Vérification de la clé pour afficher soit la description, soit les équipements
          content={info.key === "description" 
            ? logement.description 
            : (
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li> // Affiche chaque équipement dans une liste à puces
                ))}
              </ul>
            )}
          className="collapse-logement"
        />
      ))}
    </div>
  );
};

export default Logement;
