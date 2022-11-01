import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function ProductPage(props) {

    useEffect(() => {
        console.log(props.productName)
    }, [])
    return (

        <div className='productPageContainer'>

            <h1 className='productPageHeader'>{props.productName}</h1>
            <img className='productPageImg' alt='veggie' />

            <div className='productDescription'>
                {props.productName === 'Tomato' ? (
                    <div> A nice, round and juicy Tomato </div>
                )
                    : props.productName === 'Cucumber' ? (
                        <div> A long, vibrant, and green Cucumber </div>
                    )
                        : props.productName === 'Potato' ? (
                            <div> A firm, polished, and delicious Potato </div>
                        )
                            : (
                                <div> A clean, shining, and delightful Carrot </div>
                            )}
                <div className='productPrice'>${props.productPrice}</div>
            </div>
            <button className='addToCart pageButton'> ADD TO CART</button>

            <button className='checkoutNow pageButton'><Link to='/cart'>CHECKOUT NOW</Link></button>


        </div>
    )
}