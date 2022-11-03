import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vegetable from './Vegetable';

export default function Products(props) {

    return (
        <>
            <div className='productBox' >
                <h1 className='products' > Products </h1>
                <div className='product-container'>
                    <Vegetable veggie={props.carrot} veggiePrice={props.carrotPrice} callbackFn={props.callbackFn}
                        imgSrc={'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2017/07/coloredCarrots-022521-LD-770x533-1.jpg'}
                        getImage={props.getImage} />
                    <Vegetable veggie={props.potato} veggiePrice={props.potatoPrice} callbackFn={props.callbackFn}
                        imgSrc={'https://cdn.britannica.com/08/194708-050-56FF816A/potatoes.jpg'}
                        getImage={props.getImage} />
                    <Vegetable veggie={props.tomato} veggiePrice={props.tomatoPrice} callbackFn={props.callbackFn}
                        imgSrc={'https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg'}
                        getImage={props.getImage} />
                    <Vegetable veggie={props.cucumber} veggiePrice={props.cucumberPrice} callbackFn={props.callbackFn}
                        imgSrc={'https://post.healthline.com/wp-content/uploads/2020/09/AN88-Cucumbers-732x549-thumb-1-732x549.jpg'}
                        getImage={props.getImage} />
                </div>
            </div>
        </>
    );
}