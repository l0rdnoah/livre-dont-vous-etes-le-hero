import React, { useState } from 'react';
import './Dice.css'; // Assure-toi d'ajouter ce fichier pour le style.

const Dice = () => {
  const [value, setValue] = useState(1);

  const rollDice = () => {
    // Générer une valeur aléatoire entre 1 et 6
    const newValue = Math.floor(Math.random() * 6) + 1;
    setValue(newValue);
  };

  return (
    <div className="dice" onClick={rollDice}>
      {value}
    </div>
  );
};

export default Dice;
