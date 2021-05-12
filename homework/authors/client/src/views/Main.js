import AuthorForm from '../components/AuthorForm';
import AuthorDisplay from '../components/AuthorDisplay';
import AuthorDisplayEdit from '../components/AuthorDisplayEdit';
import React, { useState } from 'react'
import '../App.css';


const Main = () => {
    const [author, setAuthor] = useState([]);

    return (
        <div class ="mainbody">
            <h2>Favorite Authors: </h2>
            <AuthorDisplay/>
        </div>
    )
}
export default Main;
