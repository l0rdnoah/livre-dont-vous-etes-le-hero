import React, { useState } from 'react';
import './affichage_histoire.css';

function Histoire(props) {

  const [texte, setTexte] = useState(props.texte ? props.texte : "Il était une fois...");


  return (
    <>
    <div className="histoire">
        <p>{texte}</p>
    </div>
    </>
  )
}
export default Histoire;