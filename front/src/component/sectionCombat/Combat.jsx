import React, { useState } from "react";
import HistoireBoite from "../affichage_histoire/affichage_histoire.jsx";
import Des from "../des/Des.jsx";

function Combat(props) {
  // On met en dur pour le moment

  const [lancerPossible, setLancerPossible] = useState(true);
  const updateLancerPossible = () => {
    setLancerPossible(!lancerPossible);
  };

  const [resultatDes, setResultatDes] = useState(0);
  const updateResultatDes = (value) => {
    setResultatDes(value);
    updateLancerPossible();
    console.log(lancerPossible);
  }

  return (
    <>
      <Des setresdes={updateResultatDes} boutonenabled={lancerPossible}/>
      <p>Resultat des dés: {resultatDes}</p>
      <div className="text">
        <HistoireBoite texte="à l'attaque" />
      </div>
    </>
  );
}
export default Combat;
