import React, { useState, useEffect } from 'react';
import recevoir_degats_gif from '../../assets/img/combat/claw.gif';
import './recevoir_degats.css';

const RecevoirDegats = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Définir un minuteur pour masquer le composant après 2 secondes
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    // Nettoyer le minuteur lorsqu'il n'est plus nécessaire
    return () => clearTimeout(timer);
  }, []);

  // Rendre le composant visible ou non
  return (
    visible ? <img src={recevoir_degats_gif} alt="Recevoir dégats" className="recevoir-degats-gif" /> : null
  );
};

export default RecevoirDegats;
