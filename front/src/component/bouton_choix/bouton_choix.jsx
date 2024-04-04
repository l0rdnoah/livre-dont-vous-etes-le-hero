import React from 'react';
import './bouton_choix.css';
import { Link } from 'react-router-dom';
function BoutonChoix({ idSection, texte, respect = false }) {
    return (
      <>
        {respect ? (
          <div className="conteneurBouton">
            <Link to={`/Jeu?idSection=${idSection}`} className="lien">
            {texte}
            </Link>
          </div>
        ) : (
          <div className="conteneurBoutonDesactive">
            <span>{texte}</span>
        </div>
        )}
      </>
    );
  }

export default BoutonChoix;