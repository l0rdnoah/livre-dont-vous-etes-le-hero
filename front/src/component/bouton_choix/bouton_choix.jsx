import React from 'react';
import './bouton_choix.css';
import { Link } from 'react-router-dom';
function BoutonChoix({ idSection,texte}) {
    return (
        <>  
            <div className="conteneurBouton">
                <Link to={`/Jeu?idSection=${idSection}`} className="lien">{texte}</Link>           
            </div>
        </>
    );
}

export default BoutonChoix;