import React, { useState, useEffect } from 'react';

// ContextMenu component
const ContextMenu = ({ items, position,onClose, iditem }) => {

    useEffect(() => {
        // Ajout d'un écouteur d'événements au document pour détecter les clics à l'extérieur du menu contextuel
        const handleClickOutside = (event) => {
          onClose(); // Appelle la fonction de fermeture passée en prop
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          // Suppression de l'écouteur d'événements lors du nettoyage du composant
          document.removeEventListener('click', handleClickOutside);
        };
      }, [onClose]); 

      function appelFonction(f) {
        f(iditem);
        onClose();
      }

  return (
    <ul
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        listStyleType: 'none',
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid #ddd',
        boxShadow: '0px 0px 15px #aaa',
        borderRadius: '5px',
        zIndex: 100,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, index) => (
        <li key={index} onClick={() => {appelFonction(item[1])}} style={{ padding: '5px', cursor: 'pointer' }}>
          {item[0]}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;