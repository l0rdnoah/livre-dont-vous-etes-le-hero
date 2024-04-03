import React, { useState, useEffect } from 'react';
import './App.css';
import BarreVie from './component/barre_vie/barre_vie.jsx';
import BarreEndurance from './component/barre_endurance/barre_endurance.jsx';
import BoutonChoix from './component/bouton_choix/bouton_choix.jsx';
import HistoireBoite from './component/affichage_histoire/affichage_histoire.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const [vieActuelle, setVieActuelle] = useState(100);
  const [vieMax, setVieMax] = useState(200);
  const [enduranceActuelle, setEnduranceActuelle] = useState(300);
  const [enduranceMax, setEnduranceMax] = useState(400);
  const [idSection, setIdSection] = useState('1'); // où le mec est rendu
  const [habilete, setHabilete] = useState(10);
  const [typeSection, setTypeSection] = useState("combat");
  const [texte, setTexte] = useState('');
  const [choix, setChoix] = useState([]);

  // Utilisation du hook useLocation pour récupérer l'objet location de l'URL
  const location = useLocation();

  useEffect(() => {
    // Récupérer idSection à partir de l'objet location
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('idSection');

    // Effectuer le fetch si l'idSection a changé
    if (id !== idSection) {
      setIdSection(id);
    }
  }, [location.search, idSection]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/section/getallinfosectionbyid?idSection=${idSection}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTexte(data[0]['texte']);
        setChoix(data[0]['section_depart_Choixes']);
      } catch (error) {
        console.error('Error fetching data:', error);
        setTexte("Erreur de chargement de l'histoire");
      }
    };
  
    fetchData();
  }, [idSection]);
  
  return (
    <>
      <div className="conteneurInfoJoueur">
        <BarreVie vieActuelle={vieActuelle} vieMax={vieMax} />
        <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
      </div>

      <div className="conteneurBoutons">
        {choix.map((choixItem, index) => (
          <BoutonChoix key={index} idSection={choixItem.section_arrivee} texte={choixItem.texte} />
        ))}
      </div>

      <div className="text">
        {texte ? <HistoireBoite texte={texte} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default App;
