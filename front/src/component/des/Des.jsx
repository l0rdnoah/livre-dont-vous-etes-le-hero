import React, { useRef, useEffect, useState } from 'react';
import Dice from 'react-dice-roll';
import './Des.css';

function Des(props) {
    const nbdes = props.nbdes ? props.nbdes : 2;
    console.log(`Nombre de dés: ${nbdes}`);

    // Initialisation d'un état pour stocker les références des dés
    const [diceRefs, setDiceRefs] = useState([]);

    // Utilisation de useEffect pour initialiser les références après le premier rendu
    useEffect(() => {
        setDiceRefs((refs) => Array(nbdes).fill().map((_, i) => refs[i] || React.createRef()));
    }, [nbdes]);

    console.log(diceRefs);

    var desFini = 0
    var somme = 0

    // Fonction pour lancer tous les dés
    const rollAllDices = () => {
        desFini = 0
        somme = 0
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
            console.log(`Somme des dés: ${somme}`);
        }
    }

    return (
        <div className={`des`}>
            {diceRefs.map((ref, index) => (
                <div key={index} className='des-unit'>
                    <Dice ref={ref} onRoll={(value) => addSomme(value)} size={100} />
                </div>
            ))}
            <button onClick={rollAllDices}>Lancer les dés</button>
        </div>
    );
}

export default Des;
