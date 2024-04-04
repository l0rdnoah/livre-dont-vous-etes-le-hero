import React from 'react';

const BarreDeVie = ({ enduranceMax, enduranceActuelle, taille=350 }) => {
  // Calcul du pourcentage de vie actuelle par rapport à la vie maximale
  const pourcentageVie = (enduranceActuelle / enduranceMax) * 100;

  return (
    <div style={{ width: `${taille}px`, border: '1px solid black', borderRadius: '5px'}}>
      <div
        style={{
          backgroundColor: 'green',
          width: `${pourcentageVie}%`,
          height: '20px',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >{enduranceActuelle} / {enduranceMax}</div>
    </div>
  );
};

export default BarreDeVie;