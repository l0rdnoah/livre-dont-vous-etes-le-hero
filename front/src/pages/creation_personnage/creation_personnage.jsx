import './creation_personnage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../assets/logo_v1.png';
import Des from '../../component/des/Des';

function CreationPersonnage() {

    document.title = "Création du personnage";
    const [nom, setNom] = useState('');
    const [boutonEnabled, setBoutonEnabled] = useState(true);
    const [resultatDesEndurance, setResultatDesEndurance] = useState('lancer de dés');
    const [resultatDesHabilite, setResultatDesHabilite] = useState('lancer de dés');
    const [section, setSection] = useState(1);
    const navigate = useNavigate();

    const getResDesEndurance = (value) => {
        setBoutonEnabled(false);
        setResultatDesEndurance(value);
    };

    const getResDesHabilite = (value) => {
        setBoutonEnabled(false);
        setResultatDesHabilite(value);
    };

    const incrementeSection = () => {
        setBoutonEnabled(true);
        setSection(section+1);
    };

    
    // Fonction pour créer un personnage
    const creerPersonnage = async (e) => {
        e.preventDefault();

        const params = new URLSearchParams({
            idUtilisateur: sessionStorage.getItem('id_utilisateur'),
            nom: nom,
            habilite: 3+resultatDesHabilite,
            endurance: 20+resultatDesEndurance,
            modifDegats: 0,
            enduranceMax: 20+resultatDesEndurance
        });

        try {
            const response = await fetch(`http://localhost:3200/api/personnage/creerpersonnage?${params.toString()}`);
            const data = await response.json();

            if (response.ok) {
                console.log('Personnage créé avec succès:', data);
                sessionStorage.setItem('id_personnage', data.personnageId);
                navigate(`/Jeu?idSection=1`);
            } else {
                console.error('Erreur lors de la création du personnage:', data);
            }
        } catch (error) {
            console.error('Erreur lors de la création du personnage:', error);
        }
    };

    return (
        <>        
        <div id="wrapper">
            <img id="logo" src={logo} alt="" />
            <div className='creerPersonnage'>
                <form onSubmit={creerPersonnage} id="form">
                    {section === 1 && (
                        <div className="champ">
                            <label>
                            Nom du personnage :
                            </label>
                            <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            />
                            {nom !== '' && (
                                <button onClick={incrementeSection}>Suivant</button>
                            )}
                        </div>
                        
                    )}
                    {section === 2 && (
                        <div className='container_des'>
                            <label>Endurance max : 20 + ({resultatDesEndurance})</label>
                            <Des nbdes={2} setresdes={getResDesEndurance} setBoutonEnabled={setBoutonEnabled} boutonenabled={boutonEnabled} affichagefixed={false}></Des>
                            {resultatDesEndurance !== 'lancer de dés' && (
                                <button onClick={incrementeSection}>Suivant</button>
                            )}
                        </div>
                    )}
                    {section === 3 && (
                        <div className='container_des'>
                            <label>Habilité : 3 + ({resultatDesHabilite}) </label>
                            <Des nbdes={1} setresdes={getResDesHabilite} setBoutonEnabled={setBoutonEnabled} boutonenabled={boutonEnabled} affichagefixed={false}></Des>
                            {resultatDesHabilite !== 'lancer de dés' && (
                                <button onClick={incrementeSection}>Suivant</button>
                            )}                        
                        </div>
                    )}
                    {section === 4 && (
                        <div>
                            <p>Nom : {nom}</p>
                            <p>Endurance max : {20+resultatDesEndurance}</p>
                            <p>Habilité : {3+resultatDesHabilite}</p>
                            <button type="submit">Créer le personnage</button>
                        </div>
                    )}
                </form>
                <div className='container_bouton'>
                    <Link to={`/Menu`}>
                        <button>{"Retourner au menu"}</button>
                    </Link>
                </div>  
            </div>
        </div>
        </>
    );
}

export default CreationPersonnage;