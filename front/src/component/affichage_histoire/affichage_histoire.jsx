import React, { useState } from 'react';
import './affichage_histoire.css';

function Histoire(props) {


  return (
    <>
    <div className="histoire">
        <p>{props.texte}</p>
    </div>
    </>
  )
}
export default Histoire;