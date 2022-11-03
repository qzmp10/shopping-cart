import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function ProductPage(props) {

    const clicky = () => {
        if(props.productName === '') {
            props.addItems(window.localStorage.productName);
        } else {
            props.addItems(props.productName);
        }
    }

    return (

        <div className='productPageContainer'>

            {props.productName !== '' ? (
                <h1 className='productPageHeader'>{props.productName}</h1>
            ) : (
                <h1 className='productPageHeader'>{window.localStorage['productName']}</h1>
            )}

            <img className='productPageImg' alt='veggie' src={props.imageUrl}/>

            <div className='productDescription'>
                {props.productName === 'Tomato' || window.localStorage['productName'] === 'Tomato' ? (
                    <div> A nice, round and juicy Tomato </div>
                )
                    : props.productName === 'Cucumber' || window.localStorage['productName'] === 'Cucumber' ? (
                        <div> A long, vibrant, and green Cucumber </div>
                    )
                        : props.productName === 'Potato' || window.localStorage['productName'] === 'Potato' ? (
                            <div> A firm, polished, and delicious Potato </div>
                        )
                            : (
                                <div> A clean, shining, and delightful Carrot </div>
                            )}
                {props.productPrice !== '' ? (
                    <div className='productPrice'>${props.productPrice}</div>
                ) : (
                    <div className='productPrice'>${window.localStorage['productPrice']}</div>
                )}
            </div>
            <button className='addToCart pageButton' onClick={clicky}> ADD TO CART</button>

            <button className='checkoutNow pageButton'><Link to='/cart'>CHECKOUT NOW</Link></button>


        </div>
    )
}