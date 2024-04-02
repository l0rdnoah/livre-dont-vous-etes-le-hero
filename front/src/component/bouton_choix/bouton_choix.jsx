import React from 'react';
import './bouton_choix.css';
import { Link } from 'react-router-dom';
function BoutonChoix({ vieActuelle, vieMax }) {
    return (
        <>  
            <div className="conteneurBouton">
                <Link to="/Jeu" className="lien">Marcher vers la forêt</Link>
            </div>
        </>
    );
}

export default BoutonChoix;
