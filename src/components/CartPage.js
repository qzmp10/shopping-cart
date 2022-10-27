import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function CartPage(props) {
    return (
        <div className='cartPageContainer'>
            <h1 className='cartPageHeader'>Your Cart</h1>
            <div className='cartBlock'>
                <img className='cartImg' alt='product' />
                <div className='cartCounter'>
                    <button className='increase'>+</button>
                    <div className='itemCount'> 0 </div>
                    <button className='decrease'>-</button>
                </div>
            </div>
            <button className='buyNow'> <Link to='/checkout'>CHECKOUT</Link> </button>
        </div>
    )
}