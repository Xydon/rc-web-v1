import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Landing from './screens/Landing/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
  );
}

export default App;
