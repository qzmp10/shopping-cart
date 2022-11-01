import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Vegetable(props) {
    const [productName, setProductName] = useState(props.veggie[0])
    const [price, setPrice] = useState(props.veggie[1])

    return (
        <Link to={`/products/${props.veggie[0].toLowerCase()}`} 
        state={{productName: productName,
        price: price}} >
            <div className="vegetable" data-testid='productDiv'>
                <img className='img' alt='veggie'/>
                <div className='text'>{productName}</div>
                <div className='price'>${price}</div>
            </div>
        </Link>

    )
}