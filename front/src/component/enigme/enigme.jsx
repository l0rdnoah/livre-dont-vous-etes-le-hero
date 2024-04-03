import React from 'react';
import './enigme.css';
import { useNavigate } from 'react-router-dom';
import { levenshtein } from '../../fonctions';

function Enigme() {
    const navigate = useNavigate();

    const handleClick = () => {
        const reponse = document.getElementById('reponse').value.toLowerCase();
        const target = "vent";
        const distance = levenshtein(reponse, target);
        
        if (distance <= 3) {
            console.log("La réponse est correcte");
            // redirection à la section 9
            navigate("/Jeu?idSection=9");
        } else {
            navigate("/Jeu?idSection=1");
            console.log("La réponse est incorrecte");
        }
    };

    return (
        <>  
            <div className="conteneurEnigme">
                <form action="" className="formEnigme">
                    <label htmlFor="reponse">Réponse :</label>
                    <input type="text" id="reponse" name="reponse" required></input>
                </form>
                <button id="boutonValidation" onClick={handleClick}>Valider</button>
            </div>
        </>
    );
}
export default Enigme;