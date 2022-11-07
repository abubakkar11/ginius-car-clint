import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id , img , price , title} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <img className='rounded-md w-96' src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl font-semibold text-orange-600'>Price : {price}</p>
                <div className="card-actions justify-end">
                   <Link to={`/checkout/${_id}`}>
                   <button className="btn btn-primary">Buy Now</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;