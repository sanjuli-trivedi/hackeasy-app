// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MedicineList from './Medicine';
import MedicineDetails from './MedicineDetails'
import Temp from './data';
import './App.css';

  
const App = () => {
  return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/medicines" element={<MedicineList />} />
            <Route path="/user" element={<Temp />} />
            <Route path="/medicineDetails/:id" element={<MedicineDetails />} />
          </Routes>
        </Router>
  );
};

export default App;
