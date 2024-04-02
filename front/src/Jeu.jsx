import React, { useState } from 'react';
import './App.css';
import BarreVie from './component/barre_vie/barre_vie.jsx';
import BarreEndurance from './component/barre_endurance/barre_endurance.jsx';
import BoutonChoix from './component/bouton_choix/bouton_choix.jsx';
import HistoireBoite from './component/affichage_histoire/affichage_histoire.jsx';

function App() {
  // On met en dur pour le moment
  const vieActuelle = 200;
  const vieMax = 200;
  const enduranceActuelle = 400;
  const enduranceMax = 500;

  return (
    <>

    <div className="conteneurInfoJoueur">
      <BarreVie vieActuelle={vieActuelle} vieMax={vieMax} />
      <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
      
    </div>

    <div className="conteneurBoutons">
      <BoutonChoix />
      <BoutonChoix />
    </div>

    <div className="text">
      <HistoireBoite />
    </div>
    </>
  )
}
export default App;