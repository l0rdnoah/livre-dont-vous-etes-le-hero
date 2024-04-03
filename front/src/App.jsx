import React from 'react';
import './App.css';
import Menu from './component/menu_principal/menu.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jeu from './Jeu.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Jeu" element={<Jeu />} />
        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
