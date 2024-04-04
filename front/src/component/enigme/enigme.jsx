import React, { useState } from 'react';
import './enigme.css';
import { useNavigate } from 'react-router-dom';
import { levenshtein } from '../../fonctions';

function Enigme({ repEnigme, sectionVictoireEnigme, sectionDefaiteEnigme }) {
    console.log("repEnigme",repEnigme);
    console.log("sectionVictoireEnigme",sectionVictoireEnigme);
    console.log("sectionDefaiteEnigme",sectionDefaiteEnigme);
    const navigate = useNavigate();
    const [reponseUtilisateur, setReponseUtilisateur] = useState(""); // Utilisation d'un état pour stocker la réponse de l'utilisateur

    const handleChange = (event) => {
        setReponseUtilisateur(event.target.value.toLowerCase()); // Mettre à jour la réponse de l'utilisateur lorsqu'il change la valeur de l'input
    };

    const handleClick = () => {
        if (reponseUtilisateur !== "") {
            const distance = levenshtein(reponseUtilisateur, repEnigme); // Calculer la distance entre la réponse de l'utilisateur et la réponse de l'énigme
            console.log(reponseUtilisateur);
            if (distance <= 3) {
                console.log("La réponse est correcte");
                // Redirection à la section de victoire
                navigate(`/Jeu?idSection=${sectionVictoireEnigme}`);
            } else {
                console.log("La réponse est incorrecte");
                // Redirection à la section de défaite
                navigate(`/Jeu?idSection=${sectionDefaiteEnigme}`);
            }
        } else {
            console.log("Veuillez entrer une réponse");
        }
    };

    return (
        <>  
            <div className="conteneurEnigme">
                <form action="" className="formEnigme">
                    <label htmlFor="reponse">Réponse :</label>
                    <input type="text" id="reponse" name="reponse" required onChange={handleChange}></input> {/* Utilisation de onChange pour détecter les changements dans l'input */}
                </form>
                <button id="boutonValidation" onClick={handleClick}>Valider</button>
            </div>
        </>
    );
}

export default Enigme;