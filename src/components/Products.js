import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vegetable from './Vegetable';

export default function Products() {
    return (
        <>
            <div className='productBox'>
                <h1 className='products'> Products </h1>
                <div className='product-container'>
                    <Vegetable />
                    <Vegetable />
                    <Vegetable />
                    <Vegetable />
                </div>
            </div>
        </>
    );
}