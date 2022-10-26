import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Products from './components/Products';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
