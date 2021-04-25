import React, { useState } from 'react';

const TabTop = props => {
    const [tabNum] = useState("");
    const [message, setMessage ] = useState("");
    const onClickHandler = (e) => {
        e.preventDefault();
        alert("You have clicked the button");
        setMessage ("The selected tab is: " + props.tabNum) ;
    }
// var handleTab = (e) => {
//     setFirstName(e.target.value)
//     if(firstName.length == 0) {
//         setFirstNameError("");
//     } else if(firstName.length < 5) {
//         setFirstNameError("First name must be at least 5 characters!");
//     } else {
//         setFirstNameError("");
//     }
// }
 
    return (
        <div>
            <p class = "TabTopper" onClick={ onClickHandler }>Tab Num: { props.tabNum } </p>
        </div>
    );
}
    
export default TabTop;