import '../styles/navigation.scss'
import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <header className='header'>
      <div className="header_container">
        <Link to="/">
          <img className='header_image' src={require('../images/waiter.png')} alt=""/>
        </Link>
        <Link to="/orders">
          <img className='header_image' src={require('../images/cook.png')} alt=""/>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
