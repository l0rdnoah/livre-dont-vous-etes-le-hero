import logo from '../../assets/logo_v1.png';
import './connexion.css';
import { useState } from 'react';

function Connexion() {
  document.title = "Connexion";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Ajoutez ici la logique de traitement de la connexion
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
