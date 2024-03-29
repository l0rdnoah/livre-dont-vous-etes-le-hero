import React from 'react';
import logo from '../assets/logo_v1.png';
import './menu.css';
function Menu() {
  return (
    <div id="menu">
      
      <div id="wrapper">
      <img id="logo" src={logo} alt="" />
      <div id="menu">
        <a href="#">Jouer</a>
        <a href="#">Charger</a>
        <a href="#">Crédits</a>
      </div>
    </div>
    </div>
  );
}

export default Menu;