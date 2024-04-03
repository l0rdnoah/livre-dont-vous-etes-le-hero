import logo from '../../assets/logo_v1.png';
import './inscription.css';
import { useState } from 'react';

function Inscription() {
  document.title = "Inscription";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que les mots de passe correspondent
    if (password !== password2) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return; // Arrêter l'exécution si les mots de passe ne correspondent pas
    }

    try {
      // Appel à l'API pour s'inscrire
      const response = await fetch('http://localhost:3000/api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('La requête a échoué');
      }

      const result = await response.json();
      console.log('Inscription réussie:', result);
      // Ici, vous pourriez par exemple rediriger l'utilisateur vers une page de connexion
      // ou afficher un message de succès
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
        </form>
      </div>
  );
}

export default Inscription;
