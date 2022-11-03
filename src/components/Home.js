
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <>
            <div className='home'>
                <h1 className='header'>Veggie's veggies</h1>
                <div className='underHeader' role='second-heading'>Fresh vegetables, shipped directly to you</div>
                <Link to='/products'>
                    <div className='shopNow'>Shop Now</div>
                </Link>
            </div>
        </>

    )
}