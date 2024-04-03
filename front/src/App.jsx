  import { useState } from 'react'
  import './App.css'
  import Menu from './component/menu_principal/menu.jsx';
  import BarreVie from './component/barre_vie/barre_vie.jsx';
  import Inventaire from './component/Inventaire/Inventaire.jsx';
  import Des from './component/des/Des.jsx';


  function App() {
  
    return (
      <>
        {/* <Menu /> */}
        <BarreVie />
        {/* <Des nbdes={2} /> */}
        {/* <Inventaire /> */}
      </>
    )
  }

  export default App