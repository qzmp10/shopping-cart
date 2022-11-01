import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Link, MemoryRouter } from 'react-router-dom'
import Products from './components/Products';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import FinishCheckout from './components/FinishCheckout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}>
          </Route>
          <Route path='/products/:veggie' element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/checkout' element={<FinishCheckout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
