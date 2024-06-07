import logo from '../../assets/logo_v1.png';
import './menu.css';
import { Link } from 'react-router-dom';
import BoutonEco from '../../component/eco_bouton/eco_bouton';
function Menu() {
  document.title = "Menu Principal";
  return (
    <div id="menu">
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <div id="menu">
        <BoutonEco/>
          <Link to="/CreationPersonnage">Nouvelle partie</Link>
          <Link to="/Charger">Charger</Link>
          <Link to="/Credits">Crédits</Link>
          <Link to="/">Se déconnecter</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
