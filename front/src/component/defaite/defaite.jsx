import React, { useState, useEffect } from 'react';
import defaite_gif from '../../assets/defaite.gif';
import './defaite.css';

const Defaite = () => {
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
    visible ? <img src={defaite_gif} alt="Defaite" className="defaite-gif" /> : null
  );
};

export default Defaite;
