import logo from '../../assets/logo_v1.png';
import './connexion.css';
import { useState } from 'react';

function Connexion() {
  document.title = "Connexion";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Objet contenant les données de l'utilisateur à envoyer
    const userData = {
      email,
      password,
    };

    try {
      // Envoi de la requête POST à l'API de connexion
      const response = await fetch('http://localhost:3000/api/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Convertir la réponse en JSON
      const data = await response.json();

      if (response.ok) {
        console.log('Connexion réussie:', data);
        // Gestion après la connexion réussie, par exemple redirection ou mise à jour de l'état
      } else {
        console.error('Erreur lors de la connexion:', data);
        // Gestion de l'affichage d'un message d'erreur
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Gestion de l'affichage d'un message d'erreur réseau ou autre
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
          <button type="submit">Se connecter</button>
        </form>
      </div>
  );
}

export default Connexion;
