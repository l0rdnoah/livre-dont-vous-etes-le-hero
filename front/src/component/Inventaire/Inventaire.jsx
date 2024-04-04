import { useState } from "react";
import "./Inventaire.css";
import PopUpInventaire from "./PopUpInventaire.jsx";
import PropTypes from 'prop-types';


function Inventaire({items, addEndurance, addBonusDes, addBonusDegat, addBonusHabilite, removeItem}) {
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
      onFermer={updateInventaireOuvert}
      addEndurance={addEndurance}
      addBonusDes={addBonusDes}
      addBonusDegat={addBonusDegat}
      addBonusHabilite={addBonusHabilite}
      removeItem={removeItem}/>
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
