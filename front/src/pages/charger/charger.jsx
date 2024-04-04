import logo from '../../assets/logo_v1.png';
import ChargerPersonnage from '../../component/charger_personnage/charger_personnage';
import { useState, useEffect } from 'react';

import './charger.css';
import { Link } from 'react-router-dom';

function Charger() {
  document.title = "Charger";

  const [errorMessage, setErrorMessage] = useState('');
  const [persos, setPersos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id_utilisateur = sessionStorage.getItem('id_utilisateur');
        const response = await fetch(`http://localhost:3200/api/utilisateur/${id_utilisateur}/personnages`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Object.keys(data).length != 0) {
          setPersos(data);
        } else {
          setErrorMessage("Pas de parties enregistrées");
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessage("Erreur de chargement des personnages");
      }
    };
  
    fetchData();
  }, []); 

  return (
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <div>
          {persos.map((personnage, index) => (
            <ChargerPersonnage key={index} personnage={personnage} />
          ))}
        </div>
        <p>{errorMessage}</p>
        <Link to={`/Menu`}>
          <button>Retourner au menu</button>
        </Link>           
      </div>
  );
}

export default Charger;