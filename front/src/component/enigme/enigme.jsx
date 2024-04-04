import React, { useState } from 'react';
import './enigme.css';
import { useNavigate } from 'react-router-dom';
import { levenshtein } from '../../fonctions';

function Enigme({ repEnigme, sectionVictoireEnigme, sectionDefaiteEnigme }) {
    const navigate = useNavigate();
    const [reponseUtilisateur, setReponseUtilisateur] = useState("");

    const handleChange = (event) => {
        setReponseUtilisateur(event.target.value.toLowerCase());
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleClick();
        }
    };

    const handleClick = () => {
        if (reponseUtilisateur !== "") {
            const distance = levenshtein(reponseUtilisateur, repEnigme);
            console.log(reponseUtilisateur);
            if (distance <= 3) {
                console.log("La réponse est correcte");
                navigate(`/Jeu?idSection=${sectionVictoireEnigme}`);
            } else {
                console.log("La réponse est incorrecte");
                navigate(`/Jeu?idSection=${sectionDefaiteEnigme}`);
            }
        } else {
            console.log("Veuillez entrer une réponse");
        }
    };

    return (
        <>  
            <div className="conteneurEnigme">
                <form className="formEnigme">
                    <label htmlFor="reponse">Réponse :</label>
                    <input type="text" id="reponse" name="reponse" required onChange={handleChange} onKeyDown={handleKeyPress} />
                </form>
                <button id="boutonValidation" onClick={handleClick}>Valider</button>
            </div>
        </>
    );
}

export default Enigme;
