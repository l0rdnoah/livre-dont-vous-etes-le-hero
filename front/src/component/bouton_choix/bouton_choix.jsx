import React from 'react';
import './bouton_choix.css';
import { Link } from 'react-router-dom';
function BoutonChoix({ idSection}) {
    return (
        <>  
            <div className="conteneurBouton">
                <Link to={`/Jeu?idSection=${idSection}`} className="lien">Marcher vers la forêt</Link>           
            </div>
        </>
    );
}

export default BoutonChoix;