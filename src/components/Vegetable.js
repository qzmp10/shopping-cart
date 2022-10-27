import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Vegetable(props) {
    return (
        <Link to='/products/veggie/'>
            <div className="vegetable" data-testid='productDiv'>
                <img className='img' alt='veggie'/>
                <div className='text'>Text</div>
                <div className='price'>Price</div>
            </div>
        </Link>

    )
}