import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/shopping-cart/'>
                <h1 className='logo'>Veggie's</h1>
            </Link>

            <div className='navigateContainer'>

                <Link to='/products'>
                    <div className='navProducts' role='navigation'>Products</div>
                </Link>

                <Link to='/cart'>
                    <div className='cart' role='navigation'>
                        <div>Cart</div>
                        {props.cartItems !== 0 ? (
                            <div className='cartCount'>{props.cartItems}</div>
                        ) : (
                            <div></div>
                        )}

                    </div>
                </Link>

                <Link to='/contact'>
                    <div className='contactUs' role='navigation'>Contact Us</div>
                </Link>

            </div>
        </div>
    )
}