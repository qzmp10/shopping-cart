import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function CartPage(props) {
    const { cartArray } = props;

    return (
        <div className='cartPageContainer'>
            <h1 className='cartPageHeader'>Your Cart</h1>

            {cartArray[0] !== 0 ? (
                <div className='cartBlock' >
                    <img className='cartImg' alt='product' />
                    <div className='cartText'>
                        <div className='productText'>{props.carrot[0]}</div>
                        <div className='productCartPrice'>${props.carrot[1]}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase'>+</button>
                        <div className='itemCount'> {cartArray[0]} </div>
                        <button className='decrease'>-</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            {cartArray[1] !== 0  ? (
                <div className='cartBlock' >
                    <img className='cartImg' alt='product' />
                    <div className='cartText'>
                        <div className='productText'>{props.potato[0]}</div>
                        <div className='productCartPrice'>${props.potato[1]}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase'>+</button>
                        <div className='itemCount'> {cartArray[1]} </div>
                        <button className='decrease'>-</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            {cartArray[2] !== 0 ? (
                <div className='cartBlock' >
                    <img className='cartImg' alt='product' />
                    <div className='cartText'>
                        <div className='productText'>{props.tomato[0]}</div>
                        <div className='productCartPrice'>${props.tomato[1]}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase'>+</button>
                        <div className='itemCount'> {cartArray[2]} </div>
                        <button className='decrease'>-</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            {cartArray[3] !== 0 ? (
                <div className='cartBlock' >
                    <img className='cartImg' alt='product' />
                    <div className='cartText'>
                        <div className='productText'>{props.cucumber[0]}</div>
                        <div className='productCartPrice'>${props.cucumber[1]}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase'>+</button>
                        <div className='itemCount'> {cartArray[3]} </div>
                        <button className='decrease'>-</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            <button className='buyNow'> <Link to='/checkout'>CHECKOUT</Link> </button>
        </div>
    )
}