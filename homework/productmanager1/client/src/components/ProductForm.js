import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,   
            price,
            description,
        })
            .then(res=>{
                console.log(res);
            //    window.location.reload()
            })
            .catch(err=>console.log(err))
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            {/*<br/>*/}
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;