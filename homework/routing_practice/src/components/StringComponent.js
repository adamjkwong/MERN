
import React from 'react';
const StringComponent = props => {
    console.log(props)
    if (props.input>0) {
        return (
            <div>
                <h1>This is a number</h1>
                <h1>The number is: {props.input}</h1>
            </div>
        );
    } 
    else if (typeof props.input === 'string'){
            return (
                <div>
                <h1
                    style={
                    props.fontColor
                ? { color: props.fontColor, backgroundColor: props.backColor }
                : null
            }
                >
                    This is a word
                    The Word is {props.input}</h1>
                </div>
        );
        };
}

export default StringComponent;