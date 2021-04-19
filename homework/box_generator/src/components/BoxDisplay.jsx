import React, { useState } from 'react';
    
    
const BoxDisplay = (props) => {
    return (
        <>
            <h1>All The Colored Boxes</h1>
            <pre style = 
                {{
                display: inlineBlock;
                width: "100px";
                height: "100px";
                background: { props.color }
                }}
            >
            </pre>
        </>
    );
};
    
export default BoxDisplay;