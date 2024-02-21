import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register.js';
import Login from './Components/Login.js';


function App() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
        </BrowserRouter>
      
  );
}

export default App;

