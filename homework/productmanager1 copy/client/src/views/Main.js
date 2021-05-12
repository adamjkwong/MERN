import ProductForm from '../components/ProductForm';
import ProductDisplay from '../components/ProductDisplay';
import React, { useState } from 'react'
import '../App.css';


const Main = () => {
    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    return (
        <div class ="mainbody">
            <h1>Product Manager</h1>
            <ProductForm/>
            <h2>All Products: </h2>
            <ProductDisplay removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
