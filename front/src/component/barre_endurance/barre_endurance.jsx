import React from 'react';
import './barre_endurance.css';

function Barre({ enduranceActuelle, enduranceMax }) {
    const remplissage = (enduranceActuelle / enduranceMax) * 200;
    return (
        <>
        <div className="conteneurBarreEndurance">
        <p className="valeurEndurance">{enduranceActuelle}/{enduranceMax}</p>    
        <div className="endurance" style={{ width: enduranceMax }}>
            <div className="remplissageEndurance" style={{ width: remplissage }}>
            </div>
        </div>
        </div>
        </>
    );
}

export default Barre;
