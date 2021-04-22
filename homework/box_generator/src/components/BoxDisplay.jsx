import React from 'react';
    
    
const BoxDisplay = (props) => {
    const { boxColorArray } = props;
    return (
        <div>
            {
                boxColorArray.map((color, index) => (
                <div key={index}  style ={{ 
                    display: "inline-block",
                    margin: "10px 10px 10px 10px",
                    width: "50px",
                    height: "50px",
                    backgroundColor: color
                    }}>
                </div>
                ))
            }
        </div>
    );
};
    
export default BoxDisplay;