import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Vegetable(props) {
    
    const clicky = () => {
        props.callbackFn(props.veggie, props.veggiePrice);
    }

    return (
        <Link to={`/products/${props.veggie.toLowerCase()}`} onClick={clicky}>
            <div className="vegetable" data-testid='productDiv'>
                <img className='img' alt='veggie'/>
                <div className='text'>{props.veggie}</div>
                <div className='price'>${props.veggiePrice}</div>
            </div>
        </Link>

    )
}