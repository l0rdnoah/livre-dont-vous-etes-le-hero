import './App.css';
import Menu from './pages/menu_principal/menu.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jeu from './Jeu.jsx';
import Connexion from './pages/connexion/connexion.jsx';
import Inscription from './pages/inscription/inscription.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Jeu" element={<Jeu />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />

        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
