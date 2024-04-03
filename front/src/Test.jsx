import React, { useState } from 'react';
import './App.css';
import BarreVie from './component/barre_vie/barre_vie.jsx';
import BarreEndurance from './component/barre_endurance/barre_endurance.jsx';
import BoutonChoix from './component/bouton_choix/bouton_choix.jsx';
import HistoireBoite from './component/affichage_histoire/affichage_histoire.jsx';
import Combat from './component/sectionCombat/Combat.jsx';

function App() {
  // On met en dur pour le moment
  const [vieActuelle, setVieActuelle] = useState(100);
  const addVieActuelle = (value) => {
    setVieActuelle(vieActuelle+value);
  };

  const [vieMax, setVieMax] = useState(200);
  const addVieMax = (value) => {
    setVieMax(vieMax+value);
  };

  const [enduranceActuelle, setEnduranceActuelle] = useState(300);
  const addEnduranceActuelle = (value) => {
    setEnduranceActuelle(enduranceActuelle+value);
  };

  const [enduranceMax, setEnduranceMax] = useState(400);
  const addEnduranceMax = (value) => {
    setEnduranceMax(enduranceMax+value);
  };

  const [idSection, setIdSection] = useState(1);

  const [habilete, setHabilete] = useState(10);
  const addHabilete = (value) => {
    setHabilete(habilete+value);
  };

  const [typeSection, setTypeSection] = useState("combat");

  return (
    <>

    <div className="conteneurInfoJoueur">
      <BarreVie vieActuelle={vieActuelle} vieMax={vieMax} />
      <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
      
    </div>

    <Combat />
    </>
  )
}
export default App;