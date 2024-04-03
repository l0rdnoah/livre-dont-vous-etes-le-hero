import React, { useState, useEffect } from 'react';
import './PopUpInventaire.css';

const PopUpInventaire = (props) => {
  const fermer = () => {
    props.onFermer();
  };

  return (
    <div className={`inventaire-popup ${props.ouvert ? 'i-ouvert' : 'i-ferme'}`}>
      <div className="inventaire-container">
        <div className="topbarre">
          <h3 className="titre">Inventaire</h3>
          <div
            className="fermer"
            onClick={() => {
              fermer();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
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
                src={item.image}
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
