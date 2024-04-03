import './App.css';
import Menu from './pages/menu_principal/menu.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jeu from './Jeu.jsx';
import Connexion from './pages/connexion/connexion.jsx';
import Inscription from './pages/inscription/inscription.jsx';
import Charger from './pages/charger/charger.jsx';
import Test from './Test.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Jeu" element={<Jeu />} />
        <Route path="/" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Charger" element={<Charger />} />
        <Route path="/Test" element={<Test />} />

        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
