import React, {useEffect, useState} from 'react';
import OrderItem from '../components/OrderItem'
import '../styles/orders.scss'
const Orders = () => {
  
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    renderOrders()
  }, [])
  
  function renderOrders() {
    fetch('http://localhost:8080/orders/getAll', {
      method: 'GET',
      headers: {"Content-Type":"application/json"},
    })
      .then(response => response.json())
      .then(array => setOrders([...array]))
      .then(() => console.log('Receiving orders'))
  }
  
  function doOrder(order) {
    console.log(order)
    order.current_status = 'done'
    console.log(order)
    fetch('http://localhost:8080/orders/add', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(order)
    })
      .then(renderOrders)
      .then(() => console.log('Order is sent'))
    
  }
  
  return (
    <div className='orders-list'>
      <h1 className='orders-list-title'>Orders queue</h1>
      {orders.map(o =>
        <OrderItem
          onClick={() => doOrder(o)}
          key = {o.order_number}
          number={o.order_number}
          status={o.current_status}
          cost={o.cost}
        />
      )}
    </div>
  );
};

export default Orders;
