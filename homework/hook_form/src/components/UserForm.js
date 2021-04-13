import react, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm_password, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first_name, last_name, email, password, confirm_password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={ createUser } class="the_content">
                <p>Hello World!</p>
                <div class="the_form">
                    <label>First Name: </label> 
                    <input type="text" value={first_name} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div class="the_form">
                    <label>Last Name: </label> 
                    <input type="text" value={last_name} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div class="the_form">
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div class="the_form">
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div class="the_form">
                    <label>Confirm Password: </label>
                    <input type="text" value={confirm_password} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div class="the_content">
                <p>
                    First Name: {first_name}
                </p>
                <p>
                    Last Name: {last_name}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Password: {password}
                </p>
                <p>
                    Confirm Password: {confirm_password}
                </p>                
            </div>
        </div>
    );
};
    
export default UserForm;