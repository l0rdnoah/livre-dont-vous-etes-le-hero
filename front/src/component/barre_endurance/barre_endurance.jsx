import React from 'react';

const BarreDeVie = ({ enduranceMax, enduranceActuelle, taille=350 }) => {
  // Calcul du pourcentage de vie actuelle par rapport à la vie maximale
  const pourcentageVie = (enduranceActuelle / enduranceMax) * 100;

  return (
    <div style={{ width: `${taille}px`, border: '1px solid black', borderRadius: '5px', position: 'relative', height: '20px' }}>
      <div
        style={{
          backgroundColor: 'green',
          width: `${pourcentageVie}%`,
          height: '100%',
          borderRadius: '5px',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: pourcentageVie > 0 ? 'white' : 'black', // Change text color based on background
          zIndex: 1,
        }}
      >
        {enduranceActuelle} / {enduranceMax}
      </div>
    </div>

  );
};

export default BarreDeVie;