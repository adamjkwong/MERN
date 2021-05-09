import React, { useState,useEffect } from 'react'
import axios from 'axios';
const ProductDisplay = () => {
    const [ProductList, setProductList] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res)
                setProductList(res.data.products)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    //These brackets are for protection, use them whenever I do a useEffect

    return (
        <div>
            {
            ProductList.map((product, idx) => (
                <div>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <h4>{product.description}</h4>
                </div>
            ))
            }
        </div>
    )
}
export default ProductDisplay;