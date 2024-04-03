// import React, { useState } from "react";
// import HistoireBoite from "../affichage_histoire/affichage_histoire.jsx";
// import Des from "../des/Des.jsx";

// async function getCombat(idCombat, combatObj) {
//   try {
//     const response = await fetch(`http://localhost:8000/combat/${idCombat}`);
//     const combat = await response.json();
//     combatObj = combat;
//     console.log(combat);
//     return combat;
//   } catch (error) {
//     console.error(error);
//   }
// }

// function deroulementCombat(
//   conditions,
//   resultatDes,
//   enduranceJoueur,
//   setEnduranceJoueur,
//   enduranceAdversaire,
//   setEnduranceAdversaire
// ) {
//   if (conditions === "attaque") {
//     setVieActuelle(vieActuelle - resultatDes);
//   }
// }

import React, { useState } from "react";
import HistoireBoite from "../affichage_histoire/affichage_histoire.jsx";
import Des from "../des/Des.jsx";

async function getCombat(idCombat, combatObj) {
    try {
        const response = await fetch(`http://localhost:3000/api/combat/getallinfocombatbyid?idCombat=${idCombat}`);
        const combat = await response.json();
        combatObj = combat;
        console.log(combat);
        return combat;
    } catch (error) {
        console.error(error);
    }
}

function Combat({ idCombat = 1 }) {
    var combatObj = {};

    const [lancerPossible, setLancerPossible] = useState(true);
    const updateLancerPossible = () => {
        setLancerPossible(!lancerPossible);
    };

    const [resultatDes, setResultatDes] = useState(0);
    const updateResultatDes = (value) => {
        setResultatDes(value);
        updateLancerPossible();
        console.log(lancerPossible);
    };
    Promise.all([getCombat(idCombat, combatObj)]).then(() => {
        

        return (
            <>
                <Des setresdes={updateResultatDes} boutonenabled={lancerPossible} />
                <p>Resultat des dés: {resultatDes}</p>
                <div className="text">
                    <HistoireBoite texte="à l'attaque" />
                </div>
            </>
        );
    });
}
export default Combat;
