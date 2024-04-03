import './creation_personnage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo_v1.png';
import Des from '../../component/des/Des';

function CreationPersonnage() {

    document.title = "Création du personnage";
    const [nom, setNom] = useState('');
    const [nombreDes, setNombreDes] = useState('');
    const [resultatDes, setResultatDes] = useState('');

    const [lancerDesEndurance, setLancerDesEndurance] = useState('');
    const [lancerDesHabilite, setLancerDesHabilite] = useState('');
    const [resultatDesEndurance, setResultatDesEndurance] = useState('lancer de dés');
    const [resultatDesHabilite, setResultatDesHabilite] = useState('lancer de dés');

    const lancerDeDes = async (e) => {
        try {
          
    
        } catch (error) {
          console.error('Erreur lors de la connexion:', error);
          setErrorMessage('Erreur lors de la connexion.');
        }
    };

    return (
        <>
        <Des nbdes={2} setresdes={}></Des>        
        <div id="wrapper">
            <img id="logo" src={logo} alt="" />
            <div className='creation_personnage'>
                <form id="form">
                    <div className="champ">
                        <label>
                        Nom du personnage :
                        </label>
                        <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className='champ'>
                        <label>Endurance max : 20 + ({resultatDesEndurance})</label>
                        <button onClick={lancerDeDes}>Lancer les dés</button>
                    </div>
                    <div className='champ'>
                        <label>Habilité : 3 + ({resultatDesHabilite}) </label>
                        <button>Lancer un dé</button>
                    </div>
                    <button type="submit">Créer le personnage</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default CreationPersonnage;