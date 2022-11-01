import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vegetable from './Vegetable';

export default function Products(props) {

    return (
        <>
            <div className='productBox' >
                <h1 className='products' > Products </h1>
                <div className='product-container'>
                    <Vegetable veggie={props.carrot} veggiePrice={props.carrotPrice} callbackFn={props.callbackFn}/>
                    <Vegetable veggie={props.potato} veggiePrice={props.potatoPrice} callbackFn={props.callbackFn}/>
                    <Vegetable veggie={props.tomato} veggiePrice={props.tomatoPrice} callbackFn={props.callbackFn}/>
                    <Vegetable veggie={props.cucumber} veggiePrice={props.cucumberPrice} callbackFn={props.callbackFn}/>
                </div>
            </div>
        </>
    );
}