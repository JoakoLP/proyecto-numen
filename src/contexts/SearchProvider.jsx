import React, { useState, createContext } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  return (
    <SearchContext.Provider value={[searchData, setSearchData]}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
