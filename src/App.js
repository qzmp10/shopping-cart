import './App.css';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import FinishCheckout from './components/FinishCheckout';
import ContactUs from './components/Contact';


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
  const [cartArray, setCartArray] = useState([0, 0, 0, 0]);
  const [backgroundUrl, setBackgroundUrl] = ('https://img.freepik.com/premium-vector/fruit-vegetables-background_23-2148488960.jpg')
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [carrotUrl, setCarrotUrl] = useState('https://health.clevelandclinic.org/wp-content/uploads/sites/3/2017/07/coloredCarrots-022521-LD-770x533-1.jpg');
  const [potatoUrl, setPotatoUrl] = useState('https://cdn.britannica.com/08/194708-050-56FF816A/potatoes.jpg');
  const [tomatoUrl, setTomatoUrl] = useState('https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg');
  const [cucumberUrl, setCucumberUrl] = useState('https://post.healthline.com/wp-content/uploads/2020/09/AN88-Cucumbers-732x549-thumb-1-732x549.jpg');


  const getProductInfoCallback = (productName, productPrice) => {
    window.localStorage.setItem('productName', productName);
    window.localStorage.setItem('productPrice', productPrice);
    setProductPageName(productName);
    setProductPagePrice(productPrice);
  }

  useEffect(() => {
    console.log(sessionStorage);
    let storageArray = JSON.parse(sessionStorage.getItem('cartArray'));
    if (sessionStorage.length !== 0) {
      setCarrotCart(storageArray[0]);
      setPotatoCart(storageArray[1]);
      setTomatoCart(storageArray[2]);
      setCucumberCart(storageArray[3]);
    }
    setCurrentImageUrl(localStorage.getItem('currentImageUrl'));
  }, [])


  useEffect(() => {
    setCartArray([carrotCart, potatoCart, tomatoCart, cucumberCart]);
    setCartTotal(carrotCart + potatoCart + tomatoCart + cucumberCart)
  }, [carrotCart, potatoCart, tomatoCart, cucumberCart]);

  useEffect(() => {
    sessionStorage.setItem('cartArray', JSON.stringify(cartArray));
    console.log(sessionStorage)
  }, [cartArray])

  useEffect(() => {
    localStorage.setItem('currentImageUrl', currentImageUrl);
  }, [currentImageUrl])

  const addItemsToCart = (item) => {

    setCartTotal(cartTotal + 1);

    item === 'Carrot' ? (
      setCarrotCart(carrotCart + 1)
    ) : item === 'Potato' ? (
      setPotatoCart(potatoCart + 1)
    ) : item === 'Tomato' ? (
      setTomatoCart(tomatoCart + 1)
    ) : item === 'Cucumber' ? (
      setCucumberCart(cucumberCart + 1)
    ) : (
      console.log('error')
    )

  }

  const removeItemsFromCart = (item) => {

    if (cartTotal === 0) {
      return;
    }

    if (item === 'Carrot' && carrotCart !== 0) {
      setCarrotCart(carrotCart - 1)
    } else if (item === 'Potato' && potatoCart !== 0) {
      setPotatoCart(potatoCart - 1)
    } else if (item === 'Tomato' && tomatoCart !== 0) {
      setTomatoCart(tomatoCart - 1)
    } else if (item === 'Cucumber' && cucumberCart !== 0) {
      setCucumberCart(cucumberCart - 1)
    } else {
      return;
    }

    setCartTotal(cartTotal - 1);

  }

  const removeAll = () => {
    let zero = 0;
    setCarrotCart(zero);
    setCucumberCart(zero);
    setPotatoCart(zero);
    setTomatoCart(zero);
    setCartTotal(zero);
  }

  const getImageUrl = (url) => {
    setCurrentImageUrl(url);
  }

  return (
    <Router>
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
            getImage={getImageUrl}
          />}></Route>

          <Route path='/products/:veggie' element={<ProductPage
            productName={productPageName}
            productPrice={productPagePrice}
            addItems={addItemsToCart}
            imageUrl={currentImageUrl}
          />}></Route>

          <Route path='/cart' element={<CartPage
            productName={productPageName}
            productPrice={productPagePrice}
            addItems={addItemsToCart}
            removeItems={removeItemsFromCart}
            itemCount={cartTotal}
            cartArray={cartArray}
            carrot={carrot}
            potato={potato}
            tomato={tomato}
            cucumber={cucumber}
            carrotUrl={carrotUrl}
            potatoUrl={potatoUrl}
            tomatoUrl={tomatoUrl}
            cucumberUrl={cucumberUrl}
            removeAll={removeAll}
          />}></Route>
          <Route path='/checkout' element={<FinishCheckout />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
