import './charger_personnage.css';
import { Link } from 'react-router-dom';
import BarreEndurance from '../barre_endurance/barre_endurance';
import PiecesOr from "../../assets/img/pieces_or.png";
import { useNavigate } from 'react-router-dom';


function ChargerPersonnage({personnage}) {


    const charger = (id) => {
        sessionStorage.setItem('id_personnage', id);
    };

    return (
        <>  
            <Link to={`/Jeu?idSection=${personnage.section_actuelle}&loading=1`} onClick={() => charger(personnage.id)}>
                <div className='charger_personnage'>
                    <div className='container'>
                        <p>{personnage.nom}</p>
                        <BarreEndurance enduranceActuelle={personnage.endurance} enduranceMax={personnage.endurance_max} />                       
                    </div>
                    <hr></hr>
                    <div className='container'>
                        <p>Habilité : {personnage.habilite}</p>
                        <div className='container_pieces_or'>
                            <img className='pieces_or' src={PiecesOr}/>
                            <p>{personnage.po}</p>
                        </div>
                        <p>Section {personnage.section_actuelle}</p>
                    </div>
                </div>
            </Link>           
        </>
    );
}

export default ChargerPersonnage;