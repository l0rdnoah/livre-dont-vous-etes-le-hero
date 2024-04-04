import { useState, useEffect } from 'react';
import './App.css';
import BarreEndurance from './component/barre_endurance/barre_endurance.jsx';
import BoutonChoix from './component/bouton_choix/bouton_choix.jsx';
import HistoireBoite from './component/affichage_histoire/affichage_histoire.jsx';
import Enigme from './component/enigme/enigme.jsx';
import { useLocation } from 'react-router-dom';
import Combat from './component/sectionCombat/Combat.jsx';
import Inventaire from './component/Inventaire/Inventaire.jsx';
import PiecesOr from "./assets/img/pieces_or.png";

function App() {
  const [enduranceActuelle, setEnduranceActuelle] = useState(300);
  const addEnduranceActuelle = (value) => {
    console.log("end :",enduranceActuelle);
    console.log("value :",value);
    if (enduranceActuelle+value < 0) {
      setEnduranceActuelle(0);
    } else if (enduranceActuelle+value > enduranceMax) {
      setEnduranceActuelle(enduranceMax);
    } else{
      setEnduranceActuelle(enduranceActuelle+value);
    }
  };
  const [enduranceMax, setEnduranceMax] = useState(0);
  const [idSection, setIdSection] = useState('1'); // où le mec est rendu
  const [habilete, setHabilete] = useState(0);
  const [typeSection, setTypeSection] = useState("combat");
  const [pieces, setPieces] = useState(0);
  const [texte, setTexte] = useState('');
  const [choix, setChoix] = useState([]);
  const [enigme,setEnigme] = useState(false);
  const [repEnigme,setRepEnigme] = useState("");
  const [sectionDefaiteEnigme,setSectionDefaiteEnigme] = useState("");
  const [sectionVictoireEnigme,setSectionVictoireEnigme] = useState("");
  const [enigmeComponent, setEnigmeComponent] = useState(null); // Variable pour stocker le composant enigme
  const [allDataSection, setAllDataSection] = useState([]);
  const [inventaire, setInventaire] = useState([]); 
  const [idPerso, setIdPerso] = useState(0);
  const [url,setImage] = useState('');
  const [bonusDes, setBonusDes] = useState(0);
  const [bonusDegats, setBonusDegats] = useState(0);
  const [bonusHabilete, setBonusHabilete] = useState(0);

  const addBonusDes = (value) => {
    setBonusDes(bonusDes + value);
  }

  const addBonusDegat = (value) => {
    setBonusDegats(bonusDegats + value);
  }

  const addBonusHabilite = (value) => {
    setBonusHabilete(bonusHabilete + value);
  }

  const addPiece = (value) => {
    setPieces(pieces + value);
  }


  const addBonusItem = (idObjet) => {
    const item = inventaire.find(objet => objet.id === idObjet);
    if (item.type === "equipement"){
      if (item.modif_des) {
        addBonusDes(item.modif_des);
      }
      if (item.modif_degats) {
        addBonusDegat(item.modif_degats);
      }
      if (item.modif_habilite) {
        addBonusHabilite(item.modif_habilite);
      }
    } else if (item.type === "piece") {
      if (item.modif_piece) {
        addPiece(item.modif_piece);
      } 
      removeObjet(idObjet);
    }
  }


  //use effect pour charger l'inventaire à partir de l'id_personnage
  useEffect(() => {
    const perso = (JSON.parse(sessionStorage.getItem('id_personnage')));
    setIdPerso(perso);
    fetchInventaire(perso);
    fetchPersonnage(perso);
  }, []);


  const resetInventaire = async () => {
    try {
      const response = await fetch('/api/objetPersonnage/updateObjetsForPersonnage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idPersonnage: idPerso,
          idsObjets: ["1", "2", "3","4"]
        })
      })
      .then(fetchInventaire(idPerso))
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  



  // Utilisation du hook useLocation pour récupérer l'objet location de l'URL
  const location = useLocation();

  useEffect(() => {
    // Récupérer idSection à partir de l'objet location d
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('idSection');

    // Effectuer le fetch si l'idSection a changé
    if (id !== idSection) {
      setIdSection(id);
      setEnigme(searchParams.get('type_choix'));
    }
    fetchData(id);

  }, [location.search]);


  const fetchData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3200/api/section/getallinfosectionbyid?idSection=${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();


      var section_depart_Choixes = data[0]['section_depart_Choixes'];

      for (let i = 0; i < section_depart_Choixes.length; i++) {
        if (section_depart_Choixes[i]['Condition_Choixes'].length !== 0 ){
          console.log(section_depart_Choixes[i]['Condition_Choixes'][0])
          
          if (section_depart_Choixes[i]['Condition_Choixes'][0]['min_habilite']){
            if (section_depart_Choixes[i]['Condition_Choixes'][0]['min_habilite'] <= habilete){
              section_depart_Choixes[i]['respect'] = true;
            }else{
              section_depart_Choixes[i]['respect'] = false;
            }
          }

          if (section_depart_Choixes[i]['Condition_Choixes'][0]['objet_requis']){
            if (section_depart_Choixes[i]['Condition_Choixes'][0]['objet_requis'] === inventaire.find(inventaire.find(objet => objet.id === section_depart_Choixes[i]['Condition_Choixes'][0]['objet_requis']).nom)){
              section_depart_Choixes[i]['respect'] = true;
            }else{
              section_depart_Choixes[i]['respect'] = false;
            }
          }

          if (section_depart_Choixes[i]['Condition_Choixes'][0]['modif_endurance']){
            addEnduranceActuelle(section_depart_Choixes[i]['Condition_Choixes'][0]['modif_endurance'])
            section_depart_Choixes[i]['respect'] = true;
          }

          if (section_depart_Choixes[i]['Condition_Choixes'][0]['endurance_max']){
            setEnduranceActuelle(enduranceMax)
            section_depart_Choixes[i]['respect'] = true;
          }

        }
        else {
          section_depart_Choixes[i]['respect'] = true;
        }
      }
      console.log(section_depart_Choixes)

      setAllDataSection(data);
      setTexte(data[0]['texte']);
      setChoix(section_depart_Choixes);
      setEnigme(data[0]['type_choix']);
      if(data[0]['type_choix'] === 'enigme') {
        setRepEnigme(data[0]['section_depart_Enigmes'][0]['solution']);
        setSectionDefaiteEnigme(data[0]['section_depart_Enigmes'][0]['section_defaite']);
        setSectionVictoireEnigme(data[0]['section_depart_Enigmes'][0]['section_victoire']);
      }
      setImage(data[0]['url']);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTexte("Erreur de chargement de l'histoire");
    }
  };
  
  useEffect(() => {
    const updateSectionPersonnage = async () => {
      const idPersonnage = JSON.parse(sessionStorage.getItem('id_personnage'));
      try {
        const response = await fetch(`http://localhost:3200/api/personnage/updatesectionpersonnagebyid?idPersonnage=${idPersonnage}&idSection=${idSection}&po=${pieces}&endurance=${enduranceActuelle}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Section personnage updated successfully');
      } catch (error) {
        console.error('Error updating section personnage:', error);
      }
    };
    const searchParams = new URLSearchParams(location.search);
    const loading = searchParams.get('loading');
    if (loading != 1){
      updateSectionPersonnage();
    }
    if(idSection === "1"){
      setEnduranceActuelle(enduranceMax)
      //resetInventaire();
    }
  }, [idSection]);

  useEffect(() => {
    console.log("alldatesection",allDataSection);
    if (allDataSection.length > 0){
      if (allDataSection[0].objet_recup !== null && inventaire.find(objet => objet.id === allDataSection[0].objet_recup) === undefined){
        addObjet(allDataSection[0].objet_recup);
      }
    }
  }, [allDataSection]);

  const fetchInventaire = async (perso) => {
    try {
      const response = await fetch(`http://localhost:3200/api/objet/${perso}/getObjetsByPersonnageId`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setInventaire(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchPersonnage = async (perso) => {
    try {
      const response = await fetch(`http://localhost:3200/api/personnage/${perso}/getPersonnageById`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHabilete(data.habilite);
      console.log(data.endurance)
      setEnduranceActuelle(data.endurance);
      setEnduranceMax(data.endurance_max);
      setPieces(data.po);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fonction pour ajouter un objet dans l'inventaire et mettre à jour la bdd
  const addObjet = async (idObjet) => {
    try {
      const response = await fetch(`http://localhost:3200/api/objetPersonnage/addObjetToPersonnage?idObjet=${idObjet}&idPersonnage=${idPerso}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchInventaire(idPerso);
      addBonusItem(idObjet);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fonction pour enlever un objet dans l'inventaire et mettre à jour la bdd
  const removeObjet = async (idObjet) => {
    try {
      const response = await fetch(`http://localhost:3200/api/objetPersonnage/deleteObjetFromPersonnage?idObjet=${idObjet}&idPersonnage=${idPerso}`);
      setInventaire(inventaire.filter(objet => objet.id !== idObjet));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // USE EFFECT POUR AFFICHER LE COMPOSANT ENIGME
  useEffect(() => {
    if (enigme === 'enigme') {
      setEnigmeComponent(<Enigme repEnigme={repEnigme} sectionVictoireEnigme={sectionVictoireEnigme} sectionDefaiteEnigme={sectionDefaiteEnigme}/>);
    }
    else {
      setEnigmeComponent(null); 
    }
  }, [enigme]);

  useEffect(() => {
    
    const originalStyle = window.getComputedStyle(document.body).background;
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.minHeight = '100vh';
    document.body.style.width = '100%';
    document.body.style.margin = '0'; 

    return () => {
      document.body.style.background = originalStyle;
    };
  }, [url]);
  

  if (enigme === 'combat') {
    return (
      <>
        <div className="conteneurInfoJoueur">
          <div className="conteneurCaracteristiques">
            <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
            <div className='container_pieces_or'>
              <img className='pieces_or' src={PiecesOr}/>
              <p>{pieces}</p>
            </div>
            <p>Habilité : {habilete}</p>
          </div>
          <Inventaire items={inventaire} addBonusDegat={addBonusDegat} addBonusHabilite={addBonusHabilite} addBonusDes={addBonusDes} addEndurance={addEnduranceActuelle} removeItem={removeObjet}/>
        </div>
  
        <Combat modifTexte={setTexte} idCombat={allDataSection[0].Combats[0].id} enduranceJoueur={enduranceActuelle} updateEnduranceJoueur={addEnduranceActuelle} bonusDegat={bonusDegats} bonusDes={bonusDes}/>
  
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
        <div className="conteneurCaracteristiques">
            <BarreEndurance enduranceActuelle={enduranceActuelle} enduranceMax={enduranceMax} />
            <div className='container_pieces_or'>
              <img className='pieces_or' src={PiecesOr}/>
              <p>{pieces}</p>
            </div>
            <p>Habilité : {habilete}</p>
        </div>
        <Inventaire items={inventaire} addBonusDegat={addBonusDegat} addBonusHabilite={addBonusHabilite} addBonusDes={addBonusDes} addEndurance={addEnduranceActuelle} removeItem={removeObjet}/>
      </div>

      <div className="conteneurBoutons">
        {choix.map((choixItem, index) => (
          <BoutonChoix key={index} idSection={choixItem.section_arrivee} texte={choixItem.texte} respect={choixItem.respect}/>
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
