import React, { useRef, useEffect, useState } from 'react';
import Dice from 'react-dice-roll';
import './Des.css';
import PropTypes from 'prop-types';


function Des({ nbdes = 2, boutonenabled = true, setresdes, setBoutonEnabled }) {

    // Initialisation d'un état pour stocker les références des dés
    const [diceRefs, setDiceRefs] = useState([]);

    // Utilisation de useEffect pour initialiser les références après le premier rendu
    useEffect(() => {
        setDiceRefs((refs) => Array(nbdes).fill().map((_, i) => refs[i] || React.createRef()));
    }, [nbdes]);


    var desFini = 0
    var somme = 0

    // Fonction pour lancer tous les dés
    const rollAllDices = () => {
        desFini = 0
        somme = 0
        setBoutonEnabled(false)
        diceRefs.forEach(ref => {
            if (ref.current) {
                ref.current.rollDice();
            }
        });
    };

    const addSomme = (value) => {
        somme += value
        desFini++
        if (desFini === nbdes) {
            setBoutonEnabled(true)
            setresdes(somme)
        }
    }




    return (
        <div className={`des`}>
            {diceRefs.map((ref, index) => (
                <div key={index} className='des-unit'>
                    <Dice ref={ref} onRoll={(value) => addSomme(value)} size={100} />
                </div>
            ))}
            <button disabled={!boutonenabled} onClick={rollAllDices}>Lancer les dés</button>
        </div>
    );
}

export default Des;
