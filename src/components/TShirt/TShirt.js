import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { _id, index, price, picture, name, gender } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;