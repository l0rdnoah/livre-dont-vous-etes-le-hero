import './credits.css';
import cleo from '../../assets/img/photos/cleo.png';
import ronan from '../../assets/img/photos/ronan.png';
import noah from '../../assets/img/photos/noah.png';
import paul from '../../assets/img/photos/paul.png';
import hugo from '../../assets/img/photos/hugo.png';
import { Link } from 'react-router-dom';

function Credits() {
  document.title = "Crédits";
  return (
    <div className='fake_body'>
      <div className="container_credits">
        <div className="part_credits">
          <img src={cleo} alt="cleo" />
          <p>Cléo MARTIN-COLLEU</p>
        </div>
        <div className="part_credits">
          <img src={ronan} alt="ronan" />
          <p>Ronan BRAGATO</p>
        </div>
        <div className="part_credits">
          <img src={paul} alt="paul" />
          <p>Paul FAVREAU</p>
        </div>
        <div className="part_credits">
          <img src={noah} alt="noah" />
          <p>Noah BROHAN</p>
        </div>
        <div className="part_credits">
          <img src={hugo} alt="hugo" />
          <p>Hugo LE GUEN</p>
        </div>
      </div>
      <p>GIF Victoire : <a href='https://dribbble.com/olga_la_le_li'>Cliquer ici</a></p>
      <p>GIF Défaite : <a href='https://dribbble.com/olga_la_le_li'>Cliquer ici</a></p>
      <p>GIF Epée : <a href='https://giphy.com/search/sword'>Cliquer ici</a></p>
      <p>GIF Griffes : <a href='https://imgur.com/uCseLkd'>Cliquer ici</a></p>
      <div className='containerMenu'>
        <Link to={`/Menu`}>
          <button style={{ marginLeft: 0 }}>Retourner au menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Credits;
