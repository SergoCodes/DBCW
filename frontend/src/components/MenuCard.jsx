import React from 'react';
import '../styles/menu.scss'

const MenuCard = ({title, cost, source, onClick}) => {
  return (
    <div onClick={onClick} className="card">
      <img className='card_image' src={require(`../${source}`)} alt=""/>
      <h3 className="card_title">{title}</h3>
      <div className="card_cost">{cost}</div>
    </div>
  );
};

export default MenuCard;
