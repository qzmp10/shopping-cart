import React from 'react';

export default function Nav(props) {
    return (
        <div className='nav'>
            <h1 className='logo'>Logo</h1>
            <div className='navigateContainer'>
                <div className='navProducts' role='navigation'>Products</div>
                <div className='cart' role='navigation'>Cart</div>
                <div className='contactUs' role='navigation'>Contact Us</div>
            </div>
        </div>
    )
}