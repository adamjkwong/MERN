import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const AuthorForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/authors', {
            name,   
        })
            .then(res=>{
                console.log(res);
                navigate("/")
            })
            .catch(err=>console.log(err))
    }
    const onNavigate = (e) => {
        navigate("/")
    }

    //onChange to update firstName and lastName
    return (
        <div>
            <Link to = "/">Home</Link>
            <h2>Add a new author: </h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label>
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
            <button type="submit" onClick={onNavigate}>
                Cancel
            </button>
        </div>
    )
}
export default AuthorForm;