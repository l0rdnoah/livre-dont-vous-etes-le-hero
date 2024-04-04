import React, { useState, useEffect } from "react";
import "./PopUpInventaire.css";

const getImage = async (id) => {
  const image = await import(`../../assets/img/itemsInventaire/${id}.png`);
  return image.default;
};

const PopUpInventaire = (props) => {
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const loadImageUrls = async () => {
      const urls = await Promise.all(
        props.items.map(async (item) => ({
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
  }, [props.items]);

  const fermer = () => {
    props.onFermer();
  };

  return (
    <div
      className={`inventaire-popup ${props.ouvert ? "i-ouvert" : "i-ferme"}`}
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
          {props.items.map((item, index) => (
            <div className="item" key={index}>
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
    </div>
  );
};

export default PopUpInventaire;
