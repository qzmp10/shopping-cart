import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Vegetable(props) {

    const clicky = () => {
        props.callbackFn(props.veggie, props.veggiePrice);
        props.getImage(props.imgSrc)
    }


    return (
        // the ? was to fix a typeError in jest triggered by .toLowerCase()
        <Link to={`/products/${props.veggie?.toLowerCase()}`} onClick={clicky}>
            <div className="vegetable" data-testid='productDiv'>
                <img className='img' alt='veggie' src={props.imgSrc} />
                <div className='textAndPrice'>
                    <div className='text'>{props.veggie}</div>
                    <div className='price'>${props.veggiePrice}</div>
                </div>
            </div>
        </Link>

    )
}