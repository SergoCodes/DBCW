import React, {useState} from 'react';
import '../styles/menu.scss'
import MenuCard from '../components/MenuCard'
import MiniCard from '../components/MiniCard'
import MyButton from '../components/UI/MyButton'
import {logDOM} from '@testing-library/react'
const Menu = () => {
  
  const [order, setOrder] = useState([])
  const [cost, setCost] = useState(0)
  
  const cards = [
    {id: Date.now(), title: 'borsch', cost: 1000, source: 'images/borsch.jpg'},
    {id: Date.now(), title: 'plov', cost: 3000, source: 'images/plov.jpg'},
    {id: Date.now(), title: 'salad', cost: 500, source: 'images/salad.jpg'},
    {id: Date.now(), title: 'cola', cost: 1000, source: 'images/1.jpg'},
    {id: Date.now(), title: 'martini', cost: 1000, source: 'images/2.jpg'},
    {id: Date.now(), title: 'juice', cost: 500, source: 'images/3.jpg'},
    {id: Date.now(), title: 'tiramisu', cost: 2000, source: 'images/4.jpg'},
    {id: Date.now(), title: 'napoleon', cost: 1500, source: 'images/5.jpg'},
    {id: Date.now(), title: 'cake', cost: 1500, source: 'images/cake.jpg'},
    {id: Date.now(), title: 'pie', cost: 1500, source: 'images/pie.jpg'},
  ]
  function addToOrder(card) {
    setOrder([...order, card])
    setCost(TotalCost([...order, card]))
  }
  
  function removeFromOrder(card) {
    let filtered = order.filter(i => i !== card)
    setOrder(filtered)
    setCost(TotalCost(filtered))
  }
  
  function TotalCost(order) {
    let sum = 0
    if (order.length) sum = order.reduce((sum, item) => sum + item.cost, 0)
    return sum
  }
  
  function removeOrders() {
    setOrder([])
    setCost(0)
  }
  
  function sendRequest() {
    if (!order.length) return
    let data = {
      current_status: 'preparing',
      cost: cost,
      client_id: 1,
      waiter_id: randomBetween(1,3),
      cook_id: randomBetween(1,3)
    }
    fetch('http://localhost:8080/orders/add', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
      .then(() => console.log('Order is sent'))
    removeOrders()
  }
  
  return (
    <div className='menu'>
      <h2 className='menu_title'>Menu</h2>
      <div className="menu_block">
        {cards.map(card =>
          <MenuCard
            onClick={() => addToOrder(card)}
            key={card.title}
            title={card.title}
            cost={card.cost}
            source={card.source}
          />
        )}
      </div>
      <div className="order">
        <h2>Order</h2>
        <div className="mini-cards">
          {!order.length
            ? <h2>No dishes to order..</h2>
            :
            
            order.map(cardMini =>
            <MiniCard
              onClick={() => removeFromOrder(cardMini)}
              key={cardMini.id}
              title={cardMini.title}
              cost={cardMini.cost}
              source={cardMini.source}
            />
          )}
        </div>
        
      </div>
      <div className="order_buttons">
        <div className="cost">Total cost: {cost}</div>
        <MyButton onClick={removeOrders} className="cancel-button">Cancel order</MyButton>
        <MyButton onClick={sendRequest} className="order-button">Make order</MyButton>
      </div>
    </div>
  );
};

export default Menu;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
