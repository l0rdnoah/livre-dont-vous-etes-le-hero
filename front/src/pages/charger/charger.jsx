import logo from '../../assets/logo_v1.png';
import ChargerPersonnage from '../../component/charger_personnage/charger_personnage';
import './charger.css';

function Charger() {
  document.title = "Charger";

  const persos = [
    {
    id: 2,
    id_utilisateur: 25,
    section_actuelle: 0,
    nom: "toto",
    endurance: 400,
    habilite: 20,
    po: 5,
    modif_degats: 0,
    endurance_max: 500,
    },
    {
      id: 2,
      id_utilisateur: 25,
      section_actuelle: 0,
      nom: "toto",
      endurance: 400,
      habilite: 20,
      po: 5,
      modif_degats: 0,
      endurance_max: 500,
    },
    {
      id: 2,
      id_utilisateur: 25,
      section_actuelle: 0,
      nom: "toto",
      endurance: 400,
      habilite: 20,
      po: 5,
      modif_degats: 0,
      endurance_max: 500,
    },
  ];

  return (
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <div>
          {persos.map((personnage, index) => (
            <ChargerPersonnage key={index} personnage={personnage} />
          ))}
        </div>
      </div>
  );
}

export default Charger;
