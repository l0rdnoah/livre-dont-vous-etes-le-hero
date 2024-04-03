import logo from '../../assets/logo_v1.png';
import './inscription.css';
import { useState } from 'react';

function Inscription() {
  document.title = "Inscription";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
