import react, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const [confirmPasswordError, setConfirmPasswordError] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };
    var handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(firstName.length == 0) {
            setFirstNameError("");
        } else if(firstName.length < 2) {
            setFirstNameError("First name is required!");
        } else if(firstName.length < 5) {
            setFirstNameError("First name must be at least 5 characters!");
        } else {
            setFirstNameError("");
        }
    }
    var handleLastName = (e) => {
        setLastName(e.target.value)
        if(lastName.length < 2) {
            setLastNameError("Last name is required!");
        } else if(lastName.length < 5) {
            setLastNameError("Last name must be at least 5 characters!");
        } else {
            setLastNameError("");
        }
    }
    var handleEmail = (e) => {
        setEmail(e.target.value)
        if(email.length < 2) {
            setEmailError("Email is required!");
        } else if(email.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
        }
    }
    var handlePassword = (e) => {
        setPassword(e.target.value)
        if(password.length < 2) {
            setPasswordError("Password is required!");
        } else if(password.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            comparePassword(e.target.value,confirmPassword);
        }
    }
    var handleConfirmPassword = (e) => {
        const new_value = e.target.value
        if(new_value.length < 2) {
            setPasswordError("Password is required!");
        } else if(new_value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            comparePassword(new_value,password);
        }
        setConfirmPassword(new_value)
    }
    var comparePassword = (str1,str2) => {
        if(str1 === str2){
            setPasswordError("")
        } else {
            setPasswordError("These passwords do not match!")

        }
    }
    
    return(
        <div>
            <form onSubmit={ createUser } class="the_content">
                <p>Hello World!</p>
                <div class="the_form">
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => handleFirstName(e) } />
                </div>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
                <div class="the_form">
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => handleLastName(e) } />
                </div>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
                <div class="the_form">
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => handleEmail(e) } />
                </div>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                <div class="the_form">
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => handlePassword(e) } />
                </div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                <div class="the_form">
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ (e) => handleConfirmPassword(e) } />
                </div>
                <input type="submit" value="createUser" />
            </form>
            <div class="the_content">
                <p>
                    First Name: {firstName}
                </p>
                <p>
                    Last Name: {lastName}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Password: {password}
                </p>
                <p>
                    Confirm Password: {confirmPassword}
                </p>                
            </div>
        </div>
    );
};
    
export default UserForm;