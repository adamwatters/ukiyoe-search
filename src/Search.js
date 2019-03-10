import React from "react";
import { SearchBox, Stats } from "react-instantsearch-dom";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="main-search">
        <SearchBox />
      </div>
      <Stats />
    </div>
  );
};

export default Search;
