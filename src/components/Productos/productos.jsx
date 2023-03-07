import React, { useContext, useState } from "react";
import Product from "./Product";
import { CartContext } from "../../contexts/CartProvider";

const Productos = () => {
  // useContext
  const [state, dispatch, actions] = useContext(CartContext);
  const data = state.products;

  // console.log(data);
  const [products, setProducts] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  //   Filter
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = data.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) != -1
    })

    setProducts(searchList)
  }

  const styleBtn =
    "m-1 mx-1.5 p-1.5 px-3 text-neutral-200 bg-purple-700 active:scale-90 active:duration-75 hover:bg-purple-900 hover:text-white rounded duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105";

  return (
    <div className="max-w-[1640px] m-auto px-1 sm:px-4 py-4">
      <h1 className="m-auto text-4xl font-bold text-center border-b-2 border-purple-700 w-min text-neutral-200">
        Componentes
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col pt-4 lg:flex-row">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-white mb-2">Busqueda</p>
          <div className="flex items-center">

            <div className="flex border border-purple-200 rounded">
              <input id="buscar"
                type="text"
                className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none  focus:ring-opacity-40"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="px-4 text-white bg-purple-600 border-l rounded" >
                Search
              </button>
            </div>
          </div>
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
    </div >
  );
};

export default Productos;
