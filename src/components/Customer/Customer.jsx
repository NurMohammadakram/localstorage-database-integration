import React from 'react';
import './Customer.css';
import { addToCart } from '../../utilities/database-manager';

const Customer = ({customer}) => {
    const {id, name, age, sex, email, company, review, address} = customer;
    return (
        <div className='customer-cart'>
            <h4>{name}</h4>
            <p>{company}</p>
            <p>{review}</p>
            <button onClick={() => addToCart(id)}>add to cart</button>
        </div>
    );
};

export default Customer;