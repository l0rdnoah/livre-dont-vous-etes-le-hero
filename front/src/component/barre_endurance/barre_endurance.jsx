import React from 'react';
import './barre_endurance.css';

function Barre({ enduranceActuelle, enduranceMax }) {
    return (
        <>
        <div className="conteneurBarreEndurance">
        <p className="valeurEndurance">{enduranceActuelle}/{enduranceMax}</p>    
        <div className="endurance" style={{ width: enduranceMax }}>
            <div className="remplissageEndurance" style={{ width: (enduranceActuelle / enduranceMax) * 200 }}>
            </div>
        </div>
        </div>
        </>
    );
}

export default Barre;
