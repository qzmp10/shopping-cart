import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function ContactUs(props) {

    const [message, setMessage] = useState('');

    const clicky = (e) => {
        e.preventDefault();
        console.log('yuh')
        let newMessage = 'Your message was sent, we will respond shortly.'
        setMessage(newMessage)
    }

    return (
        <>
            <div className='contactBlock'>
                <h1 className='contactHeader'>Contact Us</h1>
                <form onSubmit={clicky}>
                    <label htmlFor='contactText'>Write here:</label>
                    <textarea id='contactText'></textarea>
                    <div className='submitted'>{message}</div>
                    <input type='submit' />
                </form>
            </div>

        </>
    )
}