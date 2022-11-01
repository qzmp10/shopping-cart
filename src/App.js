import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import FinishCheckout from './components/FinishCheckout';


function App() {
  const [carrot, setCarrot] = useState(['Carrot', 39.99]);
  const [potato, setPotato] = useState(['Potato', 69.99]);
  const [tomato, setTomato] = useState(['Tomato', 2.99]);
  const [cucumber, setCucumber] = useState(['Cucumber', 129.99]);
  const [productPageName, setProductPageName] = useState('');
  const [productPagePrice, setProductPagePrice] = useState('');
  const [carrotCart, setCarrotCart] = useState(0);
  const [potatoCart, setPotatoCart] = useState(0);
  const [tomatoCart, setTomatoCart] = useState(0);
  const [cucumberCart, setCucumberCart] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getProductInfoCallback = (productName, productPrice) => {
    window.localStorage.setItem('productName', productName);
    window.localStorage.setItem('productPrice', productPrice);
    setProductPageName(productName);
    setProductPagePrice(productPrice);
  }

  useEffect(() => {
    console.log(carrotCart, potatoCart, tomatoCart, cucumberCart);

    window.localStorage.setItem('cart',
    JSON.stringify([{ count: cartTotal }, { carrotCart: carrotCart, potatoCart: potatoCart, tomatoCart: tomatoCart, cucumberCart: cucumberCart }]));

  }, [cartTotal])

  const addItemsToCart = (item) => {

    setCartTotal(cartTotal + 1);
    

    item === 'Carrot' ? (
      setCarrotCart(carrotCart + 1)
    ) : item === 'Potato' ? (
      setPotatoCart(potatoCart + 1)
    ) : item === 'Tomato' ? (
      setTomatoCart(tomatoCart + 1)
    ) : (
      setCucumberCart(cucumberCart + 1)
    )
    
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cartItems={cartTotal} />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>

          <Route path='/products' element={<Products
            carrot={carrot[0]}
            potato={potato[0]}
            tomato={tomato[0]}
            cucumber={cucumber[0]}
            carrotPrice={carrot[1]}
            potatoPrice={potato[1]}
            tomatoPrice={tomato[1]}
            cucumberPrice={cucumber[1]}
            callbackFn={getProductInfoCallback}
          />}></Route>

          <Route path='/products/:veggie' element={<ProductPage
            productName={productPageName}
            productPrice={productPagePrice}
            addItems={addItemsToCart}
          />}></Route>

          <Route path='/cart' element={<CartPage
            productName={productPageName}
            productPrice={productPagePrice}
            addItems={addItemsToCart}
            itemCount={cartTotal}
            carrotCart={carrotCart}
          />}></Route>
          <Route path='/checkout' element={<FinishCheckout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
