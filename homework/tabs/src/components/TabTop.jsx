import React from 'react';

const Tabtop = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }
 
    return props.movies.map( (item, index) => {
        return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
    
export default TabTop;
