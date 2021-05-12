import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
const SingleProductDisplay = (props) => {
    const {id} = props;
    const [authorList, setAuthorList] = useState([]); 
    const [name, setName] = useState(""); 

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.put('http://localhost:8000/api/authors/'+props.id, {
            "name":name,
        })
        .then(res=>{setAuthorList(res.data.authors)
        })
        .catch(err=>console.log(err))
    }

    const onDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/authors/'+props.id)
        .then(res=>{
            console.log(res.data);
            navigate("/")
        })
        .catch(err=>console.log(err))
        }


    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/'+props.id)
            .then(res=>{
                setAuthorList(res.data.authors)
                console.log(res.data.authors)
                setName(res.data.authors.name)
            })
            .catch(err=>console.log(err))
    },[])
    //These brackets are for protection, use them whenever I do a useEffect

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to = "/">Home</Link>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Update Title: </label>
                <input type="text" value = {name} onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <input type="submit"/>
            </form>
            <button type="submit" onClick={onDelete}>
                delete
            </button>
            {
            <div>
            <h2>{authorList.name}</h2>
            </div>
            }
        </div>

    )
}

export default SingleProductDisplay;
