
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <>
            <div className='home'>
                <h1 className='header'>Homepage</h1>
                <div className='underHeader' role='second-heading'>Bla, bla bla.</div>
                <Link to='/products'>
                    <div className='shopNow'>Shop</div>
                </Link>
            </div>
        </>

    )
}