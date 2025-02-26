import React from 'react';
import './Business.css';
import { Link } from "react-router-dom";

function Business(prop) {
  return (
    <div className='restaurant-card'>
      <img className='image' src={prop.info.img} alt='pizzeria'/>
      <div className='info'>
      <p className='name'>{prop.info.name}</p>
      <p className='address'>{prop.info.address}</p>
      <p className='category'>{prop.info.category}</p>
      <p className='rating'>{prop.info.rating} stars</p>
      <p className='reviews'>{prop.info.reviews} reviews</p>
    <p><Link to={prop.menu_url}>{prop.info.name}</Link></p><
      </div>
    </div>
  );
}
export default Business;