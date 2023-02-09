import React from "react";
import * as styles from "./styles";
import imgSearch from "../../../img/fi-rr-search.svg";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input
          className={styles.searchTxt}
          type="text"
          placeholder="Buscar..."
        />
        <button className={styles.lupa}>
          <img className={styles.lupaImg} src={imgSearch} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Search;
