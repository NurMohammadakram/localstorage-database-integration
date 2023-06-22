import React, { useEffect, useState } from 'react';
import './Customers.css';
import Customer from '../Customer/Customer';

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect( () => {
        async function fetchData() {
        const data = await fetch('data.json')
        const response = await data.json();
        console.log(response);
        setCustomers(response);
        };
        fetchData();
        
    }, [])
    
    return (
        <div>
            <h1>Our customers review</h1>
            <div className='customer-container'>
                {
                    customers.map(customer => <Customer key={customer.id} customer={customer}/>)
                }
            </div>
        </div>
    );
};

export default Customers;