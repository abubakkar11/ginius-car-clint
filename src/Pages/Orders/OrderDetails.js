import React from 'react';

const OrderDetails = ({order , handleDelete ,handleUpdate}) => {
    const {serviceName ,service, price , name , phone , img ,message ,status} = order;
    console.log(service)


    
    
    return (
        <div>
            <tr>
        <th>
          <label>
          <button onClick={() => handleDelete(service)} className="btn btn-active btn-ghost rounded-md">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
         {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">Price : {price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={() => handleUpdate(service)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
        </th>
      </tr>
        </div>
    );
};

export default OrderDetails;