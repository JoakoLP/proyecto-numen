import React from 'react'
import './Card.css';



export default function Card(props) {
  
  return (
    <div className='card box-content h-32 w-32 m-2 p-2 rounded-xl '>
      <img 
      className='product--image object-contain'
      src={props.url} 
      alt='products'
      />
      <h3 className='card-title p-4 '>{props.title} </h3>
      
      <p className='price'>{props.price} </p>
      <p className='card-text text-sm font-light opacity-50'>{props.description} </p>
      
      <p>
        <button className='card-button'>Add to Cart</button>
      </p>
    </div>
  )
}