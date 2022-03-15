import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* Path="*" signifie s'il n y a rien de declarer comme page ou si la page n'existe pas */}
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;