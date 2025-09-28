import React, { useState, useEffect } from 'react';
import './css/cart.css';
import Navbar from './Navbar';

function Cart() {
    function getItemInCart() {
        const items = localStorage.getItem('cart');
        return items ? JSON.parse(items) : [];
    }
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(getItemInCart());
    }, []);

    const handleDecreaseItem = (item) => {
        const updatedCart = cartItems.map(cartItem => {
            if (cartItem.product.id === item.product.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const handleIncreaseItem = (item) => {
        const updatedCart = cartItems.map(cartItem => {
            if (cartItem.product.id === item.product.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const handleDeleteItem = (item) => {
        const updatedCart = cartItems.filter(cartItem => cartItem.product.id !== item.product.id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    return (
        <>
            <Navbar />

            <div className="cart-container">
                <h1>Your Cart</h1>
                <p style={{display: cartItems.length > 0 ? 'none' : 'block'}}>Your cart inamey empty.</p>
                <div className='cart-items'>
                    <h2>Item</h2>
                    <h2>Quantity</h2>
                    <h2>Price</h2>
                    <h2>Subtotal</h2>
                    <h2></h2>
                    {cartItems.map((item) => (
                        <>
                            <h4>{item.product.name || 'Loading...'}</h4>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
                                <h4>Quantity: {item.quantity}</h4>
                                <button onClick={() => handleDecreaseItem(item)}>-</button>
                                <button onClick={() => handleIncreaseItem(item)}>+</button>
                            </div>
                            <h4>Price: ${item.product.price || 'Loading...'}</h4>
                            <h4>${item.product.price * item.quantity}</h4>
                            <button style={{height: '3em', margin: '1em 0'}} onClick={() => handleDeleteItem(item)} className='cart-items-delete'>x</button>
                        </>
                    ))}
                </div>
                <div className='cart-total'>
                    <h2>Total: ${cartItems.reduce((total, item, index) => {
                        const cartItem = getItemInCart()[index];
                        return total + (item.price * (cartItem ? cartItem.quantity : 0));
                    }, 0)}</h2>
                </div>
            </div>
        </>
    )
}

export default Cart;