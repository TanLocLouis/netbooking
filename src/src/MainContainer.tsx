import { useState, useEffect } from "react";
import "./css/MainContainer.css"

function MainContainer() {
    const [Product, SetProduct] = useState([{
        id: "",
        name: "",
        description: "",
        price: "",
        media_url: ""
    }]);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("http://localhost:8080/api/v1/product");
            const data = await response.json();
            SetProduct(data);
        }
        fetchProduct();
    }, []);

    return (
        <>
            <div className="main-container-grid">
                {
                    Product.map((product) => (
                    <div key={product.id}>
                        <img className="thumbnail" src={product.media_url} alt={product.name} />
                    </div>
                ))}
            </div>  
        </>
    ) 
}

export default MainContainer