import React from 'react'
import './Card.css';



export default function Card(props) {
  
  return (
    <div className='card  flex sm:flex-col h-min sm:h-[350px] justify-between p-2 duration-150 border border-purple-700 rounded-lg shadow-lg hover:shadow-[rgb(196,36,255,0.25)] hover:scale-105'>
      <img 
      className='product--image object-contain'
      src={props.url} 
      alt='products'
      />
      <h3 className='card-title p-4 '>{props.title} </h3>
      
      <p className='price'>{props.price} </p>
      <p className='card-text text-sm font-light opacity-50'>{props.description} </p>
      
      <p>
        <button className='card-button text-white rounded whitespace-nowrap bg-[#8a4af3] duration-100 active:scale-110 active:duration-100 hover:bg-purple-900 hover:shadow-inner hover:shadow-neutral-800 font-bold sm:text-xs py-2 px-4'>Add to Cart</button>
      </p>
    </div>
  )
}