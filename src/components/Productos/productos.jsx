import React, { useContext, useState } from "react";
// import { data } from "./productoData";
import Product from "./Product";
// import { addToCart } from "../Cart/Cart";
import Cart from "../Cart/Cart";
import { CartContext } from "../../contexts/CartProvider";
import CartProvider from "../../contexts/CartProvider";

const Productos = () => {
  // useContext
  const [state, dispatch, actions] = useContext(CartContext);
  const data = state.products;

  // console.log(state.products);
  // console.log(dato);
  console.log(data);
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
              onClick={() => filterType("CPU")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Microprocesador
            </button>
            <button
              onClick={() => filterType("RAM")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              RAM
            </button>
            <button
              onClick={() => filterType("Motherboards")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Motherboard
            </button>
            <button
              onClick={() => filterType("GPU")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Grafica
            </button>
            <button
              onClick={() => filterType("Notebooks")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              Notebooks
            </button>
            <button
              onClick={() => filterType("Desktop")}
              className="m-1 border-[#8a4af3] text-black hover:bg-purple-900 hover:text-white rounded-full p-2 "
            >
              PC de Escritorio
            </button>
          </div>
        </div>
      </div>

      {/* display productos */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
