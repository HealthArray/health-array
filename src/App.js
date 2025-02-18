import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import InsulinCalculator from './pages/InsulinCalculator';
import Home from './pages/Home';

function App() {
  // > Body weight (w)
  // > Blood glucose (bg)
  // > Target BG (tbg)
  // > Carb content (cc)



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/insulin-calculator' element={<InsulinCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
