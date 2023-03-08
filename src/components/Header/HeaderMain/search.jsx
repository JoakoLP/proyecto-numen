import React, { useContext, useState } from "react";
import * as styles from "./styles";
import imgSearch from "../../../img/fi-rr-search.svg";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../contexts/SearchProvider";
import SearchMobile from "./searchMobile";
import { SearchOnEnter } from "./searchOnEnter";

const Search = () => {
  const [searchData, setSearchData] = useContext(SearchContext);
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleClick = () => {
    setSearchData(searchField);
    setSearchField("");
  };

  const [modalStatus, setModalStatus] = useState(false);

  SearchOnEnter(searchField, handleClick);

  return (
    <>
      <button
        className={styles.lupaMobile}
        onClick={() => setModalStatus(!modalStatus)}
      >
        <img className={styles.lupaImg} src={imgSearch} alt="" />
      </button>
      <div className={styles.search}>
        <div className={styles.searchForm}>
          <input
            className={styles.searchTxt}
            type="text"
            placeholder="Buscar..."
            value={searchField}
            onChange={handleChange}
          />
          <button className={styles.lupa} onClick={handleClick}>
            <Link to="/search/">
              <img className={styles.lupaImg} src={imgSearch} alt="" />
            </Link>
          </button>
        </div>
      </div>
      <SearchMobile status={modalStatus} setStatus={setModalStatus} />
    </>
  );
};

export default Search;
