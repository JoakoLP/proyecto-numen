import React, { useContext } from 'react'
import './Card.css';
import { CartContext } from "../../contexts/CartProvider";
import { productCards } from './DataCard';


function Card(props) {
    
    const [state, dispatch, actions] = useContext(CartContext);


  return (
    <div className='card flex sm:flex-col h-min sm:h-[450px] justify-between p-2 duration-150 border border-purple-700 rounded-lg  hover:shadow-[rgb(196,36,255,0.25)] hover:scale-105'>
        <img 
        className='product--image object-contain w-[130px] shrink-0 sm:w-auto h-[130px] sm:h-[250px] flex items-center justify-center sm:mx-1 bg-white rounded-md'
        src={props.url} 
        alt='products'
        />
        <div className='flex flex-col min-h-max w-full sm:h-[30%] justify-between px-2 my-1  text-center select-text'>
        <h3 className='card-title text-lg md:text-base sm:text-center h-[64px] sm:h-[50px] md:h-[96px] text-ellipsis text-white overflow-hidden hover:overflow-visible'>
        {props.title} 
        </h3>
        <p className='price py-1 font-bold text-center text-white rounded-full'>
        {props.price} 
        </p>
        <p className='card-text p-1 text-sm font-light opacity-50'>
        {props.description} 
        </p>
      
        <p>
        <button 
        onClick={() => {
            actions.addToCart(productCards);
          }}
        className=' text-white rounded whitespace-nowrap bg-[#8a4af3] duration-100 active:scale-110 active:duration-100 hover:bg-purple-900 hover:shadow-inner hover:shadow-neutral-800 font-bold sm:text-xs py-2 px-4'>
            Add to Cart
        </button>
        </p>
        </div>
    </div>
  )
}
export default Card;