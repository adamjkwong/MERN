import React, { useState } from 'react';
    
    
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor( color );
        //Add a new form to instance of boxdisplay.jsx to app.js
        //Appending?
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Color</h1>
            <input
                placeholder="Insert a color here"
                onChange={ (e) => setColor(e.target.value) }
                value={ color }
            ></input>
            <input type="submit" value="Send Color" />
        </form>
    );
};
    
export default BoxForm;