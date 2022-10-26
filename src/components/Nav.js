import React from 'react';

export default function Nav(props) {
    return (
        <div className='nav'>
            <h1 className='logo'>Logo</h1>
            <div className='navigateContainer'>
                <div className='navProducts'>Products</div>
                <div className='cart'>Cart</div>
                <div className='contactUs'>Contact Us</div>
            </div>
        </div>
    )
}