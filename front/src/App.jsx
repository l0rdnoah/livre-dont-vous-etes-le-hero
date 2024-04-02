import React, { useState } from 'react';
import './App.css';
import Menu from './component/menu_principal/menu.jsx';
import BarreVie from './component/barre_vie/barre_vie.jsx';
import BarreEndurance from './component/barre_endurance/barre_endurance.jsx';
import BoutonChoix from './component/bouton_choix/bouton_choix.jsx';
function App() {
  // Définir des valeurs pour la vie actuelle et la vie maximale
  const vieActuelle = 200;
  const vieMax = 200;
  const enduranceActuelle = 400;
  const enduranceMax = 500;

  return (
    <>
      {/* <Menu /> */}
      <BarreVie vieActuelle={vieActuelle} vieMax={vieMax} />
      <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
      <BoutonChoix /> 
    </>
  )
}
export default App;