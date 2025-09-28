import './css/ShowProduct.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from './Navbar';

function showProduct() {
    const {product_id} = useParams();

    const [Product, SetProduct] = useState([{
        id: "",
        name: "",
        description: "",
        price: "",
        media_url: ""
    }]);

    const handleAddToCart = () => {
        let cart = localStorage.getItem("cart");
        let cartItems = cart ? JSON.parse(cart) : [];

        const existing = cartItems.find(item => item.product.id === Product.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cartItems.push({ product: Product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("http://localhost:8080/api/v1/product/" + product_id);
            const data = await response.json();
            SetProduct(data);
        }
        fetchProduct();
    }, []);

    return (
        <>
            <Navbar/>

            <div style={{marginTop: "100px"}}></div>
            <div className="show-product-grid">
                <div className="show-product-photo">
                    <img className='show-product-photo-canvas' src={Product.media_url}></img>
                </div>

                <div className="show-product-description">
                    <h1>{Product.name}</h1>
                    <p style={{marginBottom: 0}}>{Product.description}</p>
                    <h2 style={{marginTop: 0}}>Price: {Product.price}</h2>

                    <div>
                        <button onClick={() => handleAddToCart(Product)} className='add-to-cart-button'>Add to Cart</button>
                    </div>
                </div>

            </div>
        </>
    )
        
}

export default showProduct;