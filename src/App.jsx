import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Importar la página Home desde el directorio pages

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
