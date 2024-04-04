import React, { useState, useEffect } from 'react';
import './App.css';
import BarreVie from './component/barre_vie/barre_vie.jsx';
import BarreEndurance from './component/barre_endurance/barre_endurance.jsx';
import BoutonChoix from './component/bouton_choix/bouton_choix.jsx';
import HistoireBoite from './component/affichage_histoire/affichage_histoire.jsx';
import Enigme from './component/enigme/enigme.jsx';
import { useLocation } from 'react-router-dom';
import Combat from './component/sectionCombat/Combat.jsx';
import Inventaire from './component/Inventaire/Inventaire.jsx';

function App() {
  const [enduranceActuelle, setEnduranceActuelle] = useState(300);
  const addEnduranceActuelle = (value) => {
    console.log("end :",enduranceActuelle);
    console.log("value :",value);
    setEnduranceActuelle(enduranceActuelle+value);
  };
  const [enduranceMax, setEnduranceMax] = useState(400);
  const [idSection, setIdSection] = useState('1'); // où le mec est rendu
  const [habilete, setHabilete] = useState(10);
  const [typeSection, setTypeSection] = useState("combat");
  const [texte, setTexte] = useState('');
  const [choix, setChoix] = useState([]);
  const [enigme,setEnigme] = useState(false);
  const [enigmeComponent, setEnigmeComponent] = useState(null); // Variable pour stocker le composant enigme
  const [allDataSection, setAllDataSection] = useState([]);
  const [inventaire, setInventaire] = useState([]); 
  const [idPerso, setIdPerso] = useState(0);
  const [url,setImage] = useState('');

  // Utilisation du hook useLocation pour récupérer l'objet location de l'URL
  const location = useLocation();

  useEffect(() => {
    // Récupérer idSection à partir de l'objet location
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('idSection');

    // Effectuer le fetch si l'idSection a changé
    if (id !== idSection) {
      setIdSection(id);
      setEnigme(searchParams.get('type_choix'));
    }
  }, [location.search, idSection]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3200/api/section/getallinfosectionbyid?idSection=${idSection}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllDataSection(data);
        setTexte(data[0]['texte']);
        setChoix(data[0]['section_depart_Choixes']);
        setEnigme(data[0]['type_choix']);
        setImage(data[0]['url']);
      } catch (error) {
        console.error('Error fetching data:', error);
        setTexte("Erreur de chargement de l'histoire");
      }
    };
  
    fetchData();
  }, [idSection]);
  
  useEffect(() => {
    const updateSectionPersonnage = async () => {
      const idUser = JSON.parse(sessionStorage.getItem('id_utilisateur'));
      try {
        const response = await fetch(`http://localhost:3200/api/personnage/updatesectionpersonnagebyid?idPersonnage=${idUser}&idSection=${idSection}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Section personnage updated successfully');
      } catch (error) {
        console.error('Error updating section personnage:', error);
      }
    };

    updateSectionPersonnage();
  }, [idSection]);

  const fetchInventaire = async (perso) => {
    try {
      const response = await fetch(`http://localhost:3200/api/objet/${perso}/getObjetsByPersonnageId`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setInventaire(data);
      console.log("inventaire :");
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  // fonction pour ajouter un objet dans l'inventaire et mettre à jour la bdd
  const addObjetBDD = async (idObjet) => {
    try {
      const response = await fetch(`http://localhost:3200/api/objetPersonnage/addObjetToPersonnage?idObjet=${idObjet}&idPersonnage=${idPerso}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fonction pour enlever un objet dans l'inventaire et mettre à jour la bdd
  const removeObjetBDD = async (idObjet) => {
    try {
      const response = await fetch(`http://localhost:3200/api/objetPersonnage/deleteObjetFromPersonnage?idObjet=${idObjet}&idPersonnage=${idPerso}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //use effect pour charger l'inventaire à partir de l'id_personnage
  useEffect(() => {
    const perso = (JSON.parse(sessionStorage.getItem('id_personnage')));
    setIdPerso(perso);
    fetchInventaire(perso);
  }, []);



  // USE EFFECT POUR AFFICHER LE COMPOSANT ENIGME
  useEffect(() => {
    if (enigme === 'enigme') {
      setEnigmeComponent(<Enigme />);
    }
    else {
      setEnigmeComponent(null); 
    }
  }, [enigme]);

  useEffect(() => {
    // Appliquer le style au body lors du montage du composant
    const originalStyle = window.getComputedStyle(document.body).background;
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.minHeight = '100vh';
    document.body.style.width = '100%';
    document.body.style.margin = '0'; // Enlever la marge par défaut du body, si nécessaire

    // Rétablir le style original lors du démontage du composant
    return () => {
      document.body.style.background = originalStyle;
    };
  }, [url]);
  

  if (enigme === 'combat') {
    return (
      <>
        <div className="conteneurInfoJoueur">
          <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
          <Inventaire items={inventaire} />
        </div>
  
        <Combat modifTexte={setTexte} idCombat={allDataSection[0].Combats[0].id} enduranceJoueur={enduranceActuelle} updateEnduranceJoueur={addEnduranceActuelle}/>
  
        <div className="text">
          {texte ? <HistoireBoite texte={texte} /> : <p>Loading...</p>}
        </div>
      </>
    );
  }
  else{
  return (
    <>
      <div className="conteneurInfoJoueur">
        <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
        <Inventaire items={inventaire} />
      </div>

      <div className="conteneurBoutons">
        {choix.map((choixItem, index) => (
          <BoutonChoix key={index} idSection={choixItem.section_arrivee} texte={choixItem.texte} />
        ))}
        
        {enigmeComponent} {/* Afficher le composant enigme ici */}
      </div>

      <div className="text">
        {texte ? <HistoireBoite texte={texte} /> : <p>Loading...</p>}
      </div>
    </>
  );
        }
}

export default App;
