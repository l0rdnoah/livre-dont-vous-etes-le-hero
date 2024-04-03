import logo from '../../assets/logo_v1.png';
import './connexion.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Connexion() {
  document.title = "Connexion";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  sessionStorage.removeItem('id_utilisateur');

  const connexion = async (e) => {
    e.preventDefault();
    
    // Objet contenant les données de l'utilisateur à envoyer
    const userData = {
      email,
      password,
    };

    try {
      // Envoi de la requête POST à l'API de connexion
      const response = await fetch('http://localhost:3000/api/utilisateur/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Convertir la réponse en JSON
      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('id_utilisateur', data.userId);
        navigate('/Menu');
      }

    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setErrorMessage('Erreur lors de la connexion.');
    }
  };
  return (
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <form onSubmit={connexion} id="form">
          <div className="champ">
            <label>
              Email :
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="champ">
            <label>
              Mot de passe :
            </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Se connecter</button>
          <p>{errorMessage}</p> 
          <div className='containerError'>
            <Link to={`/Inscription`}>
              <button>{"S'inscrire"}</button>
            </Link>           
          </div>
        </form>
      </div>
  );
}

export default Connexion;
