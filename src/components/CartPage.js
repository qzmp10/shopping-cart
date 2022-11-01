import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function CartPage(props) {
    let array = [];
    for(let i =0; i < props.itemCount; i++) {
        array.push('x');
    }
    return (
        <div className='cartPageContainer'>
            <h1 className='cartPageHeader'>Your Cart</h1>

            <div className='cartBlock'>
                <img className='cartImg' alt='product' />

                <div className='cartText'>
                    {props.productName !== '' ? (
                        <div className='productText'>{props.productName}</div>
                    ) : (
                        <div className='productText'>{window.localStorage['productName']}</div>
                    )}

                    {props.productPrice !== '' ? (
                        <div className='productCartPrice'>${props.productPrice}</div>
                    ) : (
                        <div className='productCartPrice'>${window.localStorage['productPrice']}</div>
                    )}
                </div>


                <div className='cartCounter'>
                    <button className='increase'>+</button>
                    <div className='itemCount'> {props.carrotCart}</div>
                    <button className='decrease'>-</button>
                </div>
            </div>

            <button className='buyNow'> <Link to='/checkout'>CHECKOUT</Link> </button>
        </div>
    )
}