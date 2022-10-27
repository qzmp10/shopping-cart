import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function FinishCheckout(props) {
    return (
        <div className='checkoutPageContainer'>
            <h1 className='checkoutPageHeader'>Checkout Complete!</h1>
            <div className='checkoutDescription'>Your items will be shipped shortly!</div>
        </div>
    )
}