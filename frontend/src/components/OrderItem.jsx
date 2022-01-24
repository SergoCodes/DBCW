import React from 'react';

const OrderItem = ({number, status, cost, onClick}) => {
  return (
    <div onClick={onClick} className='order-item'>
      <div className="item-number">{number}</div>
      <div className="item-status">{status}</div>
      <div className="item-cost">{cost}</div>
    </div>
  );
};

export default OrderItem;
