import logo from '../../assets/logo_v1.png';
import './inscription.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Inscription() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/utilisateur/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('La requête a échoué');
      } else {
        // Redirection après inscription réussie
        navigate('/');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      setErrorMessage('Erreur lors de l\'inscription.');
    }
  };
  return (
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <form onSubmit={handleSubmit} id="form">
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
          <div className="champ">
            <label>
              Confirmer le mot de passe :
            </label>
            <input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <button type="submit">{"S'inscrire"}</button>
          <p>{errorMessage}</p> 
          <div className='containerError'>
            <Link to={`/`}>
              <button>Retour à la page de connexion</button>
            </Link>           
          </div>
        </form>
      </div>
  );
}

export default Inscription;
