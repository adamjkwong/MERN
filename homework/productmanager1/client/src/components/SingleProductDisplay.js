import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
const SingleProductDisplay = (props) => {
    const {id} = props;
    const [productList, setProductList] = useState([]); 
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.put('http://localhost:8000/api/products/'+props.id, {
            "title":title,
            "price":price,
            "description":description,
        })
        .then(res=>{setProductList(res.data.products)
        })
        .catch(err=>console.log(err))
    }

    const onDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/products/'+props.id)
        .then(res=>{
            console.log(res.data);
            navigate("/")
        })
        .catch(err=>console.log(err))
        }


    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+props.id)
            .then(res=>{
                setProductList(res.data.products)
                console.log(res.data.products)
                setTitle(res.data.products.title)
                setPrice(res.data.products.price)
                setDescription(res.data.products.description)
            })
            .catch(err=>console.log(err))
    },[])
    //These brackets are for protection, use them whenever I do a useEffect

    return (
        <div>
            <h1>Welcome to the detailed product page</h1>
            <Link to = "/">Take me to the product list page</Link>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Update Title: </label>
                <input type="text" value = {title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Update Price: </label>
                <input type="text" value = {price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Update Description: </label>
                <input type="text" value = {description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
            </form>
            <button type="submit" onClick={onDelete}>
                delete
            </button>
            {
            <div>
            <h2>{productList.title}</h2>
            <h3>${productList.price}</h3>
            <h4>{productList.description}</h4>
            </div>
            }
        </div>
    )
}

export default SingleProductDisplay;
