import React, { useState } from 'react';

const InputField = () => {
    const [color, setColor] = useState("");
    const [colorError, setColorError] = useState("");
    var handleColor = (e) => {
        const new_value = e.target.value
        if(new_value.length == 0) {
            setColorError("");
        } else if(new_value.length < 2) {
            setColorError("Color must be at least 2 characters!");
        } else {
            setColorError("");
        }
        setColor(e.target.value)
    }
    
    return (
        <div>
            <form>
                <label>Add a new box</label>
                <input type="text" onChange={ (e) => handleColor(e) } />
                <button>Add Box</button>
                {
                    colorError ?
                    <p style={{color:'red'}}>{ colorError }</p> :
                    ''
                }
            </form>
        </div>
    )
};

export default InputField;

// const createUser = (e) => {
//     e.preventDefault();
//     const newUser = { firstName, lastName, email, password, confirmPassword };
//     console.log("Welcome", newUser);
// };
    // var handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    //     if(firstName.length == 0) {
    //         setFirstNameError("");
    //     } else if(firstName.length < 2) {
    //         setFirstNameError("First name is required!");
    //     } else if(firstName.length < 5) {
    //         setFirstNameError("First name must be at least 5 characters!");
    //     } else {
    //         setFirstNameError("");
    //     }
    // }    return(
    //     <div>
    //         <form onSubmit={ createUser } class="the_content">
    //             <p>Hello World!</p>
    //             <div class="the_form">
    //                 <label>First Name: </label> 
    //                 <input type="text" onChange={ (e) => handleFirstName(e) } />
    //             </div>
    //             {
    //                 firstNameError ?
    //                 <p style={{color:'red'}}>{ firstNameError }</p> :
    //                 ''
    //             }

    
