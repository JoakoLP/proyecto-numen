import React, { useContext, useState } from "react";
import Product from "./Product";
import { CartContext } from "../../contexts/CartProvider";

const Productos = () => {
  // useContext
  const [state, dispatch, actions] = useContext(CartContext);
  const data = state.products;

  // console.log(data);
  const [products, setProducts] = useState(data);

  //   Filter
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const styleBtn =
    "m-1 mx-1.5 p-1.5 px-3 text-neutral-200 bg-purple-700 active:scale-90 active:duration-75 hover:bg-purple-900 hover:text-white rounded duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105";

  return (
    <div className="max-w-[1640px] m-auto px-1 sm:px-4 py-4">
      <h1 className="m-auto text-4xl font-bold text-center border-b-2 border-purple-700 w-min text-neutral-200">
        Componentes
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between pt-4 lg:flex-row">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-white">Filtro por Categoria</p>

          <div className="flex pt-2 overflow-scroll categBtns flex-nowrap justfiy-between h-min whitespace-nowrap">
            <button
              onClick={() => setProducts(data)}
              className={styleBtn + " font-medium "}
            >
              Todo
            </button>
            <button onClick={() => filterType("CPU")} className={styleBtn}>
              Microprocesador
            </button>
            <button onClick={() => filterType("RAM")} className={styleBtn}>
              RAM
            </button>
            <button onClick={() => filterType("SSD")} className={styleBtn}>
              Disco Sólido
            </button>
            <button onClick={() => filterType("HDD")} className={styleBtn}>
              Disco Duro
            </button>
            <button
              onClick={() => filterType("Motherboards")}
              className={styleBtn}
            >
              Motherboard
            </button>
            <button onClick={() => filterType("GPU")} className={styleBtn}>
              Grafica
            </button>
            <button
              onClick={() => filterType("Notebooks")}
              className={styleBtn}
            >
              Notebook
            </button>
            <button onClick={() => filterType("Desktop")} className={styleBtn}>
              PC de Escritorio
            </button>
          </div>
        </div>
      </div>

      {/* display productos */}
      <div className="grid gap-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
