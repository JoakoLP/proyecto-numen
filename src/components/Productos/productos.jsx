import React, { useContext, useState } from "react";
import { data } from "./productoData";
import Product from "./Product";
// import { addToCart } from "../Cart/Cart";
import Cart from "../Cart/Cart";
// import { CartContext } from "../../contexts/CartProvider";
import CartProvider from "../../contexts/CartProvider";

const Productos = () => {
  // useContext
  // const [state, dispatch, actions] = useContext(CartContext);
  // const { productos, cart } = state;

  // const [cart, setCart] = useContext(CartContext);
  // console.log(cart);

  //   console.log(data);
  const [products, setProducts] = useState(data);

  //   Filter
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-4">
      <h1 className="text-4xl font-bold text-center text-black">Componentes</h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-white">Filtro por Categoria</p>
          <div className="flex flex-wrap justfiy-between">
            <button
              onClick={() => setProducts(data)}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2"
            >
              All
            </button>
            <button
              onClick={() => filterType("microprocesador")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Microprocesador
            </button>
            <button
              onClick={() => filterType("ram")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              RAM
            </button>
            <button
              onClick={() => filterType("motherboard")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Motherboard
            </button>
            <button
              onClick={() => filterType("grafica")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Grafica
            </button>
          </div>
        </div>
      </div>

      {/* display productos */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {/* {Cart(products)} */}

        {/* {products.map((product) => Cart(product))} */}
        {/* {products.map((product) => (
            <Product key={product.id} data={product} addToCart={addToCart} />
          ))} */}

        {products.map((product) => (
          // <CartProvider key={product.id}>
          <Product key={product.id} data={product} />
          // </CartProvider>
        ))}

        {/* {products.map((item, index) => (
          <div
            key={index}
            className="duration-300 border rounded-lg shadow-lg hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-contain rounded-t-lg"
            />

            <div className="flex flex-col justify-between px-2 py-4 space-y-4 text-center">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="p-1 font-bold text-black rounded-full ">
                  {item.price}
                </span>
              </p>
              <button
                // onClick={addToCart}
                class="bg-[#8a4af3] hover:bg-purple-900  text-white font-bold sm:text-xs py-2 px-4 rounded-full"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Productos;
