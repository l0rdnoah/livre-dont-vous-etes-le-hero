import React, { useState, useEffect } from "react";
import HistoireBoite from "../affichage_histoire/affichage_histoire.jsx";
import Des from "../des/Des.jsx";
import BarEndurance from "../barre_endurance/barre_endurance.jsx";
import BoutonChoix from '../bouton_choix/bouton_choix.jsx';
import "./Combat.css";
import sword from "../../assets/img/combat/sword.gif";

// La fonction getCombat est maintenant purement pour récupérer les données
async function getCombat(idCombat) {
  try {
    const response = await fetch(
      `http://localhost:3200/api/combat/getallinfocombatbyid?idCombat=${idCombat}`
    );
    const combat = await response.json();
    return combat;
  } catch (error) {
    console.error(error);
  }
}

function deroulementCombat(
  conditions,
  resultatDes,
  enduranceAdversaire,
  enduranceJoueur,
  updateEnduranceJoueur,
  addEnduranceAdversaire,
  setTexte,
  updateLancerPossible,
) {
  var enduranceAdversaireStockee = enduranceAdversaire;
  var enduranceJoueurStockee = enduranceJoueur;
  for (var condition of conditions) {
    if (resultatDes >= condition.min_des && resultatDes <= condition.max_des) {
      updateEnduranceJoueur(0 - condition.modif_endurance);
      enduranceJoueurStockee += 0 - condition.modif_endurance;
      enduranceAdversaireStockee += 0 - condition.degats;
      addEnduranceAdversaire(0 - condition.degats);
      setTexte(condition.texte);
    }
  }
  if (enduranceJoueurStockee <= 0) {
    updateLancerPossible();
    setTexte("Vous avez perdu");
    return -1;
  } else if (enduranceAdversaireStockee <= 0) {
    updateLancerPossible();
    setTexte("Vous avez gagné");
    return 1;
  } else {
    return 0;
  }
}

function Combat({ idCombat = 1, enduranceJoueur, updateEnduranceJoueur, modifTexte }) {
  const [lancerPossible, setLancerPossible] = useState(true);
  const [resultatDes, setResultatDes] = useState(0);
  const [combatData, setCombatData] = useState({}); // Nouvel état pour stocker les données de combat
  const [chargement, setChargement] = useState(true);
  const [enduranceAdversaire, setEnduranceAdversaire] = useState(1);
  const [sectionSuivante, setSectionSuivante] = useState(0);
  var resCombat = 0;

  function addEnduranceAdversaire(value) {
    setEnduranceAdversaire(
      (prevEnduranceAdversaire) => prevEnduranceAdversaire + value
    );
  }

  useEffect(() => {
    // Charge les données de combat lors du montage du composant
    getCombat(idCombat).then((combat) => {
      if (combat) {
        setCombatData(combat); // Met à jour l'état avec les données de combat
        setEnduranceAdversaire(combat[0].id_enemi_Enemis[0].endurance);
        setChargement(false); // Indique que le chargement est terminé
      }
    });
  }, [idCombat]); // Se déclenche si idCombat change

  const updateLancerPossible = () => {
    setLancerPossible(!lancerPossible);
  };

  const updateResultatDes = async (value) => {
    setResultatDes(value);
    resCombat = deroulementCombat(
        combatData[0].Condition_Combats,
        value,
        enduranceAdversaire,
        enduranceJoueur,
        updateEnduranceJoueur,
        addEnduranceAdversaire,
        modifTexte,
        updateLancerPossible
      )
      if (resCombat == 1) {
        setSectionSuivante(combatData[0].section_victoire)
      } else if (resCombat == -1) {
        setSectionSuivante(1)
      } else {
        setSectionSuivante(0)
      }
  };

  // Le rendu du composant inclut désormais les données de combat (si nécessaire)
  if (chargement) {
    return <p>Chargement des données de combat...</p>;
  } else {
    return (
      <>
        <Des
          setresdes={updateResultatDes}
          boutonenabled={lancerPossible}
          setBoutonEnabled={setLancerPossible}
        />
        {/* <p>Resultat des dés: {resultatDes}</p>
        <img src={sword} alt="sword" className="sword" /> */}
        <BarEndurance
          className="endurance-adversaire"
          enduranceMax={combatData[0].id_enemi_Enemis[0].endurance}
          enduranceActuelle={enduranceAdversaire}
        />

        <div className={`conteneurBoutons ${sectionSuivante >= 1 ? '' : 'nepasafficher'}`}>
          <BoutonChoix idSection={sectionSuivante} texte="Continuer" url={sectionSuivante === -1 ? "/Menu" : undefined }/>
        </div>
        <div className={`divvide ${sectionSuivante >= 1 ? 'nepasafficher' : ''}`}></div>
      </>
    );
  }
}

export default Combat;
