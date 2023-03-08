import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { SearchContext } from "../../contexts/SearchProvider";
import Product from "../Productos/Product";

const SearchSect = () => {
  // useContext
  const [state, dispatch, actions] = useContext(CartContext);
  const data = state.products;

  const [searchData, setSearchData] = useContext(SearchContext);

  let searchArray = [...data];

  if (searchData != "") {
    searchArray = data.filter((item) => {
      return item.name.toLowerCase().includes(searchData.toLowerCase());
    });
  } else {
    searchArray = [...data];
  }
  // console.log(searchArray);

  // console.log(data);
  const [products, setProducts] = useState(searchArray);

  //   Filter
  const filterType = (category) => {
    setProducts(
      searchArray.filter((item) => {
        return item.category === category;
      })
    );
  };
  useEffect(() => {
    setProducts(searchArray);
  }, [searchData]);
  console.log(products);
  const styleBtn =
    "m-1 mx-1.5 p-1.5 px-3 text-neutral-200 bg-purple-700 active:scale-90 active:duration-75 hover:bg-purple-900 hover:text-white rounded duration-300 hover:shadow-inner hover:shadow-neutral-800 hover:scale-105";

  return (
    <div className="max-w-[1640px] m-auto px-1 sm:px-4 py-10">
      <h1 className="m-auto text-2xl font-bold text-center border-b-2 border-purple-700 whitespace-nowrap w-min text-neutral-200">
        Resultado de búsqueda
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

export default SearchSect;
