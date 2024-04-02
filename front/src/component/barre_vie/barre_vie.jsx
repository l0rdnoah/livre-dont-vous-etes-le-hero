import React from 'react';
import './barre_vie.css';

function Barre({ vieActuelle, vieMax }) {
    const remplissage = (vieActuelle / vieMax) * 200;
    return (
        <>
        <div className="conteneurBarreVie">
        <p className="valeur">{vieActuelle}/{vieMax}</p>    
        <div className="vie" style={{ width: vieMax }}>
            <div className="remplissage" style={{ width: remplissage }}>
            </div>
        </div>
        </div>
        </>
    );
}

export default Barre;
