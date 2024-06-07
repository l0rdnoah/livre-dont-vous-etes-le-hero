import React from 'react';
import './bouton_choix.css';
import { Link } from 'react-router-dom';
function BoutonChoix({ idSection, texte, respect = true, url = undefined }) {

  if (url !== undefined) {
    return (
      <>
      <Link to={url} className="lien">
        <div className="conteneurBouton">
            {texte}
        </div>
      </Link>
      </>
    );
  } else {
    return (
      <>
        {respect ? (
        <Link to={`/Jeu?idSection=${idSection}`} className="lien">
          <div className="conteneurBouton">
            {texte}
          </div>
        </Link>
        ) : (
          <div className="conteneurBoutonDesactive">
            <span>{texte}</span>
        </div>
        )}
      </>
    );
  }
    
  }

export default BoutonChoix;