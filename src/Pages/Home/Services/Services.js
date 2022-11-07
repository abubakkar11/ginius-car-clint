import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-5'>
            <div className='text-center mb-5'>
                <h1 className='text-2xl  text-orange-600 font-bold'>Service</h1>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='mt-3'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 my-4'>
             {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
             }
            </div>
        </div>
    );
};

export default Services;