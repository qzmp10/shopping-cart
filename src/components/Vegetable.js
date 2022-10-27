import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Vegetable(props) {
    return (
        <div className="vegetable" data-testid='productDiv'>
            <img className='img'/>
            <div className ='text'>Text</div>
            <div className='price'>Price</div>
        </div>
    )
}