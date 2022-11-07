import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderDetails from './OrderDetails';

const Orders = () => {
  const [orders, setOrders] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user?.email])
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id} `, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json;'
      },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }
  const handleDelete = (id) => {
    const process = window.confirm('Are you sure')
    if (process) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => console.error(err))
    }
  }
  return (
    <div>
      <h1>Total Orders : {orders.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Order Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map(order => <OrderDetails
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></OrderDetails>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )


}
export default Orders;