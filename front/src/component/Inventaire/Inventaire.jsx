import { useState } from "react";
import "./Inventaire.css";
import PopUpInventaire from "./PopUpInventaire.jsx";
import PropTypes from 'prop-types';


function Inventaire({items = [
  {
    nom: "Elixir de Force",
    type: "consommable",
    modif_habilite: 3,
    modif_endurance: 2,
    modif_des: null,
    modif_degats: 5,
  },
  {
    nom: "Pierre de Sagesse",
    type: "passif",
    modif_habilite: 1,
    modif_endurance: -1,
    modif_des: 2,
    modif_degats: 3,
  },
  {
    nom: "Breuvage du Berserker",
    type: "consommable",
    modif_habilite: 2,
    modif_endurance: 5,
    modif_des: null,
    modif_degats: 7,
  },
  {
    nom: "Amulette de Protection",
    type: "passif",
    modif_habilite: -2,
    modif_endurance: 3,
    modif_des: 1,
    modif_degats: 1,
  },
  {
    nom: "Gantelet du Pouvoir",
    type: "consommable",
    modif_habilite: 4,
    modif_endurance: -3,
    modif_des: null,
    modif_degats: 6,
  },
  {
    nom: "Cape de l'Invisible",
    type: "passif",
    modif_habilite: 0,
    modif_endurance: 2,
    modif_des: 5,
    modif_degats: 0,
  },
]}) {
  const [inventaireOuvert, setInventaireOuvert] = useState(false);

  const updateInventaireOuvert = () => {
    setInventaireOuvert(!inventaireOuvert);
  };

  return (
    <div className="inventaire">
      <div
        className="bouton-inventaire"
        alt="bouton-inventaire"
        onClick={() => {
          updateInventaireOuvert()
        }}
      ></div>

      {/* <Menu /> */}
      <PopUpInventaire 
      items={items}
      ouvert={inventaireOuvert}
      onFermer={updateInventaireOuvert}/>
      </div>
  );
}


// Inventaire.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       nom: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       modif_habilite: PropTypes.number,
//       modif_endurance: PropTypes.number,
//       modif_des: PropTypes.number,
//       modif_degats: PropTypes.number,
//       image: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Inventaire;
