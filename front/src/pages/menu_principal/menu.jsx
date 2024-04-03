import logo from '../../assets/logo_v1.png';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  document.title = "Menu Principal";
  return (
    <div id="menu">
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <div id="menu">
          <Link to="/Jeu">Jouer</Link>
          <a href="#">Charger</a>
          <a href="#">Crédits</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
