import React, { useState, useEffect } from 'react';
import victoire_gif from '../../assets/victoire.gif';
import './victoire.css';

const Victoire = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Définir un minuteur pour masquer le composant après 2 secondes
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    // Nettoyer le minuteur lorsqu'il n'est plus nécessaire
    return () => clearTimeout(timer);
  }, []);

  // Rendre le composant visible ou non
  return (
    visible ? <img src={victoire_gif} alt="Victoire" className="victoire-gif" /> : null
  );
};

export default Victoire;
