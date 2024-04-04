import React, { useState, useEffect } from "react";
import "./PopUpInventaire.css";
import ContextMenu from "../ContextMenu/ContextMenu.jsx";



const getImage = async (id) => {
  const image = await import(`../../assets/img/itemsInventaire/${id}.png`);
  return image.default;
};

const PopUpInventaire = ({items, ouvert, onFermer, addEndurance, addBonusDes, addBonusDegat, addBonusHabilite, removeItem}) => {
  const [imageUrls, setImageUrls] = useState({});
  const [contextMenu, setContextMenu] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const utiliserItem = async (id) => {
    var item = items.find((item) => item.id === id);
    console.log("Utilisation de l'item : " + item.nom);
    if (item.type === "potion") {
      if (item.modif_habilite !== null) {
        addBonusHabilite(item.modif_habilite);
      }
      if (item.modif_endurance!== null) {
        addEndurance(item.modif_endurance);
      }
      if (item.modif_des!== null) {
        addBonusDes(item.modif_des);
      }
      if (item.modif_degats!== null) {
        addBonusDegat(item.modif_degats);
      }
      removeItem(id);
    }
  }

  const handleRightClick = (event, item) => {
    event.preventDefault();
    if (item.type === "potion") {
      setPosition({ x: event.pageX, y: event.pageY });
      setContextMenu(item.id); // Set the context menu for the specific item
    }
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };



  useEffect(() => {
    const loadImageUrls = async () => {
      const urls = await Promise.all(
        items.map(async (item) => ({
          id: item.id,
          url: await getImage(item.id),
        }))
      );

      const urlsMap = urls.reduce((acc, curr) => {
        acc[curr.id] = curr.url;
        return acc;
      }, {});

      setImageUrls(urlsMap);
    };

    loadImageUrls();
  }, [items]);

  const fermer = () => {
    setContextMenu(null);
    onFermer();
  };

  const contextMenuActions = [
    ["Utiliser", utiliserItem],
  ];

  return (
    <div
      className={`inventaire-popup ${ouvert ? "i-ouvert" : "i-ferme"}`}
    >
      <div className="inventaire-container">
        <div className="topbarre">
          <h3 className="titre">Inventaire</h3>
          <div className="fermer-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-x-lg fermer"
              viewBox="0 0 16 16"
              onClick={fermer}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <div className="items-container">
          {items.map((item, index) => (
            <div className="item" key={index} onContextMenu={(e) => handleRightClick(e, item)}>
              <img
                className="img-item"
                src={imageUrls[item.id]}
                alt={item.nom}
                title={item.nom}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
      {contextMenu && <ContextMenu items={contextMenuActions} position={position} iditem={contextMenu} onClose={handleCloseContextMenu}/>}
    </div>
  );
};

export default PopUpInventaire;
