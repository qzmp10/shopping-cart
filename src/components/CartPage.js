import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function CartPage(props) {
    const { cartArray } = props;

    const clicky = (e) => {
        console.log(e.target.dataset.id)
        props.addItems(e.target.dataset.id);
    }

    const clicky2 = (e) => {
        console.log(e.target.dataset.id)
        props.removeItems(e.target.dataset.id);
    }

    return (
        <div className='cartPageContainer'>
            <h1 className='cartPageHeader'>Your Cart</h1>

            {cartArray[0] !== 0 ? (
                <div className='cartBlock' >
                    <img className='cartImg' alt='product' />
                    <div className='cartText'>
                        <div className='productText'>{props.carrot[0]}</div>
                        <div className='productCartPrice'>Total ${(props.carrot[1] * cartArray[0]).toFixed(2)}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase' data-id='Carrot' onClick={clicky}>+</button>
                        <div className='itemCount'> {cartArray[0]} </div>
                        <button className='decrease' data-id='Carrot' onClick={clicky2}>-</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            {cartArray[1] !== 0 ? (
                <div className='cartBlock' >
                    <img className='cartImg' alt='product' />
                    <div className='cartText'>
                        <div className='productText'>{props.potato[0]}</div>
                        <div className='productCartPrice'>Total ${(props.potato[1] * cartArray[1]).toFixed(2)}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase' data-id='Potato' onClick={clicky}>+</button>
                        <div className='itemCount'> {cartArray[1]} </div>
                        <button className='decrease' data-id='Potato' onClick={clicky2}>-</button>
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
                        <div className='productCartPrice'>Total ${(props.tomato[1] * cartArray[2]).toFixed(2)}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase' data-id='Tomato' onClick={clicky}>+</button>
                        <div className='itemCount'> {cartArray[2]} </div>
                        <button className='decrease' data-id='Tomato' onClick={clicky2}>-</button>
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
                        <div className='productCartPrice'>Total ${(props.cucumber[1] * cartArray[3]).toFixed(2)}</div>
                    </div>
                    <div className='cartCounter'>
                        <button className='increase' data-id='Cucumber' onClick={clicky}>+</button>
                        <div className='itemCount' > {cartArray[3]} </div>
                        <button className='decrease' data-id='Cucumber' onClick={clicky2}>-</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

            <button className='buyNow'> <Link to='/checkout'>CHECKOUT</Link> </button>
        </div>
    )
}