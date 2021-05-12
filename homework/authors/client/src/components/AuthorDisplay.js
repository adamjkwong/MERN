import React, { useState,useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../App.css';
const AuthorDisplay = (props) => {
    const [authorList, setAuthorList] = useState([]); 
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/'+authorId)
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>console.log(err))
        }

    const onNavigate = (e) => {
        navigate("/edit/"+e)
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                console.log(res)
                setAuthorList(res.data.authors)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
},[])
    //These brackets are for protection, use them whenever I do a useEffect

    return (
        <div>
            <Link to = "/new">Add an author</Link>
            <h2>We have quotes by: </h2>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Entity Actions</th>
                </tr>
            </table>
            {
            authorList.map((author, idx) => (
                <div>
                    <table>
                        <tr>
                            <td>{author.name}</td>
                            <td><div onClick={(e)=> {onNavigate(author._id)}}>Edit</div> <div onClick={(e)=>{deleteAuthor(author._id)}}>Click Delete</div></td>
                        </tr>
                    </table>
                </div>
            ))
            }
        </div>
    )
}
export default AuthorDisplay;