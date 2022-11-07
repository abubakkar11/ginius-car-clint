import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
    const { title, _id , price , img} = useLoaderData()
    const { user } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.fistName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregister';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            name: name,
            phone: phone,
            price:price,
            img:img,
            email: email,
            message: message,
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                  
                    form.reset()
                    toast.success('Your Order Pleased')
                }
            })
            .catch(error => console.error(error))
        console.log(order)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 mb-5 lg:grid-cols-2 gap-5 ml-52 w-3/5'>
                    <input type="text" placeholder="Fist Name" name='fistName' className="input input-bordered input-info w-full rounded-md max-w-xs" />
                    <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered input-info w-full rounded-md max-w-xs" />
                    <input type="text" placeholder="Phone" name='phone' className="input input-bordered input-info w-full rounded-md max-w-xs" />
                    <input type="text" placeholder="Email" name='email' defaultValue={user?.email ? user?.email : "Not Register"} className="input input-bordered input-info w-full rounded-md max-w-xs" readOnly />
                </div>
                <textarea className="textarea py-4 rounded-md w-3/5 ml-52 mr-40 textarea-warning" placeholder="Message"></textarea>
                <input className='btn btn-warning ml-52 mb-5 rounded-md' name='message' type="submit" value="Conform Order" />
            </form>
        </div>
    );
};

export default CheckOut;