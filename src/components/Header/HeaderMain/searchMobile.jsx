import React, { useContext, useState } from "react";
import * as styles from "./styles";
import imgSearch from "../../../img/fi-rr-search.svg";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../contexts/SearchProvider";
import { useDisableBodyScroll } from "./User/CartModel/useDisableBodyScroll";
import { useEscapeToClose } from "./User/CartModel/useEscapeToClose";

const SearchMobile = ({ status, setStatus }) => {
  useDisableBodyScroll(status);
  useEscapeToClose(status, setStatus);

  const [searchData, setSearchData] = useContext(SearchContext);
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleClick = () => {
    setSearchData(searchField);
    setSearchField("");
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {status && (
        <div
          className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full"
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
          onClick={() => setStatus(!status)}
        >
          <div
            className="absolute top-0 flex items-center justify-center w-full py-1 bg-black h-min"
            onClick={(e) => handleChildElementClick(e)}
          >
            <div className="w-[90%] m-auto flex justify-between border border-white rounded-lg py-5px px-7px bg-darker-gray items-center">
              <input
                className={styles.searchTxt}
                type="text"
                placeholder="Buscar..."
                value={searchField}
                onChange={handleChange}
              />
              <button
                className={styles.lupa}
                onClick={() => {
                  handleClick();
                  setStatus(!status);
                }}
                // onSubmit={handleClick}
              >
                <Link to="/search/">
                  <img className={styles.lupaImg} src={imgSearch} alt="" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>

    // <>
    //   {status && (
    //     <div
    //       className={styles.overlay}
    //       style={{ background: "rgba(0, 0, 0, 0.5)" }}
    //       onClick={() => setStatus(!status)}
    //     >
    //       <div
    //         className={styles.modCont}
    //         style={{ boxShadow: "rgba(100,100,111, 0.2) 0px 7px 29px 0px" }}
    //         onClick={(e) => handleChildElementClick(e)}
    //       >
    //         <div className={styles.modHeader}>
    //           <h3 className={styles.modTitle}>Carrito de Compras</h3>
    //         </div>
    //         <button
    //           className={styles.closeBtn}
    //           onClick={() => setStatus(!status)}
    //         >
    //           <span className="flex flex-wrap content-center pl-[5px]">
    //             Esc
    //           </span>
    //           <span className={styles.closeBtnX}>{x}</span>
    //         </button>

    //         <div className={styles.childrenCont}>{children}</div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default SearchMobile;
