import React, { useState } from 'react';
    
    
const BoxForm = (props) => {
    const {boxColorArray, setBoxColorArray } = props;
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxColorArray ([ ...boxColorArray, color ]);
    }
    
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