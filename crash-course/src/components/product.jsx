import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <p style={{display: props.description ? "block" : "none"}}>{props.description}</p>
        </div>
    );
}

export default Product;
