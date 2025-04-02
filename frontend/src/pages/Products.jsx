import React, { useState, useEffect, useRef, createContext } from "react";
import '../assets/css/styles.css'
import '../assets/css/products.css'

/* page imports */
import ProductCard from '../components/ProductCard'

const Product = createContext()

function Products() {
    function openModel(e) {
        let prodId = e.currentTarget.getAttribute('id')
        modal.style.display = "block"
        document.querySelector(".modal-id").innerHTML = prodId
    }

    function closeModel() {
        modal.style.display = 'none'
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const modal = document.querySelector('.modal-window');

    const [backendData, setBackendData] = useState([{}])
    
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then(response => {return response.json()})
        .then(data => {setBackendData(data)});
    }, []);

    // console.log(backendData.data && backendData.data.map(products => products.name))

    return (
        <>
            <div class="body-container">
                <h1 class="hero-header">Products</h1>
                <div class="modal-window">
                    <span class="close" onClick={closeModel}>&times;</span>
                    <div class="modal-content">
                        <h1 class="modal-id"></h1>
                    </div>
                </div>
                <div class="content-container">
                    <form class="product-filter">
                        <h2>Hello</h2>
                    </form>
                    <div class="product-container">
                        <div class="product-bar">
                            <h4>19 items searched</h4>
                            <form>
                                {/* <input type="text"> */}
                            </form>
                        </div>
                        <div class="item-container">
                            {backendData.data && backendData.data.map(product => 
                                <ProductCard 
                                    openModel={openModel} 
                                    key={product._id}
                                    id ={product._id} 
                                    name={product.name} 
                                    price={product.price} 
                                    image={product.image}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Products;