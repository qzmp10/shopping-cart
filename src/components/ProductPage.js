import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function ProductPage(props) {
    return (
        <div className='productPageContainer'>

            <h1 className='productPageHeader'>Product Page</h1>
            <img className='productPageImg' alt='veggie' />

            <div className='productDescription'>
                <div>Product Description</div>
                <div className='productPrice'>Price</div>
            </div>
            <button className='addToCart pageButton'> ADD TO CART</button>

            <button className='checkoutNow pageButton'><Link to='/cart'>CHECKOUT NOW</Link></button>


        </div>
    )
}