import React, { useState, useEffect } from 'react';
import infliger_degats_gif from '../../assets/img/combat/sword.gif';
import './infliger_degats.css';

const InfligerDegats = () => {
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
    visible ? <img src={infliger_degats_gif} alt="Infliger dégats" className="infliger-degats-gif" /> : null
  );
};

export default InfligerDegats;
