import React, {useState} from 'react';
import '../styles/menu.scss'
import MenuCard from '../components/MenuCard'
import MiniCard from '../components/MiniCard'
import MyButton from '../components/UI/MyButton'
const Menu = () => {
  
  const [order, setOrder] = useState([])
  const [cost, setCost] = useState(0)
  
  const cards = [
    {id: Date.now(), title: 'Borsch', cost: 1000, source: 'images/borsch.jpg'},
    {id: Date.now(), title: 'Plov', cost: 3000, source: 'images/plov.jpg'},
    {id: Date.now(), title: 'Salad', cost: 500, source: 'images/salad.jpg'},
    {id: Date.now(), title: 'Kaif', cost: 1000, source: 'images/1.jpg'},
    {id: Date.now(), title: 'Martini', cost: 1000, source: 'images/2.jpg'},
    {id: Date.now(), title: 'Juice', cost: 500, source: 'images/3.jpg'},
    {id: Date.now(), title: 'Tiramisu', cost: 2000, source: 'images/4.jpg'},
    {id: Date.now(), title: 'Napoleon', cost: 1500, source: 'images/5.jpg'},
    {id: Date.now(), title: '32324', cost: 1500, source: 'images/5.jpg'},
    {id: Date.now(), title: '324322', cost: 1500, source: 'images/2.jpg'},
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
        <MyButton onClick={() => removeOrders()} className="cancel-button">Cancel order</MyButton>
        <MyButton className="order-button">Make order</MyButton>
      </div>
    </div>
  );
};

export default Menu;
