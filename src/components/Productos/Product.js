import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const Product = (props) => {
  const { data } = props;

  // useContext;
  const [state, dispatch, actions] = useContext(CartContext);

  return (
    <div
      key={data.id}
      className="flex sm:flex-col h-min sm:h-[500px] justify-between p-2 duration-150 border border-purple-700 rounded-lg shadow-lg active:shadow-[rgb(196,36,255,0.25)] active:scale-105 lg:hover:shadow-[rgb(196,36,255,0.25)] lg:hover:scale-105"
    >
      <div className="w-[130px] shrink-0 sm:w-auto h-[130px] sm:h-[250px] p-2 flex items-center justify-center sm:mx-1 bg-white rounded-md">
        <img
          src={data.img}
          alt={data.name}
          className="object-contain w-full h-full truncate rounded-t-lg "
        />
      </div>

      <div className="flex flex-col min-h-max w-full sm:h-[45%] justify-between px-2 my-2 sm:my-4 text-center select-text">
        <p className="text-xs sm:text-sm md:text-base text-left sm:text-center h-[64px] sm:h-[80px] md:h-[96px] text-ellipsis text-white overflow-hidden hover:overflow-visible">
          {data.name}
        </p>
        <div className="flex flex-col self-end sm:w-full sm:self-auto w-min">
          <span className="py-1 font-bold text-center text-white rounded-full ">
            ${data.price}
          </span>
          <button
            onClick={() => {
              actions.addToCart(data.id, data.name);
            }}
            className="bg-[#8a4af3] self-center select-none text-white font-bold text-sm py-1 sm:py-2 px-2 sm:px-4 rounded duration-100 active:scale-110 active:duration-75 lg:hover:bg-purple-900 lg:hover:shadow-inner lg:hover:shadow-neutral-800 active:shadow-inner active:shadow-neutral-800 w-min whitespace-nowrap"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
