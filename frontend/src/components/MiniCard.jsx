import React from 'react';
import '../styles/menu.scss'

const MiniCard = ({source, title, cost, onClick}) => {
  return (
    <div onClick={onClick} className="mini-card">
      <img className='card_image' src={require(`../${source}`)} alt=""/>
      <div className="wrapper">
        <h3 className="card_title">{title}</h3>
        <div className="card_cost">{cost}</div>
      </div>
    
    </div>
  );
};

export default MiniCard;
