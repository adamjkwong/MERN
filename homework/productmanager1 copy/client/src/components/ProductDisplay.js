import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';
const ProductDisplay = (props) => {
    const [productList, setProductList] = useState([]); 
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>console.log(err))
        }

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
            <table>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Entity Link</th>
                </tr>
            </table>
            {
            productList.map((product, idx) => (
                <div>
                    <table>
                        <tr>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td><Link to = {product._id}>Link to specific product</Link> <div onClick={(e)=>{deleteProduct(product._id)}}>Click Delete</div></td>
                        </tr>
                    </table>
                </div>
            ))
            }
        </div>
    )
}
export default ProductDisplay;