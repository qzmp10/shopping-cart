import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vegetable from './Vegetable';

export default function Products() {
    const [carrot, setCarrot] = useState(['Carrot', 39.99]);
    const [potato, setPotato] = useState(['Potato', 69.99]);
    const [tomato, setTomato] = useState(['Tomato', 2.99]);
    const [cucumber, setCucumber] = useState(['Cucumber', 129.99]);

    return (
        <>
            <div className='productBox'>
                <h1 className='products'> Products </h1>
                <div className='product-container'>
                    <Vegetable veggie={carrot}/>
                    <Vegetable veggie={potato}/>
                    <Vegetable veggie={tomato}/>
                    <Vegetable veggie={cucumber}/>
                </div>
            </div>
        </>
    );
}