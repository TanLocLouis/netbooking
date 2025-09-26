import './css/ShowProduct.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function showProduct() {
    const {product_id} = useParams();

    const [Product, SetProduct] = useState([{
        id: "",
        name: "",
        description: "",
        price: "",
        media_url: ""
    }]);

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
            <div className="show-product-grid">
                <div className="show-product-photo">
                    <img className='show-product-photo-canvas' src={Product.media_url}></img>
                </div>

                <div className="show-product-description">
                    <h1>{Product.name}</h1>
                    <p>{Product.description}</p>
                    <h2>Price: {Product.price}</h2>
                </div>
            </div>
        </>
    )
        
}

export default showProduct;