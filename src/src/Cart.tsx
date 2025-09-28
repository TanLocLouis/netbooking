import React, { useState, useEffect } from 'react';
import './css/cart.css';

function Cart() {
    function getItemInCart() {
        const items = localStorage.getItem('cart');
        return items ? JSON.parse(items) : [];
    }

    const [cartItems, setCartItems] = useState([]);
    const fetchProduct = async (product_id) => {
        const response = await fetch("http://localhost:8080/api/v1/product/" + product_id);
        const data = await response.json();
        console.log(data);
        return data;
    }

    useEffect(() => {
        for (const item of getItemInCart()) {
            fetchProduct(item.product_id).then(data => {
                setCartItems(prevItems => [...prevItems, data]);
            });
    }}, []);

    return (
        <>
            <div className="cart-container">
                <h1>Your Cart</h1>
                <p style={{display: cartItems.length > 0 ? 'none' : 'block'}}>Your cart inamey empty.</p>
                <div className='cart-items'>
                    <h2>Item</h2>
                    <h2>Quantity</h2>
                    <h2>Price</h2>
                    <h2>Subtotal</h2>
                    {getItemInCart().map((item, index) => (
                        <>
                            <h4>{cartItems[index]?.name || 'Loading...'}</h4>
                            <h4>Quantity: {item.quantity}</h4>
                            <h4>Price: ${cartItems[index]?.price || 'Loading...'}</h4>
                            <h4>${item.quantity * cartItems[index]?.price}</h4>
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